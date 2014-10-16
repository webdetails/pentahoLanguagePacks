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
    TITLE_LABEL: 'Authentication',
    AUTHENTICATION_METHOD_LABEL: 'Authentication Method',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Select where user and their log in credentials will be managed:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'You have not completed configuring your external authentication method. You will loose any changes you have made. Do you want to continue?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Switching authentication method will start a new configuration and may change users, roles and login passwords. Are you sure you want to make this change?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Setting the Authentication method to Local will remove your current LDAP security settings. Do you want to proceed?',
    AUTHENTICATION_METHOD_TITLE: 'Authentication Method Change',
    PENTAHO: 'Local - Use basic Pentaho authentication',
    LDAP: 'External - Use LDAP / Active Directory server',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP Server Connection',
    LDAP_SERVER_URL_LABEL: 'Server URL:',
    LDAP_USER_LABEL: 'User Name:',
    LDAP_PASSWORD_LABEL: 'Password:',
    LDAP_TEST_CONNECTION_LABEL: 'Test connection to proceed to the LDAP setup',
    LDAP_SERVER_URL_DESCRIPTION: 'The connection URL to use when connecting to the directory server',
    LDAP_USER_DESCRIPTION: 'Distinguished name of a user with read access to directory',
    LDAP_PASSWORD_DESCRIPTION: 'The password of the user specified above',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Test Server Connection',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Pentaho System Administrator',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Select user from LDAP server:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Select role from LDAP server:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Select the user from LDAP server to assign as the Pentaho system administrator',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Select the role from LDAP server to assign as the Pentaho system administrator',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP Configuration',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP Provider:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Custom Configuration',

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
    LDAP_ROLES_TITLE: 'Roles',
    LDAP_ROLE_BASE_LABEL: 'Role Attribute:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Role Search Filter:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Role Search Base:',
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
    LDAP_DIRTY_CHANGE: 'You have unsaved changes. Do you want to continue?',
    LDAP_CONNECTOR_TEST: 'LDAP Connection',
    LDAP_CONNECTOR_TESTING: 'Testing connection to LDAP server.',
    LDAP_CONNECTOR_EDIT: 'Changing server conneciton will remove all current authentication and premissions settings. Do you want to continue?',

    LDAP_USER_TEST_DESCRIPTION: 'With the search base and search filter configuration search for a user name that exists in your LDAP server.',
    LDAP_USER_TEST_LABEL: 'Search For User:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Congratualtions. User',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'was found on the LDAP server.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Unable to find user',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'on the LDAP server. Verify settings and try again.',
    LDAP_USER_DOMAIN_LABEL: 'User DN:',

    LDAP_POPULATOR_TEST: 'LDAP Populator Test',
    LDAP_USER_TEST: 'LDAP User Test',
    LDAP_ROLES_TEST: 'LDAP Roles Test',
    LDAP_CONNECTOR_TEST_PASSED: 'Connection to the LDAP server was successful.',
    LDAP_CONNECTOR_TEST_FAILED: 'Unable to connect to LDAP server. Verify settings and try again.',

    SAVE: 'Save',
    TEST: 'Test',
    CANCEL: 'Cancel',
    YES: 'Yes',
    YES_CHANGE: 'Yes, Continue',
    NO: 'No',
    OK: 'OK',
    CLOSE: 'Close',
    TEST_PASSED: 'Test Passed',
    TEST_FAILED: 'Test Failed',

    CONFIGURATION_SAVED: 'Changes to authentication method have been saved, however, your changes will not take effect until you restart the server.',

    //licenseManager
    PRODUCT: 'Product',
    START_DATE: 'Start Date',
    END_DATE: 'End Date',
    VERSION: 'Version',
    LICENSES: 'Licenses',
    DELETE_TITLE: 'Delete Selected License?',
    DELETE_WARNING: 'You are about to delete the selected license. Do you want to continue?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Valid biserver-ee license found',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'No valid biserver-ee license found',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Missing or expired license.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'To continue you must update your Pentaho BI Platform license. If you are not ready now you may <a href="%CONTEXT_PATH%\Logout" target="_top">log out</a> and come back later.',
    LICENSE_CANCEL_BUTTON: 'Log Out',
    LICENSE_OK_BUTTON: 'Ok',
    LICENSE_ADD_LICENSE: 'Add License',
    LICENSE_DELETE_LICENSE: 'Delete License'

});
