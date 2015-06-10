
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
    TITLE_LABEL: '認証',
    AUTHENTICATION_METHOD_LABEL: '認証メソッド',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'ユーザーとその資格証明に関するログを管理する場所を選択：',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: '外部認証メソッドの構成は完了していません。作成した変更は失われます。続行しますか？',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: '認証メソッドを切り替えると、新規構成が開始し、ユーザー、ロールおよびログイン パスワードが変更される可能性があります。本当にこれを変更しますか?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'ローカルに認証メソッドを設定すると現在の LDAP セキュリティ設定は削除されます。続行しますか?',
    AUTHENTICATION_METHOD_TITLE: '認証メソッドの変更',
    PENTAHO: 'ローカル - 基本設定の Pentaho 認証を使用',
    LDAP: '外部 - LDAP / アクティブ ディレクトリ サーバーを使用',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP サーバー接続',
    LDAP_SERVER_URL_LABEL: 'サーバー URL：',
    LDAP_USER_LABEL: 'ユーザー名:',
    LDAP_PASSWORD_LABEL: 'パスワード:',
    LDAP_TEST_CONNECTION_LABEL: 'LDAP セットアップを続行するための接続テスト',
    LDAP_SERVER_URL_DESCRIPTION: 'ディレクトリ サーバーへ接続する際に使用する接続 URL',
    LDAP_USER_DESCRIPTION: 'ディレクトリへの読み込みアクセス時のユーザー識別名',
    LDAP_PASSWORD_DESCRIPTION: '上で指定したユーザーのパスワード',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'サーバーの接続テスト',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho システム管理者',
    LDAP_ADMINISTRATOR_USER_LABEL: 'LDAP サーバーからユーザーの選択：',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'LDAP サーバーからロールの選択：',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'LDAP サーバーからユーザーを選択して Pentaho システム管理者の割り当てを行って下さい。',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'LDAP サーバーからロールを選択して Pentaho システム管理者の割り当てを行って下さい。',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP 構成',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP プロバイダー',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache ディレクトリ サーバー',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft アクティブ ディレクトリ',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'カスタム構成',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'ユーザー ベース：',
    LDAP_USER_SEARCH_BASE_LABEL: '検索ベース：',
    LDAP_USER_SEARCH_FILTER_LABEL: '検索フィルター：',
    LDAP_GROUP_BASE_LABEL: 'グループ ベース： ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'ユーザー検索に対する (ユーザー名による) ベース',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'ユーザー検索に対する (ユーザー名による) フィルターここで指定する属性には、ユーザーが Pentaho へログインをするのに用いることを望む値が含まれる必要があります。',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'ユーザー検索',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: '役割',
    LDAP_ROLE_BASE_LABEL: 'ロール属性：',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'ロール検索フィルター：',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'ロール検索ベース：',
    LDAP_ROLE_BASE_DESCRIPTION: 'ロール値に使用する属性',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: '&quot;すべてのロール&quot; の検索に対するフィルター',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: '&quot;すべてのロール&quot; の検索に対するベース',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'ポピュレーター',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'グループ ロール属性：',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'ロール名を取得する属性',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'グループ検索ベース：',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'ロール検索に対する (ユーザー DN または ユーザー名による) ベース',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'グループ検索フィルター：',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'グループ オブジェクトを検索する際に使用するフィルター',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'ロール プレフィックス：',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'グループ ロール属性内にロール名の最初に追加するプレフィックスを発見しました。値を空の文字列にすることも可能です。',
    LDAP_POPULATOR_UPPERCASE_LABEL: '大文字に変換する：',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: '取得したロール名を大文字に変換する、しないを指定します。',
    LDAP_POPULATOR_SUBTREE_LABEL: 'サブツリー：',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: '検索が現在のオブジェクトおよびすべての子を含む必要があるかどうか指定するfalse に設定する場合、検索は現在のオブジェクトしか含みません。',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP ブラウザー',
    LDAP_WARNING: '警告',
    LDAP_DIRTY_CHANGE: '未保存の変更があります。続行しますか？',
    LDAP_CONNECTOR_TEST: 'LDAP 接続',
    LDAP_CONNECTOR_TESTING: 'LDAP サーバーの接続テスト中です。',
    LDAP_CONNECTOR_EDIT: 'サーバー接続を変更するとすべての現在の認証およびアクセス許可の設定が削除されます。続行しますか？',

    LDAP_USER_TEST_DESCRIPTION: '検索ベースおよび検索フィルター構成で LDAP サーバーに存在するユーザー名を検索します。',
    LDAP_USER_TEST_LABEL: 'ユーザーを検索：',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'おめでとうございます。ユーザー',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'LDAP サーバーで発見されました。',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'ユーザーを検出できませんでした。',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'LDAP サーバー上にあります。設定を確認し、再試行してください。',
    LDAP_USER_DOMAIN_LABEL: 'ユーザー DN:',

    LDAP_POPULATOR_TEST: 'LDAP ポピュレーター テスト',
    LDAP_USER_TEST: 'LDAP ユーザーテスト',
    LDAP_ROLES_TEST: 'LDAP ロール テスト',
    LDAP_CONNECTOR_TEST_PASSED: 'LDAP サーバーへの接続は正常に行われました。',
    LDAP_CONNECTOR_TEST_FAILED: 'LDAP サーバーへ接続できません。設定を確認し、再試行してください。',

    SAVE: '保存',
    TEST: 'テスト',
    CANCEL: 'キャンセル',
    YES: 'はい',
    YES_CHANGE: 'はい、続行します。',
    NO: 'いいえ',
    OK: 'OK',
    CLOSE: '閉じる',
    TEST_PASSED: 'テスト成功',
    TEST_FAILED: 'テスト失敗',

    CONFIGURATION_SAVED: '認証メソッドに対する変更は保存されましたが、変更はサーバーを再起動するまで有効になりません。',

    //licenseManager
    PRODUCT: '製品',
    START_DATE: '日付を開始',
    END_DATE: '日付を終了',
    VERSION: 'バージョン',
    LICENSES: 'ライセンス',
    DELETE_TITLE: '選択されたライセンスを削除しますか?',
    DELETE_WARNING: '選択されたライセンスを削除しようとしています。続行しますか？',

    LICENSE_VALID_LICENSE_FOUND_LOG: '有効な biserver-ee ライセンスが発見されました。',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: '有効な biserver-ee ライセンスは発見されませんでした。',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "存在しないもしくは期限切れのライセンス",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: '続行するには Pentaho BI プラットフォーム ライセンスを更新する必要があります。準備完了でない場合は <a href="%CONTEXT_PATH%\Logout" target="_top">ログアウト</a> し、後でもう一度実行して下さい。',
    LICENSE_CANCEL_BUTTON: 'ログアウト',
    LICENSE_OK_BUTTON: 'OK',
    LICENSE_ADD_LICENSE: 'ライセンスを追加',
    LICENSE_DELETE_LICENSE: 'ライセンスを削除'

});