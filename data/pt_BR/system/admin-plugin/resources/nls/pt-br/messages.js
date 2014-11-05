define({
    TITLE_LABEL: 'Autentica\u00e7\u00e3o',
    AUTHENTICATION_METHOD_LABEL: 'M\u00e9todo de Autentica\u00e7\u00e3o',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Selecione onde o usu\u00e1rio e seu log em credenciais ser\u00e3o gerenciados:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Voc\u00e7 n\u00e3o concluiu a configura\u00e7\u00e3o de seu m\u00e9todo de autentica\u00e7\u00e3o externa. Voc\u00e7 vai perder todas as altera\u00e7\u00f5es que voc\u00e7 fez. Voc\u00e7 quer continuar?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Alterar o m\u00e9todo de autentica\u00e7\u00e3o ir\u00e1 iniciar uma nova configura\u00e7\u00e3o e pode alterar os usu\u00e1rios, pap\u00e9is e senhas de login. Tem certeza de que quer fazer essa mudan\u00e7a?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Definir o m\u00e9todo de autentica\u00e7\u00e3o para local ir\u00e1 remover as configura\u00e7\u00f5es de seguran\u00e7a LDAP atuais. Voc\u00e7 quer continuar?',
    AUTHENTICATION_METHOD_TITLE: 'Alterar M\u00e9todo de Autentica\u00e7\u00e3o',
    PENTAHO: 'Local - Usar autentica\u00e7\u00e3o b\u00e1sica do Pentaho',
    LDAP: 'Externo - Usar LDAP / Servidor Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Conex\u00e3o de Servidor LDAP',
    LDAP_SERVER_URL_LABEL: 'URL do Servidor:',
    LDAP_USER_LABEL: 'Nome de Usu\u00e1rio:',
    LDAP_PASSWORD_LABEL: 'Senha:',
    LDAP_TEST_CONNECTION_LABEL: 'Teste a conex\u00e3o  connection to proceeed the LDAP setup',
    LDAP_SERVER_URL_DESCRIPTION: 'A URL de conex\u00e3o para ser usada ao conectar com o servidor de diret\u00f3rios',
    LDAP_USER_DESCRIPTION: 'Nome distinto de um usu\u00e1rio com acesso de leitura para o diret\u00f3rio',
    LDAP_PASSWORD_DESCRIPTION: 'A senha do usu\u00e1rio especificado acima',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Testar Conex\u00e3o com o Servidor',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrador de Sistema Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Selecione usu\u00e1rio do Servidor LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Selecione papel do Servidor LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Selecione o usu\u00e1rio do Servidor LDAP para atribuir como administrador do sistema Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Selecione o papel do Servidor LDAP para atribuir como administrador de sistema Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configura\u00e7\u00e3o LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Provedor LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Diret\u00f3rio do Servidor Apache',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configura\u00e7\u00e3o Personalizada',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Base de Dados de Usu\u00e1rios:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Base de Pesquisa:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa:',
    LDAP_GROUP_BASE_LABEL: 'Grupo Base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'A base (por nome de usu\u00e1rio) para pesquisas dos usu\u00e1rios.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtro (por nome de usu\u00e1rio) para pesquisas dos usu\u00e1rios. O atributo especificado aqui deve conter o valor que voc\u00e7 quer que seus usu\u00e1rios fa\u00e7am login em Pentaho.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Pesquisa de Usu\u00e1rio',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Pap\u00e9is',
    LDAP_ROLE_BASE_LABEL: 'Atributos do Papel:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Papel:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de Pesquisa de Pap\u00e9is:',
    LDAP_ROLE_BASE_DESCRIPTION: 'O atributo usado para valorers de papel',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtro para pesquisas de "todos pap\u00e9is"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base para pesquisas de "todos pap\u00e9is"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Grupo de Atributos de Papel:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'O atributo para obter nomes dos pap\u00e9is.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (por usu\u00e1rio DN ou nome de usu\u00e1rio) para pesquisas de pap\u00e9is.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'O filtro para usar ao procurar grupos de objetos.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefixo de Papel:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Um prefixo para adicionar ao come\u00e7o do nome do papel encontrado no grupo de atributos de papel; o valor pode ser uma linha vazia.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Converter Para Mai\u00fasculas:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica se ou n\u00e3o os nomes de pap\u00e9is recuperados s\u00e3o convertidos em mai\u00fasculas.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Sub\u00e1rvore:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica se a busca deve incluir o objeto atual e todos os filhos. Se definido como falso, a pesquisa deve incluir somente o objeto atual.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navegador LDAP',
    LDAP_WARNING: 'Aviso',
    LDAP_DIRTY_CHANGE: 'Voc\u00e7 tem altera\u00e7\u00f5es n\u00e3o salvas. Quer continuar?',
    LDAP_CONNECTOR_TEST: 'Conex\u00e3o LDAP',
    LDAP_CONNECTOR_TESTING: 'Testando conex\u00e3o com o servidor LDAP.',
    LDAP_CONNECTOR_EDIT: 'Mudar a conex\u00e3o com o servidor remover\u00e1 todas as autentica\u00e7\u00f5es e configura\u00e7\u00f5es de permiss\u00f5es atuais. Voc\u00e7 quer continuar?',

    LDAP_USER_TEST_DESCRIPTION: 'Com a base de pesquisa e filtro de pesquisa para um nome de usu\u00e1rio que existe no seu servidor LDAP.',
    LDAP_USER_TEST_LABEL: 'Procurar Pelo Usu\u00e1rio:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Parab\u00e9ns. Usu\u00e1rio',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'foi encontrado no servidor LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Imposs\u00edvel encontrar o usu\u00e1rio',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'no servidor LDAP. Verifique as configura\u00e7\u00f5es e tente novamente.',
    LDAP_USER_DOMAIN_LABEL: 'Usu\u00e1rio DN:',

    LDAP_POPULATOR_TEST: 'Teste LDAP Populator',
    LDAP_USER_TEST: 'Teste de Usu\u00e1rio LDAP',
    LDAP_ROLES_TEST: 'Teste de Papel LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'Conex\u00e3o com o servidor LDAP bem sucedida.',
    LDAP_CONNECTOR_TEST_FAILED: 'Imposs\u00edvel conectar ao servidor LDAP. Verifique as configura\u00e7\u00f5es e tente novamente.',

    SAVE: 'Salvar',
    TEST: 'Testar',
    CANCEL: 'Cancelar',
    YES: 'Sim',
    YES_CHANGE: 'Sim, Continuar',
    NO: 'N\u00e3o',
    OK: 'OK',
    CLOSE: 'Fechar',
    TEST_PASSED: 'Passou no Teste',
    TEST_FAILED: 'Falhou no Teste',

    CONFIGURATION_SAVED: 'Altera\u00e7\u00f5es no m\u00e9todo de autentica\u00e7\u00e3o foram salvas, no entanto, as altera\u00e7\u00f5es n\u00e3o ter\u00e3o efeito at\u00e9 que voc\u00e7 reinicie o servidor.',

    //licenseManager
    PRODUCT: 'Produto',
    START_DATE: 'Data Inicial',
    END_DATE: 'Data Final',
    VERSION: 'Vers\u00e3o',
    LICENSES: 'Licen\u00e7as',
    DELETE_TITLE: 'Apagar Licen\u00e7a Selecionada?',
    DELETE_WARNING: 'Voc\u00e7 estr\u00e1 prestes a apagar a licen\u00e7a selecionada. Voc\u00e7 quer continuar?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Licen\u00e7a v\u00e1lida do biserver-ee encontrada',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nenhuma licen\u00e7a v\u00e1lida do biserver-ee encontrada',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Licen\u00e7a faltando ou expirada.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Para continuar voc\u00e7 deve atualisar sua licen\u00e7a da Plataforma de BI Pentaho. Se voc\u00e7 n\u00e3o est\u00e1 pronto agora, voc\u00e7 pode <a href="%CONTEXT_PATH%\Logout" target="_top">sair</a> e voltar depois.',
    LICENSE_CANCEL_BUTTON: 'Sair',
    LICENSE_OK_BUTTON: 'Ok'

});
