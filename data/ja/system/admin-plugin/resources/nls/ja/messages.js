define({
    TITLE_LABEL: '認証',
    AUTHENTICATION_METHOD_LABEL: '認証メソッド',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'ユーザー認証を管理する場所を選択してください:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: '外部認証メソッドの設定が完了していません。変更は失われますがよろしいですか?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: '認証メソッドを変更するとユーザー、ロール、ログインパスワードが変更される可能性があります。認証メソッドを変更しますか?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: '認証メソッドをローカルに変更すると現在のLDAPセキュリティーの設定は失われます。認証メソッドを変更しますか?',
    AUTHENTICATION_METHOD_TITLE: '認証メソッドの変更',
    PENTAHO: 'ローカル - Pentaho認証を使用します',
    LDAP: '外部 - LDAP / Active Directoryサーバーを使用します',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAPサーバー接続',
    LDAP_SERVER_URL_LABEL: 'サーバーURL:',
    LDAP_USER_LABEL: 'ユーザー名:',
    LDAP_PASSWORD_LABEL: 'パスワード:',
    LDAP_TEST_CONNECTION_LABEL: '接続をテストし、LDAP設定に進んでください。',
    LDAP_SERVER_URL_DESCRIPTION: 'ディレクトリサーバーへ接続する際のURLです。',
    LDAP_USER_DESCRIPTION: 'ディレクトリの読み込み権限を持っているユーザー名です。',
    LDAP_PASSWORD_DESCRIPTION: '指定したユーザーのパスワードです。',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'サーバー接続をテスト',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentahoシステム管理者',
    LDAP_ADMINISTRATOR_USER_LABEL: 'LDAPサーバーから管理者を選択してください:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'LDAPサーバーからロールを選択してください:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'LDAPサーバーからPentahoシステム管理者に割り当てるユーザーを選択してください。',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'LDAPサーバーからPentahoシステム管理者に割り当てるロールを選択してください。',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP設定',
    LDAP_CONFIGURATION_PROVIDER: 'LDAPプロバイダ:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'カスタム設定',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'ユーザーベース:',
    LDAP_USER_SEARCH_BASE_LABEL: 'サーチベース:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'サーチフィルター:',
    LDAP_GROUP_BASE_LABEL: 'グループベース: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'ユーザー名によるユーザーサーチのベースです。',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'ユーザー名によるユーザーサーチのフィルターです。ここへ指定する属性にはPentahoへログインするユーザーへ持たせたい値を含める必要があります。',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'ユーザーサーチ',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'ロール',
    LDAP_ROLE_BASE_LABEL: 'ロール属性:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'ロールサーチフィルター:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'ロールサーチベース:',
    LDAP_ROLE_BASE_DESCRIPTION: 'ロール値に使用する属性です。',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: '"all roles"サーチのフィルターです。',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: '"all roles"サーチのベースです。',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'ポピュレータ',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'グループロール属性:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'ロール名を取得する属性です。',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'グループサーチベース:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'DNまたはユーザー名によるロールサーチのベースです。',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'グループサーチフィルター:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'グループオブジェクトを検索する際に使用するフィルターです。',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'ロールプレフィックス:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'グループロール属性のロール名の先頭に加えるプレフィックスです。空文字も使用可能です。',
    LDAP_POPULATOR_UPPERCASE_LABEL: '大文字へ変換:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: '取得したロール名を大文字へ変換するか指定します。',
    LDAP_POPULATOR_SUBTREE_LABEL: 'サブツリー:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: '検索に子オブジェクトを含めるかどうかを指定します。falseに設定すると現在のオブジェクトのみが検索対象となります。',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAPブラウザ',
    LDAP_WARNING: '警告',
    LDAP_DIRTY_CHANGE: '変更は保存されていません。先へ進みますか?',
    LDAP_CONNECTOR_TEST: 'LDAP接続',
    LDAP_CONNECTOR_TESTING: 'LDAPサーバーへの接続をテストしています。',
    LDAP_CONNECTOR_EDIT: 'サーバー接続を変更すると現在のすべての認証と権限の設定は失われます。サーバー接続を変更しますか?',

    LDAP_USER_TEST_DESCRIPTION: 'サーチベースとサーチフィルタでLDAPサーバーに存在するユーザー名を検索します。',
    LDAP_USER_TEST_LABEL: 'ユーザー検索:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'LDAPサーバーでユーザー',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'が見つかりました。',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'LDAPサーバーでユーザーが見つかりません',
    LDAP_USER_TEST_ERROR_LABEL_PART2: '設定を確認して再度お試しください。',
    LDAP_USER_DOMAIN_LABEL: 'ユーザーDN:',

    LDAP_POPULATOR_TEST: 'LDAPポピュレータテスト',
    LDAP_USER_TEST: 'LDAPユーザーテスト',
    LDAP_ROLES_TEST: 'LDAPロールテスト',
    LDAP_CONNECTOR_TEST_PASSED: 'LDAPサーバーへの接続に成功しました。',
    LDAP_CONNECTOR_TEST_FAILED: 'LDAPサーバーに接続できません。設定を確認して再度お試しください。',

    SAVE: '保存',
    TEST: 'テスト',
    CANCEL: 'キャンセル',
    YES: 'はい',
    YES_CHANGE: 'はい',
    NO: 'いいえ',
    OK: 'OK',
    CLOSE: '閉じる',
    TEST_PASSED: 'テスト成功',
    TEST_FAILED: 'テスト失敗',

    CONFIGURATION_SAVED: '認証メソッドの変更は保存されましたが、サーバーの再起動を行うまで変更は反映されません。',

    //licenseManager
    PRODUCT: '製品',
    START_DATE: '開始日',
    END_DATE: '終了日',
    VERSION: 'バージョン',
    LICENSES: 'ライセンス',
    DELETE_TITLE: '選択したライセンスを削除しますか?',
    DELETE_WARNING: '選択したライセンスを削除しようとしています。ライセンスを削除しますか?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'biserver-eeの有効なライセンスが見つかりました',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'biserver-eeの有効なライセンスが見つかりません',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "ライセンスの有効期限が切れています",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: '続けるにはPentaho BIプラットフォームのライセンスをアップデートしてください。ライセンスの準備が出来ていない場合は<a href="%CONTEXT_PATH%\Logout" target="_top">ログアウト</a>し、後でライセンスのアップデートを行ってください。',
    LICENSE_CANCEL_BUTTON: 'ログアウト',
    LICENSE_OK_BUTTON: 'Ok'

});
