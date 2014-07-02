define({
    TITLE_LABEL: 'Azonosítás',
    AUTHENTICATION_METHOD_LABEL: 'Azonosítás módja',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: ' Válaszza ki az azonosítók és a jogosultságok tárolási helyét:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Nem fejezte be a külső azonosítási mód beállítát. Minden módosítása el fog veszni. Továbblép?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Az azonosítási mód megváltoztatása teljesen új beállításokat eredményez, más felhasználók, szerepekörök és jelszavak léphetnek életbe. Biztos, hogy végrehajta a változtatást?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'A helyi azonosítási módra történő átállással az LDAP biztonsági beállításokat eltávolítja. Folytatja?',
    AUTHENTICATION_METHOD_TITLE: 'Azonosítási mód megváltoztatása',
    PENTAHO: 'Helyi - Az alap Pentaho azonosítási mód használata',
    LDAP: 'Külső - LDAP / Active Directory szerver használata',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP szerver kapcsolat',
    LDAP_SERVER_URL_LABEL: 'Szerver URL:',
    LDAP_USER_LABEL: 'Felhasználónév:',
    LDAP_PASSWORD_LABEL: 'Jelszó:',
    LDAP_TEST_CONNECTION_LABEL: 'Kapcsolat tesztelése, majd továbblépés a többi LDAP beállításhoz',
    LDAP_SERVER_URL_DESCRIPTION: 'A kapcsolat URL-je a directory szerverhez való kapcsolódáshoz',
    LDAP_USER_DESCRIPTION: 'Az olvasási joggal rendelkező felhasználó teljes azonosítója az LDAP fában (DN)',
    LDAP_PASSWORD_DESCRIPTION: 'A fenti felhasználó jelszava',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'A szerver-kapcsolat ellenőrzése',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho Rednszer Adminisztrátor',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Válassza ki a felhasználót az LDAP szerveren:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Válassza ki a szerepkört az LDAP szerveren:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Válassza ki a felhasználót az LDAP szerveren, akit Pentaho Rendszer Adminisztrátorként jelöl meg',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Válassza ki a szerepkört az LDAP szerveren, amelyiket Pentaho Rendszer Adminisztrátorként jelöli meg',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP beállítások',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP kiszolgáló:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Egyéni beállítások',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Felhasználói al-fa:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Felhasználó-keresés al-fája:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Keresési feltétel:',
    LDAP_GROUP_BASE_LABEL: 'Csoportok al-fája: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'Al-fa a felhasználónév alapú kereséshez.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Keresési feltétel a felhasználónév alapú kereséshez. Az itt definiált attribútum olyan legyen, melynek értékével (felhasználónévként) lépnek be a felhasználók a Pentaho rendszerbe.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Felhasználókeresés',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Szerepkörök',
    LDAP_ROLE_BASE_LABEL: 'Szerepkör attribútuma:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Szerepkör keresési fetétele:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Szerepkör keresési al-fája:',
    LDAP_ROLE_BASE_DESCRIPTION: 'A szerepkör jelöléséhez használt attribútum',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Keresési feltétel az összes szerepkör megtalálásához',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Al-fa az összes szerepkör megtalálásához',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Szerepkör attribútuma:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'A szerepkör nevét tartalmazó attribútum',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'A szerepkörök al-fája:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Al-fa a felhasználók szerepköreinek kereséséhez (fehasználónév vagy DN alapján).',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Szerepkörök keresési feltétele:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Keresési feltétel a felhasználó szerepköreihez.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Szerepkörök prefixe:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Előtét kiegészítés az attribútum alapján megtalált szerepkörhöz; üres érték is lehet.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Átalakítás nagybetűre:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Átalakítsuk-e nagybetűsre a kapott szerepkör nevét?',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Al-fa:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'A keresés bejárja-e az objektumot és az összes alatt lévő szintet? Ha nem, akkor csak az objektum szintjén történik a keresés.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP böngésző',
    LDAP_WARNING: 'Figyelmeztetés',
    LDAP_DIRTY_CHANGE: 'Néhány változtatást nem mentett el. Anélkül is folytatni akarja?',
    LDAP_CONNECTOR_TEST: 'LDAP kapcsolat',
    LDAP_CONNECTOR_TESTING: 'Az LDAP szerver-kapcsolat kipróbálása.',
    LDAP_CONNECTOR_EDIT: 'A kapcsolati beállítások módosítása megszünteti a jelenlegi azonosítási és jogosultsági beállításokat. Folytatni akarja?',

    LDAP_USER_TEST_DESCRIPTION: 'A felhasználói al-fa és keresési feltétel alapján egy felhasználó megkeresése az LDAP szerveren.',
    LDAP_USER_TEST_LABEL: 'Felhasználó keresése:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Gratulálunk!. A ',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'nevű felhasználót megtaláltuk az LDAP szerveren.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'A ',
    LDAP_USER_TEST_ERROR_LABEL_PART2: ' nevű felhasználót nem találtuk meg az LDAP szerveren. Ellenőrizze a beállításokat és javítás után próbálja meg ismét!',
    LDAP_USER_DOMAIN_LABEL: 'Felhasználó DN:',

    LDAP_POPULATOR_TEST: 'LDAP Populator Teszt',
    LDAP_USER_TEST: 'LDAP Felhasználó Teszt',
    LDAP_ROLES_TEST: 'LDAP Szerepkör Teszt',
    LDAP_CONNECTOR_TEST_PASSED: 'Sikeresen kapcsolódtunk az LDAP szerverhez.',
    LDAP_CONNECTOR_TEST_FAILED: 'Nem tudtunk kapcsolódni az LDAP szerverhez. Ellenőrizze a beállításokat és javítás után próbálja meg ismét!',

    SAVE: 'Mentés',
    TEST: 'Teszt',
    CANCEL: 'Mégsem',
    YES: 'Igen',
    YES_CHANGE: 'Igen, folytassuk',
    NO: 'Nem',
    OK: 'OK',
    CLOSE: 'Bezárás',
    TEST_PASSED: 'A teszt sikerült',
    TEST_FAILED: 'A teszt sikertelen',

    CONFIGURATION_SAVED: 'Az azonosítási mód megváltoztatását elmenetettük, de a módosítások a szerver újraindítása után lépnek életbe.',

    //licenseManager
    PRODUCT: 'Termék',
    START_DATE: 'Kezdődátum',
    END_DATE: 'Vége dátum',
    VERSION: 'Verzió',
    LICENSES: 'Licenszek',
    DELETE_TITLE: 'Töröljük a kiválasztott licenszeket?',
    DELETE_WARNING: 'Törlésre jelölte a kiválasztott licenszeket. Folytatni szeretné?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Érvényes biserver-ee licenszet találtunk',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nem találtunk érvényes biserver-ee licenszet',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Hiányzó vagy lejárt licensz.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'A folytatáshoz frissíteniek kell a Pentaho BI Platform licenszét. Ha ezt most nem tudja megtenni, <a href="%CONTEXT_PATH%\Logout" target="_top">jelentezzen ki</a> és térjen vissza később.',
    LICENSE_CANCEL_BUTTON: 'Kijelentkezés',
    LICENSE_OK_BUTTON: 'Ok'

});
