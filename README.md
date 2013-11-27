=======
pentahoLanguagePacks
====================

Pentaho Language Pack Installer: plugin for installing language packs

# Disclaimer
The installer works by massively copying files to your Pentaho installation, eventually overwriting existing files. 
It also patches files in your installation.

We heavily recommend that you test the installer in a dedicated BI server before using this installer in a production setting. Please backup both your server and your solution!


##Translators

1. Please fork the Webdetails repository `https://github.com/webdetails/pentahoLanguagePacks.git`. To merge your changes, please issue a pull request.

2. Please save all files using UTF8 encoding.

3. Do not bother to edit the `supported_languages.properties` files,
their contents will be ignored by the language pack installer.

4. The information in the file `data/${languageCode}/metadata.json` will
be used by the installer to patch Pentaho with your translation, so
please make sure the fields `languageCode` and `language` are consistent
with your modifications.

5. The script `endpoints/kettle/generate_language_bundle.py` can be used to generate a language pack from scratch. It works by copying the default tokens and appending a `<TRANSLATE ME>` to each string.


### Known issues

1. In the particular case of the automatically generated files `biserver/tomcat/webapps/pentaho/mantle/mantleMessages_*.properties`, the symbols &lt; and &gt; can break the Pentaho User Console, yielding an error `Error generating XUL: Failed to parse: <?xml version="1.0" encoding="UTF-8"?>`. This error disappears as soon as these symbols are eliminated.