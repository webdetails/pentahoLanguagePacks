/*!
 * PENTAHO CORPORATION PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright 2002 - 2014 Pentaho Corporation (Pentaho). All rights reserved.
 *
 * NOTICE: All information including source code contained herein is, and
 * remains the sole property of Pentaho and its licensors. The intellectual
 * and technical concepts contained herein are proprietary and confidential
 * to, and are trade secrets of Pentaho and may be covered by U.S. and foreign
 * patents, or patents in process, and are protected by trade secret and
 * copyright laws. The receipt or possession of this source code and/or related
 * information does not convey or imply any rights to reproduce, disclose or
 * distribute its contents, or to manufacture, use, or sell anything that it
 * may describe, in whole or in part. Any reproduction, modification, distribution,
 * or public display of this information without the express written authorization
 * from Pentaho is strictly prohibited and in violation of applicable laws and
 * international treaties. Access to the source code contained herein is strictly
 * prohibited to anyone except those individuals and entities who have executed
 * confidentiality and non-disclosure agreements or other agreements with Pentaho,
 * explicitly covering such access.
 */

define({
    TITLE_LABEL: 'Authentifizierung',
    AUTHENTICATION_METHOD_LABEL: 'Authentifizierungsmethode',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Wählen Sie aus, wo Benutzer und deren Anmeldeinformationen verwaltet werden sollen:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Die Konfiguration der externen Authentifizierungsmethode wurde nicht abgeschlossen. Alle Änderungen werden gelöscht. Möchten Sie fortfahren?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Wenn Sie die Authentifizierungsmethode wechseln, wird eine neue Konfiguration gestartet, die eventuell Benutzer, Rollen und Anmeldekennwörter ändert. Sind Sie sicher, dass Sie diese Änderung durchführen möchten?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Durch die Einstellung der Authentifizierungsmethode auf Lokal, werden die aktuellen LDAP-Sicherheitseinstellungen entfernt. Möchten Sie fortfahren?',
    AUTHENTICATION_METHOD_TITLE: 'Änderung der Authentifizierungsmethode',
    PENTAHO: 'Lokal – Grundlegende Pentaho-Authentifizierung verwenden',
    LDAP: 'Extern – LDAP-/Active Directory-Server verwenden',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP-Serververbindung',
    LDAP_SERVER_URL_LABEL: 'Server-URL:',
    LDAP_USER_LABEL: 'Benutzername:',
    LDAP_PASSWORD_LABEL: 'Kennwort:',
    LDAP_TEST_CONNECTION_LABEL: 'Verbindung testen, um mit dem LDAP-Setup fortzufahren',
    LDAP_SERVER_URL_DESCRIPTION: 'Für die Verbindung mit dem Verzeichnisserver zu verwendende URL-Verbindung',
    LDAP_USER_DESCRIPTION: 'Definierter Name eines Benutzers mit Lesezugriff für das Verzeichnis',
    LDAP_PASSWORD_DESCRIPTION: 'Das Kennwort des oben angegebenen Benutzers',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Serververbindung testen',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho-Systemadministrator',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Benutzer über LDAP-Server auswählen:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Rolle über LDAP-Server auswählen:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Benutzer über LDAP-Server als Pentaho-Systemadministrator zuweisen',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Rolle über LDAP-Server als Pentaho-Systemadministrator zuweisen',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP-Konfiguration',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP-Anbieter:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache-Verzeichnisserver',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Benutzerdefinierte Konfiguration',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Benutzerbasis:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Suchbasis:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Suchfilter:',
    LDAP_GROUP_BASE_LABEL: 'Gruppenbasis: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'Die Basis (nach Benutzername) für Benutzersuchen.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Der Filter (nach Benutzername) für Benutzersuchen. Das hier angegebene Attribut muss den Wert beinhalten, mit dem sich der Benutzer bei Pentaho anmelden soll.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Benutzersuche',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Rollen',
    LDAP_ROLE_BASE_LABEL: 'Rollenattribut:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Suchfilter für Rollen:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Suchbasis für Rollen:',
    LDAP_ROLE_BASE_DESCRIPTION: 'Das für Rollenwerte verwendete Attribut',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filter für Suchen nach: &quot;alle Rollen&quot;',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Basis für Suchen nach: &quot;alle Rollen&quot;',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Ausfüllen',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Attribut der Gruppenrolle:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Das Attribut, um Rollennamen abzurufen.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Suchbasis für Gruppen:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Die Basis (nach Benutzer-DN oder Benutzername) für Rollensuchen.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Suchfilter der Gruppe:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Der Filter, um Gruppenobjekte zu suchen.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Rollenpräfix:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Ein Präfix, das dem Rollennamen (das im Rollenattribut der Gruppe gefunden wurde) am Anfang hinzugefügt wird. Der Wert kann eine leere Zeichenfolge sein.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'In Großbuchstaben umwandeln:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Zeigt an, ob abgerufene Rollennamen in Großbuchstaben umgewandelt werden sollen oder nicht.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Unterstruktur:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Zeigt an, ob in der Suche das aktuelle Objekt mit allen Unterelementen enthalten sein muss oder nicht. Wenn dies auf &quot;false&quot; eingestellt ist, darf die Suche nur das aktuelle Objekt enthalten.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP-Browser',
    LDAP_WARNING: 'Warnung',
    LDAP_DIRTY_CHANGE: 'Sie haben ungespeicherte Änderungen. Möchten Sie fortfahren?',
    LDAP_CONNECTOR_TEST: 'LDAP-Verbindung',
    LDAP_CONNECTOR_TESTING: 'Verbindung zum LDAP-Server wird getestet.',
    LDAP_CONNECTOR_EDIT: 'Wenn Sie die Serververbindung ändern, werden alle aktuellen Authentifizierungs- und Berechtigungseinstellungen entfernt. Möchten Sie fortfahren?',

    LDAP_USER_TEST_DESCRIPTION: 'Suchen Sie nach einem Benutzernamen, der im LDAP-Server existiert, indem Sie die Suchbasis und den Suchfilter konfigurieren.',
    LDAP_USER_TEST_LABEL: 'Nach Benutzer suchen:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Herzlichen Glückwunsch. Benutzer',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'wurde auf dem LDAP-Server gefunden.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Benutzer konnte',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'auf dem LDAP-Server nicht gefunden werden. Überprüfen Sie die Einstellungen und versuchen Sie es erneut.',
    LDAP_USER_DOMAIN_LABEL: 'Benutzer-DN:',

    LDAP_POPULATOR_TEST: 'LDAP-Ausfüll-Test',
    LDAP_USER_TEST: 'LDAP-Benutzer-Test',
    LDAP_ROLES_TEST: 'LDAP-Rollen-Test',
    LDAP_CONNECTOR_TEST_PASSED: 'Verbindung mit dem LDAP-Server erfolgreich.',
    LDAP_CONNECTOR_TEST_FAILED: 'Verbindung zum LDAP-Server nicht möglich. Überprüfen Sie die Einstellungen und versuchen Sie es erneut.',

    SAVE: 'Speichern',
    TEST: 'Testen',
    CANCEL: 'Abbrechen',
    YES: 'Ja',
    YES_CHANGE: 'Ja, fortfahren',
    NO: 'Nein',
    OK: 'OK',
    CLOSE: 'Schließen',
    TEST_PASSED: 'Test bestanden',
    TEST_FAILED: 'Test fehlgeschlagen',

    CONFIGURATION_SAVED: 'Die Änderungen in der Authentifizierungsmethode wurden gespeichert. Die Änderungen werden jedoch erst übernommen, wenn Sie den Server neu starten.',

    //licenseManager
    PRODUCT: 'Produkt',
    START_DATE: 'Startdatum',
    END_DATE: 'Enddatum',
    VERSION: 'Version',
    LICENSES: 'Lizenzen',
    DELETE_TITLE: 'Ausgewählte Lizenz löschen?',
    DELETE_WARNING: 'Sie sind dabei, die ausgewählte Lizenz zu löschen. Möchten Sie fortfahren?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Gültige biserver-ee-Lizenz gefunden',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Keine gültige biserver-ee-Lizenz gefunden',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Fehlende oder abgelaufene Lizenz.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Sie müssen die Pentaho BI Platform-Lizenz aktualisieren, um fortfahren zu können. Wenn Sie dies später ausführen möchten, <a href="%CONTEXT_PATH%\Logout" target="_top">melden Sie sich ab</a> und kommen Sie später wieder.',
    LICENSE_CANCEL_BUTTON: 'Abmelden',
    LICENSE_OK_BUTTON: 'OK',
    LICENSE_ADD_LICENSE: 'Lizenz hinzufügen',
    LICENSE_DELETE_LICENSE: 'Lizenz löschen'

});