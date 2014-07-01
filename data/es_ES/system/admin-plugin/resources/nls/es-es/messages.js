define({
    TITLE_LABEL: 'Autenticacion',
    AUTHENTICATION_METHOD_LABEL: 'Metodo de autenticacion',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Seleccione donde se gestionaran el usuario y su registro en las credenciales:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'No ha terminado de configurar el metodo de autenticacion externo. Se perderan todos los cambios que haya realizado. ¿Desea continuar?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Cambiar el metodo de autenticacion se iniciara una nueva configuracion y puede cambiar los usuarios, roles y contraseñas de inicio de sesion. ¿Esta seguro que desea hacer este cambio?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Establecer el metodo de autenticacion a Local eliminara la configuracion de seguridad LDAP actual. ¿Desea continuar?',
    AUTHENTICATION_METHOD_TITLE: 'Cambio de metodo de autenticacion',
    PENTAHO: 'Local - Utilice la autenticacion basica de Pentaho',
    LDAP: 'Externo - Utilice el servidor LDAP / Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Conexion del servidor LDAP',
    LDAP_SERVER_URL_LABEL: 'URL del servidor:',
    LDAP_USER_LABEL: 'Nombre de usuario:',
    LDAP_PASSWORD_LABEL: 'Contraseña:',
    LDAP_TEST_CONNECTION_LABEL: 'Conexion de prueba para continuar la configuracion LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'La direccion URL de conexión se utiliza para conectarse al servidor de directorio',
    LDAP_USER_DESCRIPTION: 'Nombre distintivo de un usuario con acceso de lectura al directorio',
    LDAP_PASSWORD_DESCRIPTION: 'La contraseña para el usuario indicado anteriormente',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Prueba de conexion al servidor',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Sistema de administrador de Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Seleccione usuario del servidor LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Seleccione rol del servidor LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Seleccione el usuario en el servidor LDAP para asignar como administrador del sistema Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Seleccione rol en el servidor LDAP para asignar como administrador del sistema Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configuracion LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Proveedor LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Directorio de servidor Apache',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuracion personalizada',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Usuario base:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Busqueda base:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Busqueda de filtro:',
    LDAP_GROUP_BASE_LABEL: 'Grupo base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'La base (por nombre de usuario) para las busquedas de los usuarios.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtro (por nombre de usuario) para las busquedas de los usuarios. El atributo que especifique aqui debe contener el valor que desea que los usuarios inicien sesion en Pentaho',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Busqueda de usuario',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Roles',
    LDAP_ROLE_BASE_LABEL: 'Atributo role:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtro de busqueda de rol:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de busqueda de rol:',
    LDAP_ROLE_BASE_DESCRIPTION: 'El atributo utilizado para los valores de roles',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtro de busquedas para todos los roles',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base de busquedas para todos los roles',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Poblador',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Atributo grupo de roles:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Atributo para obtener nombre de roles.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Grupo de busqueda base:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (por DN de usuario o nombre de usuario) para las búsquedas de roles.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Grupo Filtro de búsqueda:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'El filtro que se utilizara cuando se busca agrupar objetos.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefijo de rol:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Agregar al principio del nombre del rol un prefijo se encuentra en el atributo grupo de roles, el valor puede ser una cadena vacia.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Convertir a mayusculas:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica si o no los nombres de rol recuperados se convierten en mayusculas .',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Subarbol:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica si la busqueda debe incluir el objeto actual y todos los hijos. Si se establece en falso, la busqueda debe incluir sólo el objeto actual.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navegador LDAP',
    LDAP_WARNING: 'Advertencia',
    LDAP_DIRTY_CHANGE: 'No tiene cambios guardados. ¿Desea continuar?',
    LDAP_CONNECTOR_TEST: 'Conexion LDAP',
    LDAP_CONNECTOR_TESTING: 'Probando la conexión con el servidor LDAP.',
    LDAP_CONNECTOR_EDIT: 'Cambio de conexion de tipo servidor borrara todas las configuraciones de autenticacion y permisos actuales. ¿Desea continuar?',

    LDAP_USER_TEST_DESCRIPTION: 'Con la busqueda de configuracion de base de busqueda y filtro de busqueda para un nombre de usuario que existe en el servidor LDAP.',
    LDAP_USER_TEST_LABEL: 'Buscar usuario:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Felicitaciones. Usuario',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'fue encontrado en el servidor LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'No se ha podido encontrar el usuario',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'en el servidor LDAP. Compruebe la configuración y vuelva a intentarlo.',
    LDAP_USER_DOMAIN_LABEL: 'DN Usuario:',

    LDAP_POPULATOR_TEST: 'Prueba Poblador LDAP',
    LDAP_USER_TEST: 'Prueba de usuario LDAP',
    LDAP_ROLES_TEST: 'Prueba de roles LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'La conexión con el servidor LDAP se ha realizado correctamente.',
    LDAP_CONNECTOR_TEST_FAILED: 'No se puede conectar con el servidor LDAP. Compruebe la configuración y vuelva a intentarlo.',

    SAVE: 'Guadar',
    TEST: 'Probar',
    CANCEL: 'Cancelar',
    YES: 'Si',
    YES_CHANGE: 'Si, Continuar',
    NO: 'No',
    OK: 'Aprobra',
    CLOSE: 'Cerrar',
    TEST_PASSED: 'La prueba pasó',
    TEST_FAILED: 'Error en la prueba',

    CONFIGURATION_SAVED: 'Los cambios en el metodo de autenticacion se han salvado, sin embargo, los cambios no tendran efecto hasta que reinicie el servidor.',

    //licenseManager
    PRODUCT: 'Producto',
    START_DATE: 'Fecha de inicio',
    END_DATE: 'Fecha de fin',
    VERSION: 'Version',
    LICENSES: 'Licencias',
    DELETE_TITLE: '¿Eliminar licencia seleccionada?',
    DELETE_WARNING: 'Esta a punto de eliminar la licencia seleccionada. ¿Desea continuar?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Licencia valida para biserver-ee encontrado',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Licencia no valida para biserver-ee encontrado',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "FAlta licencia o ha caducado.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Para continuar debe actualizar su licencia de Pentaho BI Platform. Si usted no esta listo ahora puede <a href="%CONTEXT_PATH%\Logout" target="_top"> cerrar sesion </ a> y volver mas tarde.'
    LICENSE_CANCEL_BUTTON: 'Cerrar sesion',
    LICENSE_OK_BUTTON: 'Aprobar'

});
