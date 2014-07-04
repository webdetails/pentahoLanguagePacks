define({
    TITLE_LABEL: 'Autenticação',
    Autenticaçã o_METHOD_LABEL: 'Método de Autenticação',
    Autenticaçã o_METHOD_DESCRIPTION_LABEL: 'Selecione onde gerir os usuários e as suas credenciais de início de sessão:',
    Autenticaçã o_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Não concluiu a configuração do seu método de autenticação externa. Todas as suas alterações serão perdidas. Deseja continuar?',
    Autenticaçã o_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Alterar o método de autenticação iniciará uma nova configuração e pode alterar os usuários, funções e senhas de início de sessão. Tem certeza que deseja fazer esta alteração?',
    Autenticaçã o_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Definir o método de Autenticação para Local removerá as configurações de segurança LDAP atuais. Deseja continuar?',
    Autenticaçã o_METHOD_TITLE: 'Alterar o Método de Autenticação',
    PENTAHO: 'Local - Usar a Autenticação do Pentaho',
    LDAP: 'Externa - Usar servidor LDAP / Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Conexão ao Servidor LDAP',
    LDAP_SERVER_URL_LABEL: 'URL do Servidor:',
    LDAP_USER_LABEL: 'Nome de Utilizador:',
    LDAP_PASSWORD_LABEL: 'Palavra-passe:',
    LDAP_TEST_CONNECTION_LABEL: 'Testar a conexão LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'URL de conexão a usar para conectar ao servidor de diretório',
    LDAP_USER_DESCRIPTION: 'Nome de utilizador com acesso de leitura ao diretório',
    LDAP_PASSWORD_DESCRIPTION: 'Palavra-passe do utilizador especificado acima',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Testar a Conexão ao Servidor',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrador Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Selecione um utilizador a partir do servidor LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Selecione uma função a partir do servidor LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Selecione um utilizador a partir do servidor LDAP para designar como administrador Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Selecione uma função a partir do servidor LDAP para designar como administrador Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configuração LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Provedor LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuração Personalizada',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Base de Utilizador:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Base de Pesquisa:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa:',
    LDAP_GROUP_BASE_LABEL: 'Grupo Base: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'A Base (por nome de utilizador) para pesquisas de utilizador.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtro (por nome de utilizador) para pesquisas de utilizador. O atributo especificado contém o valor com o qual deseja que os utilizadores se autentiquem no Pentaho.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Pesquisa de Utilizador',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Funções',
    LDAP_ROLE_BASE_LABEL: 'Atributo da Função',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Função:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de Pesquisa de Função:',
    LDAP_ROLE_BASE_DESCRIPTION: 'O atributo usado para valores de funções',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtro para Pesquisas de "todas as funções"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base para Pesquisas de "todas as funções"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Atributo de Função de Grupo:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'O atributo de onde se obtém o nome das funções.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (por DN de utilizador ou nome de utilizador) para pesquisas de função.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtro de Pesquisa de Grupo:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Filtro usado para pesquisar no grupo.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Prefixo de Função:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Prefixo que precede o nome da função obtido do Atributo de Função de Grupo; O valor pode ser um texto vazio.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Converter em Maiúsculas:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indica se os nomes de função obtidos são convertidos, ou não, em maiúsculas',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Subdiretório:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indica se a pesquisa inclui, ou não, o diretório atual e quaisquer subdiretórios. Se o valor for definido como "falso", a pesquisa deve incluir apenas o diretório atual.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navegador LDAP',
    LDAP_WARNING: 'Aviso',
    LDAP_DIRTY_CHANGE: 'Tem alterações não salvas. Deseja continuar?',
    LDAP_CONNECTOR_TEST: 'Conexão LDAP',
    LDAP_CONNECTOR_TESTING: 'Teste de Conexão ao Servidor LDAP.',
    LDAP_CONNECTOR_EDIT: 'Alterar a conexão com o servidor irá remover todas as configurações de autenticação e permissões atuais. Deseja continuar?',

    LDAP_USER_TEST_DESCRIPTION: 'Pesquisa se existe no servidor LDAP um utilizador que corresponde aos parâmetros de pesquisa especificados.',
    LDAP_USER_TEST_LABEL: 'Pesquisar por utilizador:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Sucesso. O Utilizador',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'foi encontrado no servidor LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Não foi possível encontrar o Utilizador',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'no servidor LDAP. Verifique as configurações e tente novamente.',
    LDAP_USER_DOMAIN_LABEL: 'DN de Utilizador:',

    LDAP_POPULATOR_TEST: 'Testar LDAP Populator',
    LDAP_USER_TEST: 'Testar Utilizador LDAP',
    LDAP_ROLES_TEST: 'Testar Função LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'Conexão com o servidor LDAP foi bem sucedida.',
    LDAP_CONNECTOR_TEST_FAILED: 'Não foi possível conectar ao servidor LDAP. Verifique as configurações e tente novamente. ',

    SAVE: 'Salvar',
    TEST: 'Testar',
    CANCEL: 'Cancelar',
    YES: 'Sim',
    YES_CHANGE: 'Sim, Continuar',
    NO: 'Não',
    OK: 'OK',
    CLOSE: 'Fechar',
    TEST_PASSED: 'Teste Bem Sucedido',
    TEST_FAILED: 'Teste Falhou',

    CONFIGURATION_SAVED: 'As alterações ao método de Autenticação foram salvas, mas não terão efeito até que reinicie o servidor.',

    //licenseManager
    PRODUCT: 'Produto',
    START_DATE: 'Data de Início',
    END_DATE: 'Data de Expiração',
    VERSION: 'Versão',
    LICENSES: 'Licenças',
    DELETE_TITLE: 'Excluir a Licença selecionada?',
    DELETE_WARNING: 'A Licença selecionada está prestes a ser excluída. Deseja continuar?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Licença Biserver-EE válida encontrada',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Nenhuma licença Biserver-EE válida encontrada',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Licença ausente ou expirada.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Para continuar é necessário atualizar a sua licença Pentaho BI Platform. Se ainda não estiver preparado pode <a href="%CONTEXT_PATH%\Logout" target="_top">terminar a sessão</a> e voltar mais tarde.',
    < TRANSLATE ME >
        LICENSE_CANCEL_BUTTON: 'Terminar a Sessão',
    LICENSE_OK_BUTTON: 'Ok'

});
