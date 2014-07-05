define({
    TITLE_LABEL: 'Autentikointi',
    AUTHENTICATION_METHOD_LABEL: 'Autentikointi metodi',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Valitse käyttäjätunnusten hallinnointi tapa:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Ulkoisen autentikointimetodin konfigurointi ei ole valmis. Kaikki tallentamattomat muutokset hylätään. Haluatko jatkaa?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Autentikointi metodin vaihtaminen muuttaa konfiguraatioita ja saattaa muuttaa käyttäjiä, rooleja sekä sisäänkirjautumistunnuksia. Haluatko jatkaa?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Lokaalin autentikoinnin asettaminen poistaa nykyiset LDAP turvallisuusasetukset. Haluatko jatkaa?',
    AUTHENTICATION_METHOD_TITLE: 'Autentikointi metodi muutos',
    PENTAHO: 'Lokaali - Käytä Pentahon autentikointia',
    LDAP: 'Ulkoinen - Käytä LDAP / Active Directory pavelinta',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP palvelimen yhteys',
    LDAP_SERVER_URL_LABEL: 'Palvelimen URL:',
    LDAP_USER_LABEL: 'Käyttäjätunnus:',
    LDAP_PASSWORD_LABEL: 'Salasana:',
    LDAP_TEST_CONNECTION_LABEL: 'Testaa yhteys jatkaaksesi LDAP asetusta',
    LDAP_SERVER_URL_DESCRIPTION: 'URL yhteys jota käytettään yhdistettäessä palvelimeen',
    LDAP_USER_DESCRIPTION: 'Käyttäjätunnus jolla on lukuoikeus palvelimelle',
    LDAP_PASSWORD_DESCRIPTION: 'Yllä määritetyn käyttäjätunnuksen salasana',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Testaa yhteys palvelimeen',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho järjestelmän administraattori',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Valitse käyttäjä LDAP palvelimelta:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Valitse rooli LDAP palvelimelta:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Valitse käyttäjä Pentaho järjestelmän administraattoriksi LDAP palvelimelta',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Valitse rooli Pentaho järjestelmän administraattoriksi LDAP palvelimelta',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP konfiguraatiot',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP tuottaja:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Mukautettu konfiguraatio',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Käyttäjien kanta:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Haun kanta:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Haun suodatin:',
    LDAP_GROUP_BASE_LABEL: 'Ryhmän kanta: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'Kanta käyttäjien hauille.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Suodatin käyttäjien hauissa. Arvo tulee olla sellainen, jolla halutaan käyttäjien kirjautuvan Pentahoon.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Käyttäjien haku',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Roolit',
    LDAP_ROLE_BASE_LABEL: 'Roolin ominaisuus:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Suodatin roolin haulle:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Roolin haun kanta:',
    LDAP_ROLE_BASE_DESCRIPTION: 'Roolin arvoissa käytettävä ominaisuus',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Suodatin "kaikki roolit" haulle',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Kanta "kaikki roolit" hauille',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Täyttäjä',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Ryhmän roolin ominaisuus:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Ominaisuus, jolla haetaan roolin nimet.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Ryhmän haun kanta:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Kanta roolin hauille.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Suodatin ryhmän haulle:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Käytettävä suodatin ryhmän objektien haulle.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Roolin etuliite:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Etuliite, joka lisätään roolien nimiin, jotka löytyvät ryhmän rooli ominaisuuksista. Arvo voi olla myös tyhjä merkkijono.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Muuta isoiksi kirjaimiksi:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Osoittaa ovatko roolien nimet muutettu isoiksi kirjaimiksi.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Alipuu:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Osoittaa mikäli haun tulee ottaa huomioon nykyisen objektin lisäksi kaikki lapset. Mikäli asetettu arvoon false, ainoastaan nykyinen objekti otettaan huomioon.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP selain',
    LDAP_WARNING: 'Varoitus',
    LDAP_DIRTY_CHANGE: 'Sinulla on tallentamattomia muutoksia. Haluatko jatkaa?',
    LDAP_CONNECTOR_TEST: 'LDAP yhteys',
    LDAP_CONNECTOR_TESTING: 'Testataan yhteyttä LDAP palvelimeen.',
    LDAP_CONNECTOR_EDIT: 'Palvelimen yhteyden muutokset poistava kaikki nykyiset autenktikointi ja oikeus asetukset. Haluatko jatkaa?',

    LDAP_USER_TEST_DESCRIPTION: 'Etsi käyttäjää LDAP palvelimelta suodattimien avulla.',
    LDAP_USER_TEST_LABEL: 'Etsi käyttäjä:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Onnittelut! Käyttäjä',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'löytyi LDAP palvelimelta.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Käyttäjää',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'ei löydy LDAP palvelimelta. Tarkista asetukset ja yritä uudelleen.',
    LDAP_USER_DOMAIN_LABEL: 'Käyttäjän yksilöity nimi:',

    LDAP_POPULATOR_TEST: 'LDAP täyttäjä testi',
    LDAP_USER_TEST: 'LDAP käyttäjä testi',
    LDAP_ROLES_TEST: 'LDAP rooli testi',
    LDAP_CONNECTOR_TEST_PASSED: 'Yhteydenotto LDAP palvelimeen onnistui.',
    LDAP_CONNECTOR_TEST_FAILED: 'Yhteyttä LDAP palvelimeen ei saatu. Tarkista asetukset ja yritä uudelleen.',

    SAVE: 'Tallenna',
    TEST: 'Testaa',
    CANCEL: 'Peruuta',
    YES: 'Kyllä',
    YES_CHANGE: 'Kyllä, jatka',
    NO: 'Ei',
    OK: 'OK',
    CLOSE: 'Sulje',
    TEST_PASSED: 'Testi onnistui',
    TEST_FAILED: 'Testi epäonnistui',

    CONFIGURATION_SAVED: 'Muutokset autentikointi metodiin tallennettiin. Käynnistä palvelin uudelleen, jotta muutokset astuvat voimaan.',

    //licenseManager
    PRODUCT: 'Tuote',
    START_DATE: 'Ensimmäinen päivä',
    END_DATE: 'Viimeinen päivä',
    VERSION: 'Versio',
    LICENSES: 'Lisenssit',
    DELETE_TITLE: 'Poista valittu lisenssi?',
    DELETE_WARNING: 'Olet poistamassa valittua lisenssiä. Haluatko jatkaa?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Voimassaoleva bi-plavelimen ee lisenssi löytyi',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Ei löydetty voimassaolevaa bi-plavelimen ee lisenssiä',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: 'Puuttuva tai erääntynyt lisenssi',
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Jatkaaksesi tulee päivittää Pentaho BI sovellusalusta lisenssi. <a href="%CONTEXT_PATH%\Logout" target="_top">Kirjaudu ulos</a> ja jatka myöhemmin.',
    LICENSE_CANCEL_BUTTON: 'Kirjaudu ulos',
    LICENSE_OK_BUTTON: 'Ok'

});
