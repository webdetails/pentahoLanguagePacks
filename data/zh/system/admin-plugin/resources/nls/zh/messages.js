define({
    TITLE_LABEL: '驗證',
    AUTHENTICATION_METHOD_LABEL: '驗證方法',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: '從用戶及其登錄證書管理中選擇',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: '你還未完成外部驗證配置。你將會丟失所有更改。 是否繼續？',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: '更換驗證方法將使軟件重新進行配置，或可能更改用戶，角色及其登錄密碼。是否繼續？',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: '改用地區驗證法至將會移除目前LDAP的安全設定。是否繼續？',
    AUTHENTICATION_METHOD_TITLE: '更改驗證方法',
    PENTAHO: '區域 - 使用基本Pentaho驗證',
    LDAP: '外部 - 使用LDAP / 現行目錄伺服器',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP伺服器連接',
    LDAP_SERVER_URL_LABEL: '伺服器網址',
    LDAP_USER_LABEL: '用戶名:',
    LDAP_PASSWORD_LABEL: '密碼',
    LDAP_TEST_CONNECTION_LABEL: '試行連接至LDAP設置',
    LDAP_SERVER_URL_DESCRIPTION: '當連接目錄伺服器時試行連接使用網址',
    LDAP_USER_DESCRIPTION: '目錄讀寫存取用戶識別名',
    LDAP_PASSWORD_DESCRIPTION: '以上所指定使用者密碼',
    LDAP_TEST_SERVER_CONNECTION_LABEL: '測試伺服器連接',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho系統管理員',
    LDAP_ADMINISTRATOR_USER_LABEL: 'LDAP伺服器指定用戶',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'LDAP伺服器指定角色',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: '從LDAP伺服器中選擇用戶爲Pentaho系統管理員',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: '從LDAP伺服器中選擇角色爲Pentaho系統管理員',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP配置',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP供應商',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache目錄伺服器',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: '微軟現行目錄',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: '自定義配置',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: '用戶庫',
    LDAP_USER_SEARCH_BASE_LABEL: '搜索庫',
    LDAP_USER_SEARCH_FILTER_LABEL: '搜索篩選',
    LDAP_GROUP_BASE_LABEL: '群組庫',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: '用戶搜索（以用戶名）',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: '用戶搜索篩選（以用戶名）。你在此處所指定的屬性必須包括閣下所希望之用戶能登錄至Pentaho的條件。',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: '用戶搜索',

    //ldap custom roles configuration
    LDAP_ROLES_TITLE: '角色',
    LDAP_ROLE_BASE_LABEL: '角色屬性',
    LDAP_ROLE_SEARCH_FILTER_LABEL: '角色搜索篩選',
    LDAP_ROLE_SEARCH_BASE_LABEL: '角色搜索庫',
    LDAP_ROLE_BASE_DESCRIPTION: '用於角色值之屬性',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: '篩選 “所有角色”之搜索',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: '“所有角色”搜索庫',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: '填充器',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: '群組角色屬性',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: '用以角色命名之屬性',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: '群組搜索庫',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: '以用戶DN或用戶名的群組搜索庫',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: '群組搜索篩選',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: '當搜索群組事物所用的篩選',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: '角色字首',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: '在群組角色屬性中所找到的角色名稱開頭字首； 該值可為空字符串',
    LDAP_POPULATOR_UPPERCASE_LABEL: '轉換為大寫',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: '指示檢索的角色名稱是否被轉換為大寫',
    LDAP_POPULATOR_SUBTREE_LABEL: '子樹',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: '指示檢索是否必須包含當前對象及所有子項。如爲虛構設置， 檢索必須只包含當前對象。',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP瀏覽器',
    LDAP_WARNING: '警告',
    LDAP_DIRTY_CHANGE: '您有未保存的更改。你要繼續嗎？',
    LDAP_CONNECTOR_TEST: 'LDAP連接',
    LDAP_CONNECTOR_TESTING: '測試連接到LDAP服務器',
    LDAP_CONNECTOR_EDIT: '更改服務器連接將刪除所有當前的認證和權限設置。你要繼續嗎？',

    LDAP_USER_TEST_DESCRIPTION: '使用搜索庫和搜索篩選器配置，搜索已在你LDAP服務器的用戶名。',
    LDAP_USER_TEST_LABEL: '搜索用戶',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: '恭喜。用戶',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: '已在LDAP搜索器中找到',
    LDAP_USER_TEST_ERROR_LABEL_PART1: '找不到用戶',
    LDAP_USER_TEST_ERROR_LABEL_PART2: '在LDAP服務器上。確認設置并重新嘗試',
    LDAP_USER_DOMAIN_LABEL: '用戶DN',

    LDAP_POPULATOR_TEST: 'LDAP填充器測試',
    LDAP_USER_TEST: 'LDAP用戶測試',
    LDAP_ROLES_TEST: 'LDAP角色測試',
    LDAP_CONNECTOR_TEST_PASSED: '成功連接到LDAP服務器',
    LDAP_CONNECTOR_TEST_FAILED: '不能連接至LDAP服務器。確認設置并重新嘗試。',

    SAVE: '儲存',
    TEST: '測試',
    CANCEL: '取消',
    YES: '是',
    YES_CHANGE: '是，繼續',
    NO: '否',
    OK: '確認',
    CLOSE: '關閉',
    TEST_PASSED: '測試通過',
    TEST_FAILED: '測試失敗',

    CONFIGURATION_SAVED: '成功儲存屬性方法修改，不過，在重啓伺服器之前，閣下的修改將不會生效。',

    //licenseManager
    PRODUCT: '成品',
    START_DATE: '開始日期',
    END_DATE: '結束日期',
    VERSION: '版本',
    LICENSES: '許可證',
    DELETE_TITLE: '刪除所選擇之許可證？',
    DELETE_WARNING: '你將會刪除所選擇之許可證。 是否繼續？',

    LICENSE_VALID_LICENSE_FOUND_LOG: '已找到有效的BI Server使用者',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: '找不到有效的BI Server使用者',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: '丟失或過期的許可證',
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: '如需繼續，閣下必須更新您的Pentaho BI平台許可證。如果還沒準備好，你可以退出，稍後再回來。',
    LICENSE_CANCEL_BUTTON: '退出',
    LICENSE_OK_BUTTON: '確認'

});
