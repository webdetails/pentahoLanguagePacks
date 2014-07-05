define({
    TITLE_LABEL: '인증',
    AUTHENTICATION_METHOD_LABEL: '인증 방식',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: '사용자 및 인증 정보를 저장할 위치 선택:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: '외부 인증 방식에 대한 설정이 완료되지 않았습니다. 변경된 내용은 저장되지 않습니다. 계속하시겠습니까?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: '인증 방식을 변경하면 새로운 설정이 생성되며 사용자, 역할, 로그인 비밀번호 등이 변경될 수 있습니다. 변경을 적용하시겠습니까?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: '인증 방식을 내부로 변경하면 현재 LDAP 보안 설정 내용이 삭제됩니다. 계속하시겠습니까?',
    AUTHENTICATION_METHOD_TITLE: '인증 방식 변경',
    PENTAHO: '내부 - 펜타호 인증 사용',
    LDAP: '외부 - LDAP / 액티브 디렉터리 서버',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP 서버 연결',
    LDAP_SERVER_URL_LABEL: '서버 URL:',
    LDAP_USER_LABEL: '사용자명:',
    LDAP_PASSWORD_LABEL: '비밀번호:',
    LDAP_TEST_CONNECTION_LABEL: 'LDAP 설정을 위한 테스트 연결',
    LDAP_SERVER_URL_DESCRIPTION: '디렉터리 서버에 접속하기 위한 연결 URL',
    LDAP_USER_DESCRIPTION: '디렉터리에 읽기 권한이 있는 지정된 사용자',
    LDAP_PASSWORD_DESCRIPTION: '지정한 사용자의 비밀번호',
    LDAP_TEST_SERVER_CONNECTION_LABEL: '서버 연결 테스트',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: '펜타호 시스템 관리자',
    LDAP_ADMINISTRATOR_USER_LABEL: 'LDAP 서버에서 사용자 선택:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'LDAP 서버에서 역할 선택:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: '펜타호 시스템 관리자로 지정할 LDAP 서버의 사용자를 선택합니다',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: '펜타호 시스템 관리자로 지정할 LDAP 서버의 역할을 선택합니다',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP 설정',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP 제공자:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: '아파치 디렉터리 서버',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: '마이크로소프트 액티브 디렉터리',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: '커스텀 설정',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: '사용자 기준 위치:',
    LDAP_USER_SEARCH_BASE_LABEL: '검색 기준 위치:',
    LDAP_USER_SEARCH_FILTER_LABEL: '검색 필터:',
    LDAP_GROUP_BASE_LABEL: '그룹 기준 위치: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: '사용자를 (username으로) 검색할 기준 위치.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: '사용자를 (username으로) 검색하기 위한 필터. 펜타호에 로그인을 허용할 사용자에 대한 값을 속성으로 지정해야 합니다.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: '사용자 검색',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: '역할',
    LDAP_ROLE_BASE_LABEL: '역할 속성:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: '역할 속성 필터:',
    LDAP_ROLE_SEARCH_BASE_LABEL: '역할 속성 기준 위치:',
    LDAP_ROLE_BASE_DESCRIPTION: '역할 값을 읽어올 속성',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: '"모든 역할"을 검색하기 위한 필터',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: '"모든 역할" 검색에 사용할 기준 위치',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: '가져오기',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: '그룹 역할 속성:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: '역할 이름을 읽어올 속성.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: '그룹을 검색할 기준 위치:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: '역할 검색(사용자 DN 이나 username)에 사용할 기준 위치.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: '그룹 검색 필터:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: '그룹 객체를 검색할 때 사용할 필터.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: '역할 접두사:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: '그룹 역할 속성의 역할 이름 앞에 덧붙일 접두사입니다. 빈 문자열 값으로 지정할 수 있습니다.',
    LDAP_POPULATOR_UPPERCASE_LABEL: '대문자로 변환:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: '가져온 역할 이름을 대문자로 변환할 지를 결정합니다.',
    LDAP_POPULATOR_SUBTREE_LABEL: '하위 계층:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: '현재의 객체의 모든 자식 객체로 검색을 확장할 지 결정합니다. 설정하지 않을 경우 검색은 오직 현재 객체만을 포함해야 합니다.',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP 탐색기',
    LDAP_WARNING: '주의',
    LDAP_DIRTY_CHANGE: '저장되지 않은 변경 내용이 있습니다. 계속 하시겠습니까?',
    LDAP_CONNECTOR_TEST: 'LDAP 연결',
    LDAP_CONNECTOR_TESTING: 'LDAP 서버 연결 테스트.',
    LDAP_CONNECTOR_EDIT: '서버 연결 정보를 변경하면 현재의 모든 인증 및 권한 설정이 삭제 됩니다. 계속 진행 하시겠습니까?',

    LDAP_USER_TEST_DESCRIPTION: '설정된 검색 기준 위치와 필터를 사용해서 LDAP 서버에 특정 사용자가 존재하는지 검색합니다.',
    LDAP_USER_TEST_LABEL: '사용자 검색:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: '축하합니다. LDAP 서버에서',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: '사용자를 찾았습니다.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'LDAP 서버에서 사용자',
    LDAP_USER_TEST_ERROR_LABEL_PART2: '를 찾을 수 없습니다. 설정을 확인 후 다시 시도해 주시기 바랍니다.',
    LDAP_USER_DOMAIN_LABEL: '사용자 DN:',

    LDAP_POPULATOR_TEST: 'LDAP 가져오기 테스트',
    LDAP_USER_TEST: 'LDAP 사용자 테스트',
    LDAP_ROLES_TEST: 'LDAP 역할 테스트',
    LDAP_CONNECTOR_TEST_PASSED: 'LDAP 서버에 성공적으로 접속했습니다.',
    LDAP_CONNECTOR_TEST_FAILED: 'LDAP 서버에 연결할 수 없습니다. 설정을 확인 후 다시 시도해 주시기 바랍니다.',

    SAVE: '저장',
    TEST: '테스트',
    CANCEL: '취소',
    YES: '예',
    YES_CHANGE: '예, 계속',
    NO: '아니오',
    OK: '확인',
    CLOSE: '닫기',
    TEST_PASSED: '테스트 성공',
    TEST_FAILED: '테스트 실패',

    CONFIGURATION_SAVED: '인증 방식에 대한 변경 내용이 저장되었습니다. 변경된 내용은 서버를 재시작하면 반영됩니다.',

    //licenseManager
    PRODUCT: '제품',
    START_DATE: '시작일',
    END_DATE: '종료일',
    VERSION: '버전',
    LICENSES: '라이센스',
    DELETE_TITLE: '선택된 라이센스를 삭제하시겠습니까?',
    DELETE_WARNING: '선택된 라이센스를 삭제하려고 합니다. 계속 진행하시겠습니까?',

    LICENSE_VALID_LICENSE_FOUND_LOG: '유효한 biserver-ee 라이센스를 찾았습니다',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: '유효한 biserver-ee 라이센스가 없습니다',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "라이센스가 존재하지 않거나 만료되었습니다.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: '계속 진행하기 위해 펜타호 BI 플랫폼 라이센스를 갱신해야 합니다. 아직 준비가 되지 않았다면 <a href="%CONTEXT_PATH%\Logout" target="_top">로그아웃</a> 후 나중에 다시 진행할 수 있습니다.',
    LICENSE_CANCEL_BUTTON: '로그아웃',
    LICENSE_OK_BUTTON: '확인'

});
