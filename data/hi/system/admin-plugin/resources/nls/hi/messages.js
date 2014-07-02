define(﻿{
    TITLE_LABEL: 'प्रमाणीकरण',
    AUTHENTICATION_METHOD_LABEL: 'प्रमाणीकरण पद्धति',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'उस स्थान का चयन करें जहाँ उपयोगकर्ता और उनके लॉगिन क्रेडेंशियल को प्रबंधित किया जाएगा:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'आपने अपने बाहरी प्रमाणीकरण पद्धति के विन्यास को पूरा नहीं किया है.आप अपने द्वारा किये गये किसी भी परिवर्तन को खो देंगे. क्या आप जारी रखना चाहते हैं?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'प्रमाणीकरण पद्धति को स्विच करना एक नया विन्यास शुरू करेगा और उपयोगकर्ता, भूमिकायें और लॉग इन कूटशब्द को बदल सकता है. क्या आप निश्चित हैं कि आप यह परिवर्तन करना चाहते हैं?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'प्रमाणीकरण पद्धति को स्थानीय करना आपके वर्तमान LDAP सुरक्षा सेटिंग्स को हटा देगा. क्या आप आगे बढ़ना चाहते हैं?',
    AUTHENTICATION_METHOD_TITLE: 'प्रमाणीकरण पद्धति परिवर्तन',
    PENTAHO: 'स्थानीय - आधारभूत पेंटाहो प्रमाणीकरण का उपयोग करें',
    LDAP: 'बाह्य - LDAP / एक्टिव डायरेक्टरी सर्वर का उपयोग करें',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'LDAP सर्वर कनेक्शन',
    LDAP_SERVER_URL_LABEL: 'सर्वर यूआरएल:',
    LDAP_USER_LABEL: 'उपयोगकर्ता नाम:',
    LDAP_PASSWORD_LABEL: 'कूटशब्द:',
    LDAP_TEST_CONNECTION_LABEL: 'LDAP सेटअप को आगे बढाने के लिए कनेक्शन परीक्षण करे',
    LDAP_SERVER_URL_DESCRIPTION: 'डायरेक्टरी सर्वर से कनेक्ट करते समय उपयोग के लिए कनेक्शन यूआरएल',
    LDAP_USER_DESCRIPTION: 'उपयोगकर्ता का एक अधिमान्य नाम जिसे डायरेक्ट्री पढ़ने की अनुमति है',
    LDAP_PASSWORD_DESCRIPTION: 'ऊपर निर्दिष्ट उपयोगकर्ता का कूटशब्द',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'सर्वर कनेक्शन परिक्षण ',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'पेंटाहो सिस्टम व्यवस्थापक',
    LDAP_ADMINISTRATOR_USER_LABEL: 'LDAP सर्वर से उपयोगकर्ता का चयन करें:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'LDAP सर्वर से भूमिका का चयन करें:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'पेंटाहो सिस्टम प्रशासक के रूप में नियुक्त करने के लिए LDAP सर्वर से उपयोगकर्ता का चयन करें',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'पेंटाहो सिस्टम प्रशासक के रूप में नियुक्त करने के लिए LDAP सर्वर से भूमिका का चयन करें',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'LDAP विन्यास',
    LDAP_CONFIGURATION_PROVIDER: 'LDAP प्रदाता:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'अपाचे डायरेक्टरी सर्वर',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'माइक्रोसॉफ्ट एक्टिव डायरेक्टरी',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'कस्टम विन्यास',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'उपयोगकर्ता आधार:',
    LDAP_USER_SEARCH_BASE_LABEL: 'खोज आधार:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'खोज फिल्टर:',
    LDAP_GROUP_BASE_LABEL: 'समूह आधार: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'उपयोगकर्ता खोजों के लिए आधार (उपयोगकर्ता नाम द्वारा ) ',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'उपयोगकर्ता खोजों के लिए फिल्टर (उपयोगकर्ता नाम द्वारा). जो एट्रिब्यूट आप यहाँ निर्दिष्ट करते हैं उनमें वह मान शामिल होना चाहिए जिनके साथ आप चाहते है कि आपके उपयोगकर्ता पेंटाहो लॉग इन करें',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'उपयोगकर्ता खोज',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'भूमिकाएं',
    LDAP_ROLE_BASE_LABEL: 'भूमिका विशेषता (एट्रिब्यूट):',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'भूमिका खोज फिल्टर:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'भूमिका खोज आधार:',
    LDAP_ROLE_BASE_DESCRIPTION: 'भूमिका मानों के लिए इस्तेमाल की गयी विशेषता (एट्रिब्यूट)',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: '"सभी भूमिकाओं" की खोज का फिल्टर',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: '"सभी भूमिकाओं" की खोज का आधार',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'पोपुलेटर',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'समूह भूमिका विशेषता (एट्रिब्यूट):',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'वह विशेषता जिससे भूमिका नाम प्राप्त करे:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'समूह खोज आधार',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'भूमिका खोजों के लिए आधार (उपयोगकर्ता डी.एन. या उपयोगकर्ता नाम द्वारा).',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'समूह खोज फिल्टर:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'समूह ऑब्जेक्ट्स की खोज करते समय उपयोग करने के लिए फिल्टर.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'भूमिका उपसर्ग:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'भूमिका नाम के आरम्भ में जोड़ने के लिए एक उपसर्ग समूह भूमिका विशेषता (एट्रिब्यूट) में पाया गया; मान एक खाली स्ट्रिंग हो सकता है.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'अपरकेस में बदले:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'संकेत करता है कि पुनः प्राप्त भूमिका नामों को अपरकेस में परिवर्तित कर रहा है या नहीं.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'सबट्री:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'संकेत करत है की खोज वर्तमान ऑब्जेक्ट व् चिल्ड्रेन को बिलकुल शामिल करे. अगर यह फाल्स सेट है तो खोज केवल वर्तमान ऑब्जेक्ट को ही शामिल करेगी',

    //dialogs
    LDAP_BROWSER_TITLE: 'LDAP ब्राउज़र',
    LDAP_WARNING: 'चेतावनी',
    LDAP_DIRTY_CHANGE: 'आपके परिवर्तन सुरक्षित नहीं हैं. क्या आप जारी रखना चाहते हैं?',
    LDAP_CONNECTOR_TEST: 'LDAP कनेक्शन',
    LDAP_CONNECTOR_TESTING: 'LDAP सर्वर से कनेक्शन का परीक्षण.',
    LDAP_CONNECTOR_EDIT: 'सर्वर कनेक्शन को बदलने से सभी मौजूदा प्रमाणीकरण और अनुमति सेटिंग्स हट जाएँगी. क्या आप जारी रखना चाहते हैं?',

    LDAP_USER_TEST_DESCRIPTION: 'खोज आधार और खोज फ़िल्टर विन्यास के साथ एक उपयोगकर्ता का नाम खोजें जो कि आपके LDAP सर्वर में है.',
    LDAP_USER_TEST_LABEL: 'उपयोगकर्ता के लिए खोजें:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'बधाइयाँ. उपयोगकर्ता',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'LDAP सर्वर पर पाया गया था.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'उपयोगकर्ता को पाने में असमर्थ',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'LDAP सर्वर पर. सेटिंग्स को सत्यापित करें और पुनः प्रयास करें.',
    LDAP_USER_DOMAIN_LABEL: 'उपयोगकर्ता डीएन:',

    LDAP_POPULATOR_TEST: 'LDAP पोपुलेटर परीक्षण',
    LDAP_USER_TEST: 'LDAP उपयोगकर्ता परीक्षण',
    LDAP_ROLES_TEST: 'LDAP भूमिका परीक्षण',
    LDAP_CONNECTOR_TEST_PASSED: 'LDAP सर्वर से कनेक्ट करना सफल रहा था',
    LDAP_CONNECTOR_TEST_FAILED: 'LDAP सर्वर से कनेक्ट करने में असमर्थ. सेटिंग्स को सत्यापित करें और पुनः प्रयास करें.',

    SAVE: 'सुरक्षित करें',
    TEST: 'परीक्षण',
    CANCEL: 'रद्द करें',
    YES: 'हाँ',
    YES_CHANGE: 'हाँ, जारी रखें',
    NO: 'नहीं',
    OK: 'ठीक है',
    CLOSE: 'बंद करें',
    TEST_PASSED: 'परीक्षण सफल',
    TEST_FAILED: 'परीक्षण असफल',

    CONFIGURATION_SAVED: 'प्रमाणीकरण पद्धति के परिवर्तन सुरक्षित कर लिए गए हैं, फिर भी, आपके परिवर्तन प्रभावकारी नहीं होंगे जबतक कि आप सर्वर को रीस्टार्ट नहीं करते. ',

    //licenseManager
    PRODUCT: 'प्रोडक्ट',
    START_DATE: 'दिनांक प्रारम्भ',
    END_DATE: 'दिनांक समाप्त',
    VERSION: 'संस्करण',
    LICENSES: 'लाइसेंस',
    DELETE_TITLE: 'चयनित लाइसेंस को हटायें?',
    DELETE_WARNING: 'आप चयनित लाइसेंस को हटाने ही वाले हैं. क्या आप जारी रखना चाहते हैं?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'वैध बीआई- ईई लाइसेंस मिला',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'कोई वैध बीआई सर्वर- ईई लाइसेंस नहीं मिला',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "लाइसेंस अनुपस्थित या समयसीमा समाप्त",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'जारी रखने के लिए आपको अपना पेंटाहो बीआई प्लेटफार्म अद्यतन करना होगा. यदि आप तैयार नहीं है तो आप <a href="%CONTEXT_PATH%\Logout" target="_top">log out</a> कर सकते हैं और बाद में दुबारा वापस आ सकते हैं.'
    LICENSE_CANCEL_BUTTON: 'लॉग आउट',
    LICENSE_OK_BUTTON: 'ठीक है'

});
