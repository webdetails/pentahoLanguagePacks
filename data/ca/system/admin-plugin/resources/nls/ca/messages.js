define({
    TITLE_LABEL: 'Autenticació',
    AUTHENTICATION_METHOD_LABEL: 'Mètode d\'autenticació',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Selecciona on es gestionaran l\'usuari i el seu registre en les credencials:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'No has acabat de configurar el mètode d\'autenticació extern. Es perdran tots els canvis fets. Vols continuar?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Canviar el mètode d\'autenticació iniciarà una nova configuració i pot canviar els usuaris, rols i contrasenyes d\'accés. Estàs segur que vols fer aquest canvi?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Establir el mètode d\'autenticació a local eliminarà la configuració de seguretat LDAP actual. Vols continuar?',
    AUTHENTICATION_METHOD_TITLE: 'Canvi de mètode d\'autenticació',
    PENTAHO: 'Local - Utilitza l\'autenticació de Pentaho bàsica',
    LDAP: 'Extern - Utilitza el servidor LDAP / Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Connexió del servidor LDAP',
    LDAP_SERVER_URL_LABEL: 'Servidor URL:',
    LDAP_USER_LABEL: 'Nom d\'usuari:',
    LDAP_PASSWORD_LABEL: 'Contrasenya:',
    LDAP_TEST_CONNECTION_LABEL: 'Connexió de prova per continuar la configuració LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'La direcció URL de connexió s\'utilitza per connectar-se al servidor de directori',
    LDAP_USER_DESCRIPTION: 'Nom diferent d\'un usuari amb accés de lectura al directori',
    LDAP_PASSWORD_DESCRIPTION: 'La contrasenya per a l\'usuari indicat anteriorment',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Prova de connexió al servidor',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrador de sistema Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Seleccioneu l\'usuari del servidor LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Seleccioneu el rol del servidor LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Seleccioneu l\'usuari del servidor LDAP per assignar com a administrador de sistema Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Seleccioneu el rol del servidor LDAP per assignar com a administrador de sistema Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configuració LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Proveïdor LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: ' Directori de servidor Apache',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuració personalitzada',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Usuari base:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Buscar base:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Buscar filtre:',
    LDAP_GROUP_BASE_LABEL: 'Grup base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'La base (per nom d\'usuari) per les cerques dels usuaris.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtre (per nom d\'usuari) per les cerques dels usuaris. L\'atribut que especifiquis aquí ha de contenir el valor que desitges amb que els usuaris iniciïn sessió en Pentaho.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Recerca d\'usuari',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Rols',
    LDAP_ROLE_BASE_LABEL: 'Atribut rol:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtre de recerca de rol:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de recerca de rol:',
    LDAP_ROLE_BASE_DESCRIPTION: 'L\'atribut utilitzat pels valors de rol',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtre de recerca per "tots els rols"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base de recerques per "tots els rols"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Poblador',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Atribut grup de rols:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Atribut per obtenir noms de rols.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Grop de recerca base:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (per DN d\'usuari o nom d\'usuari) per les recerques de rols.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Grup Filtre de recerca:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'El filtre que s\'utilitzarà quan es busca agrupar objectes.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefix de rol:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'El prefix per afegir al principi del nom de la funció es troba en l\'atribut grup de rols,; el valor pot ser una cadena buida.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Convertir a majúscules:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica si o no els noms de rol recuperats es converteixen en majúscules.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Subarbre:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica si la recerca ha d\'incloure l\'objecte actual i tots els nens. Si s\'estableix en fals, la recerca ha d\'incloure només l\'objecte actual.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navegador LDAP',
    LDAP_WARNING: 'Advertència',
    LDAP_DIRTY_CHANGE: 'Tens canvis sense guardar. Vols continuar?',
    LDAP_CONNECTOR_TEST: 'Connexió LDAP',
    LDAP_CONNECTOR_TESTING: 'Connexió de prova al servidor LDAP.',
    LDAP_CONNECTOR_EDIT: 'Canvi de connexió de tipus servidor esborrarà tota les configuracions d\'autenticació i els permisos actuals. Vols continuar?',

    LDAP_USER_TEST_DESCRIPTION: 'Amb la recerca de configuració de base de recerca i filtre de cerca per un nom d\'usuari que existeix al servidor LDAP.',
    LDAP_USER_TEST_LABEL: 'Buscar usuari:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Felicitats. Usuari',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'es va trobar en el servidor LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'No s\'ha pogut trobar l\'usuari',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'en el servidor LDAP. Comprova la configuració i torna-ho a intentar.',
    LDAP_USER_DOMAIN_LABEL: 'DN usuari:',

    LDAP_POPULATOR_TEST: 'Prova Poblador LDAP',
    LDAP_USER_TEST: 'Prova d\'usuari LDAP',
    LDAP_ROLES_TEST: 'Prova de rol LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'La connexió amb el servidor LDAP s\'ha realitzat correctament.',
    LDAP_CONNECTOR_TEST_FAILED: 'No es pot connectar amb el servidor LDAP. Comprova la configuració i torna-ho a intentar.',

    SAVE: 'Guardar',
    TEST: 'Provar',
    CANCEL: 'Cancel·lar',
    YES: 'Sí',
    YES_CHANGE: 'Sí, continua',
    NO: 'No',
    OK: 'Aprovar',
    CLOSE: 'Tancar',
    TEST_PASSED: 'Prova passada',
    TEST_FAILED: 'Prova fallida',

    CONFIGURATION_SAVED: 'Els canvis en el mètode d\'autenticació s\'han guardat, no obstant, els teus canvis no tindran efecte fins que no reiniciïs el servidor.',

    //licenseManager
    PRODUCT: 'Producte',
    START_DATE: 'Data d\'inici',
    END_DATE: 'Data de finalització',
    VERSION: 'Versió',
    LICENSES: 'Llicències',
    DELETE_TITLE: 'Eliminar llicència seleccionada?',
    DELETE_WARNING: 'Estàs a punt d\'eliminar la llicència seleccionada. Vols continuar?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Llicència vàlida per biserver-ee trobada',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Llicència no vàlida per biserver-ee trobada',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Falta llicència o ha caducat.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Per continuar has d\'actualitzar la teva llicència de Pentaho BI Platform. Si no estàs llest ara pots <a href="%CONTEXT_PATH%\Logout" target="_top">tancar sessió</a> i tornar més tard.',
    LICENSE_CANCEL_BUTTON: 'Tancar sessió',
    LICENSE_OK_BUTTON: 'Aprovar'

});
