=======
pentahoLanguagePacks
====================

Pentaho Language Pack Installer: plugin for installing language packs

##Translators

1. Please fork the Webdetails repository `https://github.com/webdetails/pentahoLanguagePacks.git`. To merge your changes, please issue a pull request.

2. Please save all files using UTF8 encoding.

3. Do not bother to edit the `supported_languages.properties` files,
their contents will be ignored by the language pack installer.

4. The information in the file `data/${languageCode}/metadata.json` will
be used by the installer to patch Pentaho with your translation, so
please make sure the fields `languageCode` and `language` are consistent
with your modifications.
