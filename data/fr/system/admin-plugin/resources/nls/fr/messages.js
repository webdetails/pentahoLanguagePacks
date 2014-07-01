define({
    TITLE_LABEL: 'Authentification',
    AUTHENTICATION_METHOD_LABEL: 'Méthode d\'authentification',
    AUTHENTICATION_METHOD_DESCRIPTION_LABEL: 'Sélectionner le type de gestion des utilisateurs et de leurs droits:',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_JCR: 'Vous n\'avez pas finalisé la configuration de la méthode d\'authentification externer. Vous allez perdre toutes les modications effectuées. Voulez-vous vraiment continuer ?',
    AUTHENTICATION_METHOD_CHANGE_FROM_JCR_TO_LDAP: 'Changer de méthode d\'authentification implique la mise à jour de la configuration et la perte potentielle d\'informations utilisateurs. Voulez-vous vraiment continuer ?',
    AUTHENTICATION_METHOD_CHANGE_FROM_LDAP_TO_JCR: 'Basculer en méthode d\'authentification locale va supprimer le paramétrage LDAP actuel. Voulez-vous vraiment continuer ?',
    AUTHENTICATION_METHOD_TITLE: 'Modification de la méthode d\'authentification',
    PENTAHO: 'Locale - Utiliser les fonctions d\'authentification de Pentaho',
    LDAP: 'Externe - Utiliser un serveur LDAP / Active Directory',

    //ldap server configuration
    LDAP_CONNECTION_TITLE_LABEL: 'Connexion au serveur LDAP',
    LDAP_SERVER_URL_LABEL: 'URL du Serveur:',
    LDAP_USER_LABEL: 'Nom d\'utilisateur:',
    LDAP_PASSWORD_LABEL: 'Mot de passe:',
    LDAP_TEST_CONNECTION_LABEL: 'Tester la connexion LDAP',
    LDAP_SERVER_URL_DESCRIPTION: 'L\'URL de connexion à utiliser pour l\'accès à l\'annuaire',
    LDAP_USER_DESCRIPTION: 'Nom d\'utilisateur pour l\'accès en lecture à l\'annuaire',
    LDAP_PASSWORD_DESCRIPTION: 'Le mot de passe de l\'utilisateur spécifié ci-dessus',
    LDAP_TEST_SERVER_CONNECTION_LABEL: 'Tester la connexion au serveur',

    //ldap administration configuration
    LDAP_ADMINISTRATOR_TITLE_LABEL: 'Administrateur Pentaho',
    LDAP_ADMINISTRATOR_USER_LABEL: 'Sélectionner un utilisateur depuis le serveur LDAP:',
    LDAP_ADMINISTRATOR_ROLE_LABEL: 'Sélectionner un rôle depuis le serveur LDAP:',
    LDAP_ADMINISTRATOR_USER_DESCRIPTION: 'Sélectionner un utilisateur depuis le serveur LDAP pour l\'assigner comme administrateur Pentaho',
    LDAP_ADMINISTRATOR_ROLE_DESCRIPTION: 'Sélectionner un rôle depuis le serveur LDAP pour l\'assigner comme administrateur Pentaho',

    //ldap configuration
    LDAP_CONFIGURATION_TITLE: 'Configuration LDAP',
    LDAP_CONFIGURATION_PROVIDER: 'Fournisseur LDAP:',
    LDAP_TYPE_SELECTOR_APACHE_OPTION_LABEL: 'Apache Directory Server',
    LDAP_TYPE_SELECTOR_MICROSOFT_OPTION_LABEL: 'Microsoft Active Directory',
    LDAP_TYPE_SELECTOR_CUSTOM_OPTION_LABEL: 'Configuration personnalisée',

    //ldap apache configuration
    LDAP_USER_BASE_LABEL: 'Base Utilisateur:',
    LDAP_USER_SEARCH_BASE_LABEL: 'Base Recherche:',
    LDAP_USER_SEARCH_FILTER_LABEL: 'Filtre Recherche:',
    LDAP_GROUP_BASE_LABEL: 'Base Groupe: ',
    LDAP_USER_BASE_DESCRIPTION: '',
    LDAP_USER_SEARCH_BASE_DESCRIPTION: 'La base (par nom utilisateur) pour les recherches utilisateur.',
    LDAP_USER_SEARCH_FILTER_DESCRIPTION: 'Filtre (par nom utilisateur) pour les recherches utilisateur. L\'attribut spécifié renferme la valeur avec laquelle vous souhaitez que les utilisateurs s\'authentifient dans Pentaho.',
    LDAP_GROUP_BASE_DESCRIPTION: '',

    //ldap custom user search configuration
    LDAP_USER_SEARCH_TITLE: 'Recherche Utilisateur',

    //ldap custom roles configuration 
    LDAP_ROLES_TITLE: 'Rôles',
    LDAP_ROLE_BASE_LABEL: 'Attribut Rôle:',
    LDAP_ROLE_SEARCH_FILTER_LABEL: 'Filtre Recherche Rôle:',
    LDAP_ROLE_SEARCH_BASE_LABEL: 'Base Recherche Rôle:',
    LDAP_ROLE_BASE_DESCRIPTION: 'L\'attribut utilisé pour les valeurs des rôles',
    LDAP_ROLE_SEARCH_FILTER_DESCRIPTION: 'Filtre pour les recherches "tous les rôles"',
    LDAP_ROLE_SEARCH_BASE_DESCRIPTION: 'Base pour les recherches "tous les rôles"',

    //ldap custom populator configuration
    LDAP_POPULATOR_TITLE: 'Populator',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_LABEL: 'Attribut Rôle Groupe:',
    LDAP_POPULATOR_GROUP_ROLE_ATTRIBUTE_DESCRIPTION: 'L\'attribut depuis lequel récupérer les noms de rôles.',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_LABEL: 'Base Recherche Groupe:',
    LDAP_POPULATOR_GROUP_SEARCH_BASE_DESCRIPTION: 'Base (par DN utilisateur ou nom) pour la recherche des rôles.',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_LABEL: 'Filtre Recherche Groupe:',
    LDAP_POPULATOR_GROUP_SEARCH_FILTER_DESCRIPTION: 'Le filtre à utiliser lors de la recherche de groupes.',
    LDAP_POPULATOR_ROLE_PREFIX_LABEL: 'Préfixe Rôle:',
    LDAP_POPULATOR_ROLE_PREFIX_DESCRIPTION: 'Un préfixe à ajouter au début du nom du rôle trouvé dans l\'attribut de rôle; la valeur peut être une chaîne vide.',
    LDAP_POPULATOR_UPPERCASE_LABEL: 'Convertir en majuscules:',
    LDAP_POPULATOR_UPPERCASE_DESCRIPTION: 'Indique si les noms de rôles récupérés sont convertis ou non en majuscules.',
    LDAP_POPULATOR_SUBTREE_LABEL: 'Sous-arbre:',
    LDAP_POPULATOR_SUBTREE_DESCRIPTION: 'Indique si la recherche doit comprendre ou non l\'objet courant et tous les enfants. Si défini à faux, la recherche doit inclure uniquement l\'objet courant.',

    //dialogs
    LDAP_BROWSER_TITLE: 'Navigateur LDAP',
    LDAP_WARNING: 'Attention',
    LDAP_DIRTY_CHANGE: 'Vous avez des modifications non sauvegardées. Voulez-vous continuer ?',
    LDAP_CONNECTOR_TEST: 'Connexion LDAP',
    LDAP_CONNECTOR_TESTING: 'Test connexion serveur LDAP.',
    LDAP_CONNECTOR_EDIT: 'Les modifications de la connexion au serveur vont supprimer toutes les authentifications et permissions actuelles. Voulez-vous vraiment poursuivre ?',

    LDAP_USER_TEST_DESCRIPTION: 'Recherche si un utilisateur existe dans le serveur LDAP pour les paramètres de recherche indiqués.',
    LDAP_USER_TEST_LABEL: 'Recherche de l\'utilisateur:',
    LDAP_USER_TEST_SUCCESS_LABEL_PART1: 'Félicitations. L\'utilisateur',
    LDAP_USER_TEST_SUCCESS_LABEL_PART2: 'a été trouvé sur le serveur LDAP.',
    LDAP_USER_TEST_ERROR_LABEL_PART1: 'Impossible de trouver l\'utilisateur',
    LDAP_USER_TEST_ERROR_LABEL_PART2: 'sur le serveur LDAP. Veuillez vérifier les paramètres indiqués.',
    LDAP_USER_DOMAIN_LABEL: 'User DN:',

    LDAP_POPULATOR_TEST: 'Test LDAP Populator',
    LDAP_USER_TEST: 'Utilisateur LDAP Test',
    LDAP_ROLES_TEST: 'Rôle LDAP Test',
    LDAP_CONNECTOR_TEST_PASSED: 'La connexion au serveur LDAP est réussie.',
    LDAP_CONNECTOR_TEST_FAILED: 'Impossible de se connecter au serveur LDAP. Veuillez vérifier les paramètres indiqués.',

    SAVE: 'Energistrer',
    TEST: 'Test',
    CANCEL: 'Annule',
    YES: 'Oui',
    YES_CHANGE: 'Oui, continuer',
    NO: 'Non',
    OK: 'OK',
    CLOSE: 'Fermer',
    TEST_PASSED: 'Test réussi',
    TEST_FAILED: 'Test échoué',

    CONFIGURATION_SAVED: 'Les modifications de la méthode d\'authentification ont été sauvegardées. Celles-ci seront effectives après le redémarrage du serveur.',

    //licenseManager
    PRODUCT: 'Produit',
    START_DATE: 'Date de début',
    END_DATE: 'Date de fin',
    VERSION: 'Version',
    LICENSES: 'Licences',
    DELETE_TITLE: 'Supprimer la licence sélectionnée ?',
    DELETE_WARNING: 'Vous allez supprimer la licence sélectionnée. Voulez-vous vraiment continuer ?',

    LICENSE_VALID_LICENSE_FOUND_LOG: 'Une licence valide pour le biserver-ee a été trouvée',
    LICENSE_NO_VALID_LICENSE_FOUND_LOG: 'Aucune licence valide trouvée pour le biserver-ee',
    LICENSE_NO_VALID_LICENSE_MESSAGE_HEADER: "La licence est manquante ou n\'est plus valide.",
    LICENSE_NO_VALID_LICENSE_MESSAGE_BODY: 'Pour continuer, vous devez mettre à jour votre licence Pentaho. Si vous n\'êtes pas prêt, vous pouvez vous <a href="%CONTEXT_PATH%\Logout" target="_top">déconnecter</a> et revenir ultérieurement.',
    LICENSE_CANCEL_BUTTON: 'Déconnexion',
    LICENSE_OK_BUTTON: 'Ok'

});
