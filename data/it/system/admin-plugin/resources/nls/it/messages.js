define({
    TITLE_LABEL: 'Autenticazione',
    AUTHENTICATION_METHOD_LABEL: 'Modalità di Autenticazione',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Imposta dove l\'utente e le sue credenziali verranno gestite:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Non hai completato la configurazione della tua modalità di autenticazione esterno. Perderai ogni modifica effettuata. Sei sicuro di volere continuare?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Cambiando modalità di autenticazione si inizia una nuova configurazione e potrebbe modificare utenti, ruoli e passwords di login. Sei sicuro di volere continuare?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Impostando la modalità di autenticazione a Locale cancellerai le impostazioni di sicurezza relative al server LDAP correntemente configurato. Sei sicuro di volere continuare?',
    AUTHENTICATION_METHOD_TITLE: 'Cambio della modalità di autenticazione',
    PENTAHO: 'Locale - Utilizza l\'autenticazione Pentaho di base',
    LDAP: 'Esterno - Utilizza LDAP / Active Directory server',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Connessione a LDAP Server',
    LDAP_SERVER_URL_LABEL: 'Server URL:',
    LDAP_USER_LABEL: 'Nome Utente:',
    LDAP_PASSWORD_LABEL: 'Password:',
    LDAP_TEST_CONNECTION_LABEL: 'Prova la connessione per procedere al setup di LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'L\'URL di connessione da utilizzare quando ci si connette al directory server',
    LDAP_USER_DESCRIPTION: 'Nome distinto (DN) di un utente con diritti di lettura alla directory',
    LDAP_PASSWORD_DESCRIPTION: 'La password dell\'utente specificato sopra',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Prova la Connessione al Server',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Amministratore di Sistema Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Seleziona l\'utente dal server LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Seleziona il ruolo dal server LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Seleziona l\'utente dal server LDAP da considerare come utente Amministratore di Sistema Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Seleziona il ruolo dal server LDAP da considerare come ruolo dell\'Amministratore di Sistema Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configurazione LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Provider LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configurazione Personalizzata',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'User Base:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Search Base:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Search Filter:',
    LDAP_GROUP_BASE_LABEL: 'Group Base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'The Base (by username) for user searches.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filter (by username) for user searches. The attribute you specify here must contain the value that you want your users to log into Pentaho with.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Ricerca Utente',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Ruoli',
    LDAP_ROLE_BASE_LABEL: 'Attributto di Ruolo:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtro di Ricerca per Ruolo:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Ruolo Search Base:',
    LDAP_ROLE_BASE_DESCRIPTION: 'L\'attributo utilizzato per i calori di ruolo',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtro per ricerche tipo "tutti gli ruoli"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base per tutte le ricerche "tutti gli ruoli"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Attributo Gruppo Ruolo:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'L\'attributo da cui estrarre i nomi degli ruoli.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base di Ricerca Gruppo:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (per DN utente o username) per le ricerche degli ruoli.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtro di Ricerca Gruppo:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Il filtro da usarsi quando si cercano oggetti di tipo gruppo.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefisso Ruolo:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Un prefisso da aggiungere all\'inizio del nome del ruolo trovato nell\'attributo del gruppo ruolo; il valore può essere una stringa vuota.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Converti a Maiuscolo:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica se i nomi degli ruoli sono convertiti in maiuscolo.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Ramo:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica se la ricerca deve o meno includere l\'oggetto corrente e tutti i suoi figli. Se è impostato a false, la ricerca deve includere solo l\'oggetto corrente.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP Browser',
    LDAP_WARNING: 'Attenzione',
    LDAP_DIRTY_CHANGE: 'Hai modifiche non salvate. Vuoi continuare?',
    LDAP_CONNECTOR_TEST: 'Connessione LDAP',
    LDAP_CONNECTOR_TESTING: 'Prova la connessione al server LDAP.',
    LDAP_CONNECTOR_EDIT: 'Modificando la connessione al server verranno rimossi tutte le impostazioni relative all\'autenticazione e ai permessi correnti. Vuoi continuare?',

    LDAP_USER_TEST_DESCRIPTION: 'Con la configurazione della base e del filtro di ricerca per un nome utente che esiste nel tuo server LDAP.',
    LDAP_USER_TEST_LABEL: 'Cerca l\'utente:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Congratualazioni. L\'utente',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'è stato trovato sul server LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Impossibile trovare l\'utente',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'sul server LDAP- Verifica le impostazioni e prova ancoraon the LDAP server. Verify settings and try again.',
    LDAP_USER_DOMAIN_LABEL: 'DN Utente:',

    LDAP_POPULATOR_TEST: 'Prova LDAP Populator',
    LDAP_USER_TEST: 'Prova Utente LDAP',
    LDAP_ROLES_TEST: 'Prova Ruoli LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'La connessione al server LDAP ha avuto successo.',
    LDAP_CONNECTOR_TEST_FAILED: 'Impossibile connettersi al server LDAP. Verifica le impostazioni e riprova.',

    SAVE: 'Salva',
    TEST: 'Prova',
    CANCEL: 'Annulla',
    YES: 'Sì',
    YES_CHANGE: 'Sì, Continua',
    NO: 'No',
    OK: 'OK',
    CLOSE: 'Chiudi',
    TEST_PASSED: 'Test Passato',
    TEST_FAILED: 'Test Fallito',

    CONFIGURATION_SAVED: 'Le modifiche ai metodi di autenticazione sono state salvate. I cambiamenti non avranno effetto finchè il server non verrà riavviato.',

    //licenseManager
    PRODUCT: 'Prodotto',
    START_DATE: 'Data di Inizio',
    END_DATE: 'Data di Fine',
    VERSION: 'Versione',
    LICENSES: 'Licenze',
    DELETE_TITLE: 'Cancella la Licenza Selezionata?',
    DELETE_WARNING: 'Stai per cancellare la licenza selezionata. Sei sicuro di volere continuare?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Trovata una licenza biserver-ee valida',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nessuna licenza biserver-ee valida è stata trovata',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Licenza mancante o scaduta.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Per continuare devi aggiornare la licenza della tua Piattaforma Pentaho BI. Se non sei pronto puoi <a href="%CONTEXT_PATH%\Logout" target="_top">disconnetterti</a> e tornare più tardi.',
    LICENSE_CANCEL_BUTTON: 'Disconnetti',
    LICENSE_OK_BUTTON: 'Ok'

});
