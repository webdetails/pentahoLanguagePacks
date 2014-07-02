define({
    TITLE_LABEL: 'Authentifizierung',
    AUTHENTICATION_METHOD_LABEL: 'Authentifizierungsmethode',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Wählen Sie aus, wie die Benutzer und ihre Logindaten verwaltet werden sollen:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Die externe Authentifizierung wurde nich vollständig konfiguriert. Alle Änderungen werden verloren gehen. Möchten Sie fortfahren?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Das Ändern der Authentifizierungsmethode wird eine neue Konfiguration beginnen und kann die vorhandenen Benutzeraccounts, Rollen und Passwörter verändern. Sind Sie sicher, dass dies geändert werden soll?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Wenn die Authentifizierungsmethode auf die lokale Methode gesetzt wird, werden die aktuellen LDAP-Einstellungen entfernt. Möchten Sie fortfahren?',
    AUTHENTICATION_METHOD_TITLE: 'Änderung der Authentifizierungsmethode',
    PENTAHO: 'Lokal - Standard Pentaho-Benutzerauthentifizierung verwenden',
    LDAP: 'Extern - Verwende LDAP/AD Server',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP Serververbindung',
    LDAP_SERVER_URL_LABEL: 'Server URL:',
    LDAP_USER_LABEL: 'Benutzername:',
    LDAP_PASSWORD_LABEL: 'Passwort:',
    LDAP_TEST_CONNECTION_LABEL: 'Verbindung testen um mit der LDAP-Einrichtung fortzufahren',
    LDAP_SERVER_URL_DESCRIPTION: 'Die URL des Verzeichnis-Servers',
    LDAP_USER_DESCRIPTION: 'DN des Benutzers, der Lesezugriff auf den Verzeichnisdienst hat',
    LDAP_PASSWORD_DESCRIPTION: 'Das Passwort des angegebene Benutzers',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Verbindungstest',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho System Administrator',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Wählen Sie einen Benutzer aus dem LDAP-Server:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Wählen Sie eine Rolle aus dem LDAP-Server:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Wählen Sie einen Benutzer aus dem LDAP aus, der die Pentaho System-Administrator Rolle erhalten soll',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Wählen Sie die Rolle aus dem LDAP aus, die als Pentaho System-Administrator eingesetzt werden soll',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP Konfiguration',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP Anbieter:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Benutzerdefinierte Konfiguration',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Basis-DN der Benutzer:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Basis-DN der Benutzer:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Suchfilter:',
    LDAP_GROUP_BASE_LABEL: 'Basis-DN der Gruppensuche: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'Basis-DN (nach Benutzername) für die Benutzersuche.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Der Filter (nach Benutzername) für die Benutzersuche. Das Attribut, das hier angegeben wird, muss den Wert beinhalten, mit dem Ihre Benutzer sich anmelden werden.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Benutzersuche',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Rollen',
    LDAP_ROLE_BASE_LABEL: 'Rollen-Attribut:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Suchfilter für Rollen:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Basis-DN der Rollensuche:',
    LDAP_ROLE_BASE_DESCRIPTION: 'Das Attribut, welches die Rollennamen beinhaltet',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filter für die Suche nach "Alle Rollen"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Basis-Verzeichnis für die Suche nach "Alle Rollen"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Befüllung',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'LDAP-Attribut der Rolle:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Das Attribut, welches den Rollennamen enthält.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Basis-Verzeichnis:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Basis für die Suche nach Rollen (Suche nach DN oder Benutzername).',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filter für die Gruppensuche:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Der Filter, der für die Gruppensuche verwendet wird.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Rollen-Präfix:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Ein Präfix, der vor den Gruppennamen angefügt werden kann; der Wert kann auch eine leere Zeichenkette sein.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Zu Großschreibung umwandeln:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Zeigt an, ob die geladenen Rollennamen in Großbuchstaben umgewandelt werden oder nicht.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Unterverzeichnisse:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Zeigt an, ob die Suche nur das aktuelle Verzeichnis oder auch alle Unterverzeichnisse (rekursiv) durchsuchen soll. Wenn der Wert auf "Falsch" steht, wird nur im aktuellen Verzeichnis (Basis) gesucht.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP Browser',
    LDAP_WARNING: 'Warnung',
    LDAP_DIRTY_CHANGE: 'Sie haben ungespeicherte Änderungen. Möchten Sie fortfahren?',
    LDAP_CONNECTOR_TEST: 'LDAP Verbindung',
    LDAP_CONNECTOR_TESTING: 'Verbindungstest für den LDAP-Server.',
    LDAP_CONNECTOR_EDIT: 'Wenn Sie die Serververbindung ändern, werden alle aktuellen Authentifizierungseinstellungen und Berechtigungen zurückgesetzt. Möchten Sie fortfahren?',

    LDAP_USER_TEST_DESCRIPTION: 'Mit der Suchbasis und dem Suchfilter können Sie nach einem Benutzer suchen, der in Ihrem LDAP-Verzeichnis existiert.',
    LDAP_USER_TEST_LABEL: 'Suche nach dem Benutzer:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Erfolg. Der Benutzer ',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: ' wurde im LDAP-Verzeichnis gefunden.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Der Benutzer ',
    LDAP_USER_TEST_ERROR_LABEL_PART2: ' konnte im LDAP-Verzeichnis nicht gefunden werden. Prüfen Sie bitte die Konfiguration und versuchen Sie es erneut.',
    LDAP_USER_DOMAIN_LABEL: 'Benutzer-DN:',

    LDAP_POPULATOR_TEST: 'Test der LDAP-Befüllung',
    LDAP_USER_TEST: 'LDAP Benutzer-Test',
    LDAP_ROLES_TEST: 'LDAP Rollen-Test',
    LDAP_CONNECTOR_TEST_PASSED: 'Verbindung zum LDAP-Server war erfolgreich.',
    LDAP_CONNECTOR_TEST_FAILED: 'Verbindung zum LDAP-Server konnt nicht hergestellt werden. Prüfen Sie Ihre Konfiguration und versuchen Sie es erneut.',

    SAVE: 'Speichern',
    TEST: 'Testen',
    CANCEL: 'Abbrechen',
    YES: 'Yes',
    YES_CHANGE: 'Ja, fortfahren',
    NO: 'Nein',
    OK: 'OK',
    CLOSE: 'Schließen',
    TEST_PASSED: 'Test erfolgreich',
    TEST_FAILED: 'Test fehlgeschlaten',

    CONFIGURATION_SAVED: 'Die Änderungen an der Authentifizierungsmethode wurden gespeichert, werden jedoch erst nach einem Neustart der Platform wirksam.',

    //licenseManager
    PRODUCT: 'Produkt',
    START_DATE: 'Startdatum',
    END_DATE: 'Ablaufdatum',
    VERSION: 'Version',
    LICENSES: 'Lizenzen',
    DELETE_TITLE: 'Ausgewählte Lizenz löschen?',
    DELETE_WARNING: 'Die gewählte Lizenz soll gelöscht werden. Möchten Sie fortfahren?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Gültige Biserver-EE Lizenz gefunden',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Keine gültige Biserver-EE Lizenz found',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Fehlende oder abgelaufene Lizenz.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Um fortzufahren müssen Sie ihre Pentaho BI Platform-Lizenz aktualisieren. Wenn Sie noch nicht bereits sind, können Sie sich <a href="%CONTEXT_PATH%\Logout" target="_top">ausloggen</a> und später fortfahren.',
    LICENSE_CANCEL_BUTTON: 'Ausloggen',
    LICENSE_OK_BUTTON: 'Ok'

});
