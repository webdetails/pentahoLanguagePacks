# Pentaho Platform Compatibility

## Target Versions

| Version | Status | Branch |
|---------|--------|--------|
| **11.1** (master) | Primary target | `master` |
| **11.0** | Supported | same codebase |
| **10.2** | Backport possible | requires version property change only |

## Framework Versions by Pentaho Release

| Framework | Pentaho 10.x (10.1/10.2) | Pentaho 11.x (11.0/11.1) |
|-----------|--------------------------|--------------------------|
| Spring Framework | 5.3.x | 6.2.12 |
| Servlet API | `javax.servlet` (Servlet 3.x/4.x) | `jakarta.servlet` 6.0 |
| JAX-RS API | `javax.ws.rs` (JAX-RS 2.x) | `jakarta.ws.rs` 3.1.0 |
| Jersey | 1.x (enunciate-jersey-rt) | 3.1.10 |
| Namespace | `javax.*` | `jakarta.*` |

## What This Means for a CPK Plugin

A CPK plugin like `languagePackInstaller` has **no Java source code**. It only:
1. Declares Spring beans pointing to classes in the CPK/CPF JARs
2. Declares a lifecycle listener and content generator class in `plugin.xml`
3. Provides Kettle transformations/jobs and CDE dashboards

The javax → jakarta migration is entirely handled by the **CPK library itself** (cpk-core, cpk-pentaho5). The plugin just needs:
- Correct class references in its XML files
- The matching version of CPK/CPF JARs in `lib/`

## Changes Made for 11.x Compatibility

### 1. `cpk.spring.xml` — Fixed class reference

**Before (broken):**
```xml
<bean id="IPluginCall" class="pt.webdetails.cpf.InterPluginBroker" scope="prototype"/>
```

**After (correct):**
```xml
<bean id="IPluginCall" class="pt.webdetails.cpk.InterPluginBroker" scope="prototype"/>
```

The `InterPluginBroker` class was moved from `pt.webdetails.cpf` to `pt.webdetails.cpk` package. The old reference pointed to a non-existent class.

### 2. `plugin.spring.xml` and `cpk.spring.xml` — Modernized Spring schema

**Before:**
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:ws="http://jax-ws.dev.java.net/spring/core"
       xmlns:wss="http://jax-ws.dev.java.net/spring/servlet"
       xsi:schemaLocation="...spring-beans-2.5.xsd
                           ...spring-context-2.5.xsd
                           ...spring-util-2.5.xsd
                           http://jax-ws.dev.java.net/spring/core ...
                           http://jax-ws.dev.java.net/spring/servlet ...">
```

**After:**
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="...spring-beans.xsd
                           ...spring-context.xsd">
```

Changes:
- Removed version-pinned schema URLs (`spring-beans-2.5.xsd` → `spring-beans.xsd`). Spring resolves these to the current version at runtime regardless.
- Removed `jax-ws.dev.java.net` namespace declarations — these referenced the old JAX-WS Spring integration which is not used and doesn't exist in modern Spring.
- Removed unused `spring-util` schema reference.

### 3. `plugin.xml` — No changes needed

The `plugin.xml` references these classes which are all present in cpk-pentaho5 11.1:
- `pt.webdetails.cpk.CpkLifecycleListener` ✓
- `pt.webdetails.cpk.CpkContentGenerator` ✓

### 4. `cpk.xml` — No changes needed

References element implementation classes in cpk-core/cpk-pentaho5:
- `pt.webdetails.cpk.elements.impl.DashboardElement` ✓
- `pt.webdetails.cpk.elements.impl.KettleJobElement` ✓
- `pt.webdetails.cpk.elements.impl.KettleTransformationElement` ✓

## Class Reference Verification (cpk-pentaho5 11.1.0.0-SNAPSHOT)

All classes referenced by the plugin configuration have been verified to exist:

```
pt/webdetails/cpk/CpkApi.class                        (plugin.spring.xml)
pt/webdetails/cpk/CpkContentGenerator.class            (plugin.xml)
pt/webdetails/cpk/CpkLifecycleListener.class           (plugin.xml)
pt/webdetails/cpk/CpkPentahoEnvironment.class          (cpk.spring.xml)
pt/webdetails/cpk/InterPluginBroker.class               (cpk.spring.xml)
pt/webdetails/cpk/elements/impl/DashboardElement.class  (cpk.xml - in cpk-core)
```

Platform class verified:
```
org/pentaho/platform/web/servlet/JAXRSPluginServlet.class  (plugin.spring.xml - in pentaho-platform-extensions)
```

## Backporting to 10.2

To backport to Pentaho 10.2, only the POM version needs to change:

```xml
<parent>
  <groupId>org.pentaho</groupId>
  <artifactId>pentaho-ce-jar-parent-pom</artifactId>
  <version>10.2.0.0-SNAPSHOT</version>  <!-- Change this -->
</parent>

<properties>
  <pentaho-cpf-plugin.version>10.2.0.0-SNAPSHOT</pentaho-cpf-plugin.version>
  <pentaho-cpk-plugin.version>10.2.0.0-SNAPSHOT</pentaho-cpk-plugin.version>
</properties>
```

**Important:** In Pentaho 10.x, the `InterPluginBroker` class may still be at `pt.webdetails.cpf.InterPluginBroker` (in cpf-pentaho). If backporting, verify the class location and update `cpk.spring.xml` accordingly.

The Spring XML schema URLs (`spring-beans.xsd` without version) work with both Spring 5.x and 6.x — Spring resolves unversioned schemas to the runtime version.

## Key Insight: Plugin Has No Java Code

Since this plugin contains **zero Java source code**, it is inherently compatible with any Pentaho version as long as:
1. The CPK/CPF JAR versions match the target platform
2. The class references in XML files point to existing classes in those JARs
3. The Kettle transformation/job format is compatible (PDI backward-compatible)
4. The CDE dashboard format is compatible (CDE backward-compatible)

The javax → jakarta namespace change, Spring 5 → 6 migration, and Jersey 1 → 3 upgrade are all transparent to this plugin because it never directly imports or uses those APIs.
