define({
    TITLE_LABEL: 'Uwierzytelnienie',
    AUTHENTICATION_METHOD_LABEL: 'Metoda uwierzytelnienia',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Wybierz gdzie uwierzytelnienia użytkownika i jego logi będą obsługiwane:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Nie zakończyłeś konfigurowania zewnętrznej metody uwierzytelnienia. Utracisz wszystkie zmiany, które wprowadziłeś. Czy chcesz kontynuować?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Zmiana metody uwierzytelnienia uaktywni nową konfigurację co może spowodować zmianę nazwy użytkowników, ról oraz haseł. Czy jesteś pewien, że chcesz wykonać tę zmianę?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Ustawienie metody Uwierzytelnienia na Local usunie Twoje aktualną konfigurację LDAP. Czy chcesz kontynuować?',
    AUTHENTICATION_METHOD_TITLE: 'Zmiana Metody Uwierzytelnienia',
    PENTAHO: 'Local - Użyj podstawowe uwierzytelnienie Pentaho',
    LDAP: 'External - Użyj LDAP / Active Directory server',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Połączenie Serwera LDAP',
    LDAP_SERVER_URL_LABEL: 'Serwer URL:',
    LDAP_USER_LABEL: 'Nazwa Użytkownika:',
    LDAP_PASSWORD_LABEL: 'Hasło:',
    LDAP_TEST_CONNECTION_LABEL: 'Testuj połączenie aby kontynuować ustawienie LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'The connection URL to use when connecting to the directory server',
    LDAP_USER_DESCRIPTION: 'Nazwa użytkownika, który posiada uprawnienie Read do katalogu',
    LDAP_PASSWORD_DESCRIPTION: 'Hasło użytkownika określonego powyżej',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Testowanie Połączenie Serwera',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrator Systemu Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Wybierz użytkownika z serwera LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Wybierz rolę z serwera LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Wybierz użytkownika z serwera LDAP, aby przypisać go jako administratora systemu Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Wybierz rolę z serwera LDAP, aby przypisać go jako administratora systemu Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Konfiguracja LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Dostawca LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Konfiguracja Własna',

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
    LDAP_USER_SEARCH_TITLE: 'User Search',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Role',
    LDAP_ROLE_BASE_LABEL: 'Atrybut Roli:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtr Szukania Roli:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Baza Szukania Roli:',
    LDAP_ROLE_BASE_DESCRIPTION: 'The attribute used for role values',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filter for "all roles" searches',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base for "all roles" searches',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Group Role Attribute:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'The attribute to get role names from.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Group Search Base:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (by user DN or username) for role searches.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Group Search Filter:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'The filter to use when searching group objects.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Role Prefix:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'A prefix to add to the beginning of the role name found in the group role attribute; the value can be an empty string.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Convert To Upper Case:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indicates whether or not retrieved role names are converted to uppercase.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Subtree:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indicates whether or not the search must include the current object and all children. If set to false, the search must include the current object only.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP Browser',
    LDAP_WARNING: 'Warning',
    LDAP_DIRTY_CHANGE: 'Masz nie zapisane zmiany. Czy chcesz kontynuować?',
    LDAP_CONNECTOR_TEST: 'Połączenie LDAP',
    LDAP_CONNECTOR_TESTING: 'Testowanie połączenia z serwerem LDAP.',
    LDAP_CONNECTOR_EDIT: 'Zmiana połączenia serwera spowoduje usunięcie wszystkich aktualnych danych autentykacyjnych oraz ustawień uprawnień. Czy chcesz kontynuować?',

    LDAP_USER_TEST_DESCRIPTION: 'With the search base and search filter configuration search for a user name that exists in your LDAP server.',
    LDAP_USER_TEST_LABEL: 'Search For User:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Gratulacje. Użytkownik',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'został znaleziony na serwerze LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Brak możliwości znalezienia użytkownika',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'na serwerze LDAP. Sprawdź ustawienia i spróbuj ponownie.',
    LDAP_USER_DOMAIN_LABEL: 'User DN:',

    LDAP_POPULATOR_TEST: 'LDAP Populator Test',
    LDAP_USER_TEST: 'LDAP User Test',
    LDAP_ROLES_TEST: 'LDAP Roles Test',
    LDAP_CONNECTOR_TEST_PASSED: 'Pomyślne połączenie z serwerem LDAP.',
    LDAP_CONNECTOR_TEST_FAILED: 'Brak możliwości połączenia z serwerem LDAP. Sprawdź ustawienia i spróbuj ponownie.',

    SAVE: 'Zapisz',
    TEST: 'Testuj',
    CANCEL: 'Anuluj',
    YES: 'Tak',
    YES_CHANGE: 'Tak, Kontynuuj',
    NO: 'Nie',
    OK: 'OK',
    CLOSE: 'Zamknij',
    TEST_PASSED: 'Test Passed',
    TEST_FAILED: 'Test Failed',

    CONFIGURATION_SAVED: 'Zmiany w metodzie autenktykacji zostały zapisane, jednak zmiany te zostaną uaktywnione po ponownym starcie serwera.',

    //licenseManager
    PRODUCT: 'Product',
    START_DATE: 'Data Rozpoczęcia',
    END_DATE: 'Data Zakończenia',
    VERSION: 'Wersja',
    LICENSES: 'Licencje',
    DELETE_TITLE: 'Usunąć Wybrane Licencje?',
    DELETE_WARNING: 'Jesteś w trakcie usuwania wybranych licencji. Czy chcesz kontynuować?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Znaleziono aktywną licencję biserver-ee',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nie znaleziono aktywnej licencji biserver-ee',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: 'Brak licencji lub jej ważność wygasła.',
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Aby kontynuować musisz uaktualnić licencję Pentaho BI Platform. Jeśli nie jesteś teraz gotowy możesz <a href="%CONTEXT_PATH%\Logout" target="_top">log out</a> i wrócić później.',
    LICENSE_CANCEL_BUTTON: 'Wyloguj',
    LICENSE_OK_BUTTON: 'Ok'

});
