=======
pentahoLanguagePacks
====================

Pentaho Language Pack Installer: plugin/application for installing language packs in Pentaho 5+. Now you can have Pentaho in your favourite language!

The "pentahoLanguagePacks" project is a Pentaho plugin that allows a system administrator to install any localised version of the user interface of the Pentaho Business Intelligence server. 

Whenever a given localisation reaches a state in which it becomes usable, trimmed versions of the installer are released to the Pentaho Marketplace, containing only the files relevant to that locale.

# Disclaimer

The installers work by massively copying files to your Pentaho installation, eventually overwriting and patching existing files in your installation.

We heavily recommend that you test the installer in a dedicated BI server before using this installer in a production setting. Please backup both your server and your solution!


# Installing the application

**If you are only interested in installing an existing language pack, then you should simply download it from the marketplace.**

The Language Pack Installer requires Pentaho 5+, and depends on the following CTools:

* Community Dashboard Framework (CDF)
* Community Dashboard Editor (CDE)

You can install these packages from the Pentaho Marketplace, or manually download them from [Pentaho's Continuous Integration server](http://ci.pentaho.com) and unzip the .zip file to your `pentaho-solutions/system` folder.


There are basically two ways to get the plugin/application:

1. You can **download a zip file** (e.g. from [github](https://github.com/webdetails/pentahoLanguagePacks)), and unzip it to your `pentaho-solutions/system`. 

2. Alternatively, you can **clone the git repository** hosted on github 
   1. Open a terminal/
   2. Go to your `pentaho-solutions/system` folder
   3. `git clone git@github.com:webdetails/pentahoLanguagePacks.git languagePackInstaller`

3. Restart the biserver.
4. If you login as admin, you'll see an item under the *Tools* menu. You can also use the direct REST call. Assuming you are working in your local machine, it's : [http://localhost:8080/pentaho/plugin/languagePackInstaller/api/main](http://localhost:8080/pentaho/plugin/languagePackInstaller/api/main)


# Contributing with a translation

This application allows you to contribute incrementally to any localisation of your choosing. You just need to:

* install the application
* work on the `data/` folder
* send your work back to us

Please observe the following notes:

1. Merging your changes is much easier for us if you create a github account and fork the Webdetails repository `https://github.com/webdetails/pentahoLanguagePacks.git`. Whenever you want, issue a pull request and we'll merge your changes. If you don't understand any of this, just zip the whole plugin and send it [back to us](mailto:community@pentaho.com).

2. You just need to edit the files under `data/`. 

3. Please save all files using UTF8 encoding.

4. Do not bother to edit the `supported_languages.properties` files,
their contents will be ignored by the language pack installer.

5. The information in the file `data/${languageCode}/metadata.json` will
be used by the installer to patch Pentaho with your translation, so
please make sure the fields `languageCode` and `language` are consistent
with your modifications.

6. The installer installs whatever `languageCode` is defined in `data/metadata.json`. To test different translations, simply modify this file accordingly. If you are working on a single language, e.g. `pt_PT`, just overwrite `data/metadata.json` with `data/pt_PT/metadata.json`.

7. If the language of your choice is not available, [contact us](http://redmine.webdetails.org/projects/lpi/) and we will generate the pack for you. But if you want to generate it yourself, be aware that you can do it:
the script `endpoints/kettle/generate-language.sh` can be used to generate a language pack from scratch, i.e. from the original messages in English. It works by copying the default tokens and appending a `<TRANSLATE ME>` to each string. The script tries to recycle any existing items already on your installation.

The individual language packs are obtained by cloning the plugin and stripping the `data` folder. We already automated the process:  run `ant -DlangCode=pt_PT clean resolve build-language-pack` (replace `pt_PT` with the appropriate language code).


## Common issues

1. In the particular case of the automatically generated files `biserver/tomcat/webapps/pentaho/mantle/mantleMessages_*.properties`, the symbols &lt; and &gt; can break the Pentaho User Console, yielding an error `Error generating XUL: Failed to parse: <?xml version="1.0" encoding="UTF-8"?>`. This error disappears as soon as these symbols are eliminated.


# Appendix 1: Java locales
The following is a list of the locales that Pentaho recognises.

<table>
    <tbody>
        <tr><th>Language</th>
            <th>Country </th>
            <th>Locale ID </th>
        </tr>
        <tr>
            <td>Albanian </td>
            <td>Albania </td>
            <td>sq_AL </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Algeria </td>
            <td>ar_DZ </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Bahrain </td>
            <td>ar_BH </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Egypt </td>
            <td>ar_EG </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Iraq </td>
            <td>ar_IQ </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Jordan </td>
            <td>ar_JO </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Kuwait </td>
            <td>ar_KW </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Lebanon </td>
            <td>ar_LB </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Libya </td>
            <td>ar_LY </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Morocco </td>
            <td>ar_MA </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Oman </td>
            <td>ar_OM </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Qatar </td>
            <td>ar_QA </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Saudi Arabia </td>
            <td>ar_SA </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Sudan </td>
            <td>ar_SD </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Syria </td>
            <td>ar_SY </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Tunisia </td>
            <td>ar_TN </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>United Arab Emirates </td>
            <td>ar_AE </td>
        </tr>
        <tr>
            <td>Arabic </td>
            <td>Yemen </td>
            <td>ar_YE </td>
        </tr>
        <tr>
            <td>Belarusian </td>
            <td>Belarus </td>
            <td>be_BY </td>
        </tr>
        <tr>
            <td>Bulgarian </td>
            <td>Bulgaria </td>
            <td>bg_BG </td>
        </tr>
        <tr>
            <td>Catalan </td>
            <td>Spain </td>
            <td>ca_ES </td>
        </tr>
        <tr>
            <td>Chinese (Simplified) </td>
            <td>China </td>
            <td>zh_CN </td>
        </tr>
        <tr>
            <td>Chinese (Simplified) </td>
            <td>Singapore </td>
            <td>zh_SG</td>
        </tr>
        <tr>
            <td>Chinese (Traditional) </td>
            <td>Hong Kong </td>
            <td>zh_HK </td>
        </tr>
        <tr>
            <td>Chinese (Traditional) </td>
            <td>Taiwan </td>
            <td>zh_TW </td>
        </tr>
        <tr>
            <td>Croatian </td>
            <td>Croatia </td>
            <td>hr_HR </td>
        </tr>
        <tr>
            <td>Czech </td>
            <td>Czech Republic </td>
            <td>cs_CZ </td>
        </tr>
        <tr>
            <td>Danish </td>
            <td>Denmark </td>
            <td>da_DK </td>
        </tr>
        <tr>
            <td>Dutch </td>
            <td>Belgium </td>
            <td>nl_BE </td>
        </tr>
        <tr>
            <td>Dutch </td>
            <td>Netherlands </td>
            <td>nl_NL </td>
        </tr>
        <tr>
            <td>English </td>
            <td>Australia </td>
            <td>en_AU </td>
        </tr>
        <tr>
            <td>English </td>
            <td>Canada </td>
            <td>en_CA </td>
        </tr>
        <tr>
            <td>English </td>
            <td>India </td>
            <td>en_IN </td>
        </tr>
        <tr>
            <td>English </td>
            <td>Ireland </td>
            <td>en_IE </td>
        </tr>
        <tr>
            <td>English </td>
            <td>Malta </td>
            <td>en_MT</td>
        </tr>
        <tr>
            <td>English </td>
            <td>New Zealand </td>
            <td>en_NZ </td>
        </tr>
        <tr>
            <td>English </td>
            <td>Philippines </td>
            <td>en_PH</td>
        </tr>
        <tr>
            <td>English </td>
            <td>Singapore </td>
            <td>en_SG</td>
        </tr>
        <tr>
            <td>English </td>
            <td>South Africa </td>
            <td>en_ZA </td>
        </tr>
        <tr>
            <td>English </td>
            <td>United Kingdom </td>
            <td>en_GB </td>
        </tr>
        <tr>
            <td>English </td>
            <td>United States </td>
            <td>en_US </td>
        </tr>
        <tr>
            <td>Estonian </td>
            <td>Estonia </td>
            <td>et_EE </td>
        </tr>
        <tr>
            <td>Finnish </td>
            <td>Finland </td>
            <td>fi_FI </td>
        </tr>
        <tr>
            <td>French </td>
            <td>Belgium </td>
            <td>fr_BE </td>
        </tr>
        <tr>
            <td>French </td>
            <td>Canada </td>
            <td>fr_CA </td>
        </tr>
        <tr>
            <td>French </td>
            <td>France </td>
            <td>fr_FR </td>
        </tr>
        <tr>
            <td>French </td>
            <td>Luxembourg </td>
            <td>fr_LU </td>
        </tr>
        <tr>
            <td>French </td>
            <td>Switzerland </td>
            <td>fr_CH </td>
        </tr>
        <tr>
            <td>German </td>
            <td>Austria </td>
            <td>de_AT </td>
        </tr>
        <tr>
            <td>German </td>
            <td>Germany </td>
            <td>de_DE </td>
        </tr>
        <tr>
            <td>German </td>
            <td>Luxembourg </td>
            <td>de_LU </td>
        </tr>
        <tr>
            <td>German </td>
            <td>Switzerland </td>
            <td>de_CH </td>
        </tr>
        <tr>
            <td>Greek </td>
            <td>Cyprus </td>
            <td>el_CY</td>
        </tr>
        <tr>
            <td>Greek </td>
            <td>Greece </td>
            <td>el_GR </td>
        </tr>
        <tr>
            <td>Hebrew </td>
            <td>Israel </td>
            <td>iw_IL </td>
        </tr>
        <tr>
            <td>Hindi </td>
            <td>India </td>
            <td>hi_IN </td>
        </tr>
        <tr>
            <td>Hungarian </td>
            <td>Hungary </td>
            <td>hu_HU </td>
        </tr>
        <tr>
            <td>Icelandic </td>
            <td>Iceland </td>
            <td>is_IS </td>
        </tr>
        <tr>
            <td>Indonesian </td>
            <td>Indonesia </td>
            <td>in_ID</td>
        </tr>
        <tr>
            <td>Irish </td>
            <td>Ireland </td>
            <td>ga_IE</td>
        </tr>
        <tr>
            <td>Italian </td>
            <td>Italy </td>
            <td>it_IT </td>
        </tr>
        <tr>
            <td>Italian </td>
            <td>Switzerland </td>
            <td>it_CH </td>
        </tr>
        <tr>
            <td>Japanese (Gregorian calendar) </td>
            <td>Japan </td>
            <td>ja_JP </td>
        </tr>
        <tr>
            <td>Japanese (Imperial calendar) </td>
            <td>Japan </td>
            <td>ja_JP_JP </td>
        </tr>
        <tr>
            <td>Korean </td>
            <td>South Korea </td>
            <td>ko_KR </td>
        </tr>
        <tr>
            <td>Latvian </td>
            <td>Latvia </td>
            <td>lv_LV </td>
        </tr>
        <tr>
            <td>Lithuanian </td>
            <td>Lithuania </td>
            <td>lt_LT </td>
        </tr>
        <tr>
            <td>Macedonian </td>
            <td>Macedonia </td>
            <td>mk_MK </td>
        </tr>
        <tr>
            <td>Malay </td>
            <td>Malaysia </td>
            <td>ms_MY</td>
        </tr>
        <tr>
            <td>Maltese </td>
            <td>Malta </td>
            <td>mt_MT</td>
        </tr>
        <tr>
            <td>Norwegian (Bokmål) </td>
            <td>Norway </td>
            <td>no_NO </td>
        </tr>
        <tr>
            <td>Norwegian (Nynorsk) </td>
            <td>Norway </td>
            <td>no_NO_NY </td>
        </tr>
        <tr>
            <td>Polish </td>
            <td>Poland </td>
            <td>pl_PL </td>
        </tr>
        <tr>
            <td>Portuguese </td>
            <td>Brazil </td>
            <td>pt_BR</td>
        </tr>
        <tr>
            <td>Portuguese </td>
            <td>Portugal </td>
            <td>pt_PT</td>
        </tr>
        <tr>
            <td>Romanian </td>
            <td>Romania </td>
            <td>ro_RO </td>
        </tr>
        <tr>
            <td>Russian </td>
            <td>Russia </td>
            <td>ru_RU </td>
        </tr>
        <tr>
            <td>Serbian (Cyrillic) </td>
            <td>Bosnia and Herzegovina </td>
            <td>sr_BA</td>
        </tr>
        <tr>
            <td>Serbian (Cyrillic) </td>
            <td>Montenegro </td>
            <td>sr_ME</td>
        </tr>
        <tr>
            <td>Serbian (Cyrillic) </td>
            <td>Serbia </td>
            <td>sr_RS</td>
        </tr>
        <tr>
            <td>Serbian (Latin) </td>
            <td>Bosnia and Herzegovina </td>
            <td>sr_Latn_BA</td>
        </tr>
        <tr>
            <td>Serbian (Latin) </td>
            <td>Montenegro </td>
            <td>sr_Latn_ME</td>
        </tr>
        <tr>
            <td>Serbian (Latin) </td>
            <td>Serbia </td>
            <td>sr_Latn_RS</td>
        </tr>
        <tr>
            <td>Slovak </td>
            <td>Slovakia </td>
            <td>sk_SK </td>
        </tr>
        <tr>
            <td>Slovenian </td>
            <td>Slovenia </td>
            <td>sl_SI </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Argentina </td>
            <td>es_AR </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Bolivia </td>
            <td>es_BO </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Chile </td>
            <td>es_CL </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Colombia </td>
            <td>es_CO </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Costa Rica </td>
            <td>es_CR </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Dominican Republic </td>
            <td>es_DO </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Ecuador </td>
            <td>es_EC </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>El Salvador </td>
            <td>es_SV </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Guatemala </td>
            <td>es_GT </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Honduras </td>
            <td>es_HN </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Mexico </td>
            <td>es_MX </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Nicaragua </td>
            <td>es_NI </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Panama </td>
            <td>es_PA </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Paraguay </td>
            <td>es_PY </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Peru </td>
            <td>es_PE </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Puerto Rico </td>
            <td>es_PR </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Spain </td>
            <td>es_ES </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>United States </td>
            <td>es_US</td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Uruguay </td>
            <td>es_UY </td>
        </tr>
        <tr>
            <td>Spanish </td>
            <td>Venezuela </td>
            <td>es_VE </td>
        </tr>
        <tr>
            <td>Swedish </td>
            <td>Sweden </td>
            <td>sv_SE </td>
        </tr>
        <tr>
            <td>Thai (Western digits) </td>
            <td>Thailand </td>
            <td>th_TH </td>
        </tr>
        <tr>
            <td>Thai (Thai digits) </td>
            <td>Thailand </td>
            <td>th_TH_TH </td>
        </tr>
        <tr>
            <td>Turkish </td>
            <td>Turkey </td>
            <td>tr_TR </td>
        </tr>
        <tr>
            <td>Ukrainian </td>
            <td>Ukraine </td>
            <td>uk_UA </td>
        </tr>
        <tr>
            <td>Vietnamese </td>
            <td>Vietnam </td>
            <td>vi_VN </td>
        </tr>
    </tbody>
</table>
