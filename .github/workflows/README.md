# CI Workflows

## Overview

| Workflow | Trigger | Artifact type | Publishes to Artifactory | GitHub Release |
|---|---|---|---|---|
| `pr.yml` | pull_request → master | — | ❌ | ❌ |
| `merge.yml` | push → master | **SNAPSHOT** | ✅ transient | ❌ |
| `release.yml` | manual (`workflow_dispatch`) | **Release** | ✅ permanent | ✅ |

---

## `pr.yml` — Pull Request

Runs on every PR targeting `master` (skips doc-only changes).

1. **Validate** — JUnit tests that structurally verify all 43+ locale directories (`metadata.json`, `messages.properties`, required files)
2. **Build installer** — full plugin ZIP (`mvn package`)
3. **Build one locale** — builds `pt_PT` end-to-end as a representative smoke test of the per-locale pipeline

No artifacts are deployed anywhere.

---

## `merge.yml` — Merge to Master

Runs on every push to `master` (skips doc-only changes). Also triggerable manually via `workflow_dispatch` with an optional `skip_tests` flag.

Publishes **SNAPSHOT** artifacts (`11.1.0.0-SNAPSHOT`). Artifactory stores these in the snapshot repository — they are **transient** and will be overwritten on the next merge.

1. **Validate** — same JUnit tests as PR
2. **Discover locales** — scans `data/` at runtime; no hardcoded list
3. **Deploy installer** — `mvn deploy` → main installer ZIP to Artifactory
4. **Deploy locale (matrix)** — `mvn deploy -DlangCode=<locale>` in parallel for every locale; each publishes a release-ready ZIP under its locale classifier:
   ```
   org.pentaho.ctools:language-pack-installer-pentaho-plugin:SNAPSHOT:zip:pt_PT
   org.pentaho.ctools:language-pack-installer-pentaho-plugin:SNAPSHOT:zip:fr
   …
   ```

---

## `release.yml` — Release (manual)

Triggered manually from the GitHub Actions UI (`workflow_dispatch`).

**Inputs:**

| Input | Required | Default | Description |
|---|---|---|---|
| `version` | ✅ | — | Release version, e.g. `11.1.0` |
| `dry_run` | — | `true` | Build everything but skip Artifactory deploy and GitHub Release |

**Always run with `dry_run: true` first** to verify all ~40 locale builds succeed before doing a real release.

### What a real release does (`dry_run: false`)

1. Runs `mvn versions:set -DnewVersion=<version>` in each job — removes `-SNAPSHOT`, so Artifactory stores artifacts permanently in the **release** repository
2. Deploys the main installer ZIP to Artifactory
3. Deploys all locale ZIPs to Artifactory in parallel (one job per locale):
   ```
   org.pentaho.ctools:language-pack-installer-pentaho-plugin:11.1.0:zip:pt_PT
   org.pentaho.ctools:language-pack-installer-pentaho-plugin:11.1.0:zip:fr
   …
   ```
4. Creates a **GitHub Release** tagged `v<version>` with all locale ZIPs and the installer ZIP attached as assets — this is what end users download from the [releases page](https://github.com/webdetails/pentahoLanguagePacks/releases)

> The POM version in the repository is **not changed** by this workflow. Version management is done at trigger time via the `version` input.

---

## Required secrets and variables

The `settings.xml` provided by `pentaho/actions-common` uses `${env.RESOLVE_REPO_MIRROR}` as the Maven repository URL. Maven resolves this from the environment at build time — if the variable is absent the URL stays as a literal string and the parent POM resolution fails.

### Secrets (`Settings → Secrets and variables → Actions → Secrets`)

| Secret | Used by | Purpose |
|---|---|---|
| `PENTAHO_CICD_ONE_USER` | `merge.yml`, `release.yml` | Artifactory deploy username |
| `PENTAHO_CICD_ONE_KEY` | `merge.yml`, `release.yml` | Artifactory deploy password/token |

### Variables (`Settings → Secrets and variables → Actions → Variables`)

| Variable | Used by | Purpose |
|---|---|---|
| `ARTIFACTORY_HOST` | all workflows | `one.hitachivantara.com` — Pentaho's Artifactory hostname. Expands to `RESOLVE_REPO_MIRROR=https://one.hitachivantara.com/artifactory/pnt-mvn` at build time. |

> **⚠️ Cross-org note — current CI blocker:** This repo lives in the `webdetails` GitHub org,
> which is **separate** from the `pentaho` org. Secrets and variables defined at the `pentaho`
> org level are **not** automatically available here.
>
> All of the above must be configured explicitly — either as `webdetails` org-level
> secrets/variables or at the repo level. An admin of the `webdetails` org (or this repo) must
> do this **once**:
>
> 1. Go to `webdetails/pentahoLanguagePacks → Settings → Secrets and variables → Actions`
> 2. **Variables tab:** add `ARTIFACTORY_HOST` = `one.hitachivantara.com`
> 3. **Secrets tab:** add `PENTAHO_CICD_ONE_USER` and `PENTAHO_CICD_ONE_KEY`
>
> Until `ARTIFACTORY_HOST` is set, every workflow job will fail with:
> ```
> Cannot access ${env.RESOLVE_REPO_MIRROR} … Non-resolvable parent POM
> ```

## `pentaho/actions-common@stable` — access

[`pentaho/actions-common`](https://github.com/pentaho/actions-common) is a **public** repo,
so it is accessible from any GitHub org including `webdetails`. No extra configuration needed.
