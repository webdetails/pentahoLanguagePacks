define({
    TITLE_LABEL: 'Autenticação',
    AUTHENTICATION_METHOD_LABEL: 'Método de Autenticação',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Selecione onde o usuário e seu log em credenciais serão gerenciados:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Você não concluiu a configuração de seu método de autenticação externa. Você vai perder todas as alterações que você fez. Você quer continuar?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Alterar o método de autenticação irá iniciar uma nova configuração e pode alterar os usuários, papéis e senhas de login. Tem certeza de que quer fazer essa mudança?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Definir o método de autenticação para local irá remover as configurações de segurança LDAP atuais. Você quer continuar?',
    AUTHENTICATION_METHOD_TITLE: 'Alterar Método de Autenticação',
    PENTAHO: 'Local - Usar autenticação básica do Pentaho',
    LDAP: 'Externo - Usar LDAP / Servidor Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Conexão de Servidor LDAP',
    LDAP_SERVER_URL_LABEL: 'URL do Servidor:',
    LDAP_USER_LABEL: 'Nome de Usuário:',
    LDAP_PASSWORD_LABEL: 'Senha:',
    LDAP_TEST_CONNECTION_LABEL: 'Teste a conexão  connection to proceeed the LDAP setup',
    LDAP_SERVER_URL_DESCRIPTION: 'A URL de conexão para ser usada ao conectar com o servidor de diretórios',
    LDAP_USER_DESCRIPTION: 'Nome distinto de um usuário com acesso de leitura para o diretório',
    LDAP_PASSWORD_DESCRIPTION: 'A senha do usuário especificado acima',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Testar Conexão com o Servidor',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrador de Sistema Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Selecione usuário do Servidor LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Selecione papel do Servidor LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Selecione o usuário do Servidor LDAP para atribuir como administrador do sistema Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Selecione o papel do Servidor LDAP para atribuir como administrador de sistema Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configuração LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Provedor LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Diretório do Servidor Apache',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuração Personalizada',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Base de Dados de Usuários:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Base de Pesquisa:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa:',
    LDAP_GROUP_BASE_LABEL: 'Grupo Base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'A base (por nome de usuário) para pesquisas dos usuários.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtro (por nome de usuário) para pesquisas dos usuários. O atributo especificado aqui deve conter o valor que você quer que seus usuários façam login em Pentaho.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Pesquisa de Usuário',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Papéis',
    LDAP_ROLE_BASE_LABEL: 'Atributos do Papel:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Papel:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de Pesquisa de Papéis:',
    LDAP_ROLE_BASE_DESCRIPTION: 'O atributo usado para valorers de papel',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtro para pesquisas de "todos papéis"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base para pesquisas de "todos papéis"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Grupo de Atributos de Papel:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'O atributo para obter nomes dos papéis.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (por usuário DN ou nome de usuário) para pesquisas de papéis.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'O filtro para usar ao procurar grupos de objetos.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefixo de Papel:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Um prefixo para adicionar ao começo do nome do papel encontrado no grupo de atributos de papel; o valor pode ser uma linha vazia.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Converter Para Maiúsculas:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica se ou não os nomes de papéis recuperados são convertidos em maiúsculas.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Subárvore:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica se a busca deve incluir o objeto atual e todos os filhos. Se definido como falso, a pesquisa deve incluir somente o objeto atual.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navegador LDAP',
    LDAP_WARNING: 'Aviso',
    LDAP_DIRTY_CHANGE: 'Você tem alterações não salvas. Quer continuar?',
    LDAP_CONNECTOR_TEST: 'Conexão LDAP',
    LDAP_CONNECTOR_TESTING: 'Testando conexão com o servidor LDAP.',
    LDAP_CONNECTOR_EDIT: 'Mudar a conexão com o servidor removerá todas as autenticações e configurações de permissões atuais. Você quer continuar?',

    LDAP_USER_TEST_DESCRIPTION: 'Com a base de pesquisa e filtro de pesquisa para um nome de usuário que existe no seu servidor LDAP.',
    LDAP_USER_TEST_LABEL: 'Procurar Pelo Usuário:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Parabéns. Usuário',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'foi encontrado no servidor LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Impossível encontrar o usuário',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'no servidor LDAP. Verifique as configurações e tente novamente.',
    LDAP_USER_DOMAIN_LABEL: 'Usuário DN:',

    LDAP_POPULATOR_TEST: 'Teste LDAP Populator',
    LDAP_USER_TEST: 'Teste de Usuário LDAP',
    LDAP_ROLES_TEST: 'Teste de Papel LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'Conexão com o servidor LDAP bem sucedida.',
    LDAP_CONNECTOR_TEST_FAILED: 'Impossível conectar ao servidor LDAP. Verifique as configurações e tente novamente.',

    SAVE: 'Salvar',
    TEST: 'Testar',
    CANCEL: 'Cancelar',
    YES: 'Sim',
    YES_CHANGE: 'Sim, Continuar',
    NO: 'Não',
    OK: 'OK',
    CLOSE: 'Fechar',
    TEST_PASSED: 'Passou no Teste',
    TEST_FAILED: 'Falhou no Teste',

    CONFIGURATION_SAVED: 'Alterações no método de autenticação foram salvas, no entanto, as alterações não terão efeito até que você reinicie o servidor.',

    //licenseManager
    PRODUCT: 'Produto',
    START_DATE: 'Data Inicial',
    END_DATE: 'Data Final',
    VERSION: 'Versão',
    LICENSES: 'Licenças',
    DELETE_TITLE: 'Apagar Licença Selecionada?',
    DELETE_WARNING: 'Você estrá prestes a apagar a licença selecionada. Você quer continuar?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Licença válida do biserver-ee encontrada',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nenhuma licença válida do biserver-ee encontrada',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Licença faltando ou expirada.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Para continuar você deve atualisar sua licença da Plataforma de BI Pentaho. Se você não está pronto agora, você pode <a href="%CONTEXT_PATH%\Logout" target="_top">sair</a> e voltar depois.',
    LICENSE_CANCEL_BUTTON: 'Sair',
    LICENSE_OK_BUTTON: 'Ok'

});