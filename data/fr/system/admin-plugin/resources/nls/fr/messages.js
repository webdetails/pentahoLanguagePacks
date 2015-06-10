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
        TITLE_LABEL: 'Authentification',
        AUTHENTICATION_METHOD_LABEL: 'Mode d'
        authentification ',
        AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Sélectionnez l'
        emplacement où l 'utilisateur et ses informations de connexion seront gérés&nbsp;:',
        AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Vous n'
        avez pas terminé la configuration de votre mode d 'authentification externe. Vous allez perdre toutes les modifications apportées. Voulez-vous continuer&nbsp;?',
        AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Le changement de mode d'
        authentification lancera une nouvelle configuration et les utilisateurs,
        rôles et mots de passe de connexion peuvent changer.Souhaitez - vous vraiment apporter cette modification & nbsp; ? ',
        AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR : 'La définition du mode d'
        authentification sur Local supprimera vos paramètres de sécurité LDAP actuels.Voulez - vous continuer & nbsp; ? ',
        AUTHENTICATION_METHOD_TITLE : 'Modification du mode d'
        authentification ',
        PENTAHO: 'Local - utilisation de l'
        authentification Pentaho de base ',
        LDAP: 'Externe - utilisation du serveur Active Directory/LDAP',

        //ldap server configuration
        LDAP_CONNECTION_TITLE_LABEL: 'Connexion au serveur LDAP',
        LDAP_SERVER_URL_LABEL: 'URL du serveur&nbsp;:',
        LDAP_USER_LABEL: 'Nom d'
        utilisateur & nbsp;: ',
        LDAP_PASSWORD_LABEL: 'Mot de passe&nbsp;:',
        LDAP_TEST_CONNECTION_LABEL: 'Tester la connexion pour poursuivre la configuration LDAP',
        LDAP_SERVER_URL_DESCRIPTION: 'L'
        URL de connexion à utiliser lors de la connexion au serveur d 'annuaire',
        LDAP_USER_DESCRIPTION: 'Nom d'
        utilisateur unique avec accès en lecture au répertoire ',
        LDAP_PASSWORD_DESCRIPTION: 'Mot de passe de l'
        utilisateur spécifié ci - dessus ',
        LDAP_TEST_SERVER_CONNECTION_LABEL: 'Tester la connexion au serveur',

        //ldap administration configuration
        LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrateur système Pentaho',
        LDAP_ADMINISTRATOR_USER_LABEL: 'Sélectionnez l'
        utilisateur à partir du serveur LDAP & nbsp;: ',
        LDAP_ADMINISTRATOR_ROLE_LABEL: 'Sélectionnez le rôle à partir du serveur LDAP&nbsp;:',
        LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Sélectionnez l'
        utilisateur à partir du serveur LDAP afin de l 'affecter comme administrateur système Pentaho.',
        LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Sélectionnez le rôle à partir du serveur LDAP afin de l'
        affecter comme administrateur système Pentaho.
        ',

        //ldap configuration
        LDAP_CONFIGURATION_TITLE: 'Configuration LDAP',
        LDAP_CONFIGURATION_PROVIDER: 'Fournisseur LDAP&nbsp;:',
        LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
        LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
        LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuration personnalisée',

        //ldap apache configuration
        LDAP_USER_BASE_LABEL: 'Base d'
        utilisateurs & nbsp;: ',
        LDAP_USER_SEARCH_BASE_LABEL: 'Base de recherche&nbsp;:',
        LDAP_USER_SEARCH_FILTER_LABEL: 'Filtre de recherche&nbsp;:',
        LDAP_GROUP_BASE_LABEL: 'Base de groupes&nbsp;: ',
        LDAP_USER_BASE_DESCRIPTION: '',
        LDAP_USER_SEARCH_BASE_DESCRIPTION: 'Base (par nom d'
        utilisateur) pour les recherches d 'utilisateurs.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtre (par nom d'
    utilisateur) pour les recherches d 'utilisateurs. L'
attribut spécifié ici doit contenir la valeur avec laquelle vous souhaitez que vos utilisateurs se connectent à Pentaho.
',
LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Recherche d'
utilisateurs ',

//ldap custom roles configuration 
LDAP_ROLES_TITLE: 'Rôles',
    LDAP_ROLE_BASE_LABEL: 'Attribut de rôle&nbsp;:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtre de recherche de rôles&nbsp;:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base de recherche de rôles&nbsp;:',
    LDAP_ROLE_BASE_DESCRIPTION: 'Attribut utilisé pour les valeurs de rôles',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtre pour les recherches de «&nbsp;tous les rôles&nbsp;»',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base pour les recherches de «&nbsp;tous les rôles&nbsp;»',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Outil de remplissage',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Attribut de rôle de groupe&nbsp;:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'Attribut à partir duquel obtenir les noms de rôles.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base de recherche de groupes&nbsp;:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (par nom d'
utilisateur unique ou nom d 'utilisateur) pour les recherches de rôles.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtre de recherche de groupes&nbsp;:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Filtre à utiliser lors de la recherche d'
objets de groupe.
',
LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Préfixe du rôle&nbsp;:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Préfixe à ajouter au début du nom du rôle qui se trouve dans l'
attribut de rôle de groupe & nbsp;;
la valeur peut être une chaîne vide.
',
LDAP_POPULATOR_UPPERCASE_LABEL: 'Convertir en majuscules&nbsp;:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indique si les noms de rôles extraits sont convertis en majuscules.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Sous-arbre&nbsp;:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indique si la recherche doit inclure l'
objet actuel et tous ses enfants.Si ce paramètre est défini sur faux, la recherche doit inclure l 'objet actuel uniquement.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navigateur LDAP',
    LDAP_WARNING: 'Avertissement',
    LDAP_DIRTY_CHANGE: 'Certains changements n'
ont pas été enregistrés.Voulez - vous continuer & nbsp; ? ',
LDAP_CONNECTOR_TEST: 'Connexion LDAP',
    LDAP_CONNECTOR_TESTING: 'Test de la connexion au serveur LDAP',
    LDAP_CONNECTOR_EDIT: 'La modification de la connexion au serveur entraînera la suppression de tous les paramètres d'
autorisation et d 'authentification actuels. Voulez-vous continuer&nbsp;?',

    LDAP_USER_TEST_DESCRIPTION: 'Grâce à la base de recherche et à la configuration du filtre de recherche, recherchez un nom d'
utilisateur qui existe sur votre serveur LDAP.
',
LDAP_USER_TEST_LABEL: 'Recherche d'
utilisateur & nbsp; : ',
LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Félicitations. Utilisateur',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'trouvé sur le serveur LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Impossible de trouver l'
utilisateur ',
LDAP_USER_TEST_ERROR_LABEL_PART2: 'sur le serveur LDAP. Vérifiez les paramètres et réessayez.',
    LDAP_USER_DOMAIN_LABEL: 'Nom d'
utilisateur unique & nbsp;: ',

LDAP_POPULATOR_TEST: 'Test de l'
outil de remplissage LDAP ',
LDAP_USER_TEST: 'Test utilisateur LDAP',
    LDAP_ROLES_TEST: 'Test des rôles LDAP',
    LDAP_CONNECTOR_TEST_PASSED: 'La connexion au serveur LDAP a abouti.',
    LDAP_CONNECTOR_TEST_FAILED: 'Impossible de se connecter au serveur LDAP. Vérifiez les paramètres et réessayez.',

    SAVE: 'Enregistrer',
    TEST: 'Tester',
    CANCEL: 'Annuler',
    YES: 'Oui',
    YES_CHANGE: 'Oui, continuer',
    NO: 'Non',
    OK: 'OK',
    CLOSE: 'Fermer',
    TEST_PASSED: 'Test réussi',
    TEST_FAILED: 'Échec du test',

    CONFIGURATION_SAVED: 'Les modifications apportées au mode d'
authentification ont été enregistrées, mais vos modifications prendront uniquement effet au redémarrage du serveur.
',

//licenseManager
PRODUCT: 'Produit',
    START_DATE: 'Date de début',
    END_DATE: 'Date de fin',
    VERSION: 'Version',
    LICENSES: 'Licences',
    DELETE_TITLE: 'Supprimer la licence sélectionnée&nbsp;?',
    DELETE_WARNING: 'Vous êtes sur le point de supprimer la licence sélectionnée. Voulez-vous continuer&nbsp;?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Licence biserver-ee valide trouvée',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Aucune licence biserver-ee valide trouvée',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "Licence expirée ou manquante",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Pour continuer, vous devez mettre à jour la licence de votre plateforme BI Pentaho. Si vous n'
êtes pas prêt maintenant, vous pouvez vous < a href = "%CONTEXT_PATH%\Logout"
target = "_top" > déconnecter < /a> et reprendre ultérieurement.',
LICENSE_CANCEL_BUTTON: 'Se déconnecter',
    LICENSE_OK_BUTTON: 'OK',
    LICENSE_ADD_LICENSE: 'Ajouter une licence',
    LICENSE_DELETE_LICENSE: 'Supprimer une licence'

});