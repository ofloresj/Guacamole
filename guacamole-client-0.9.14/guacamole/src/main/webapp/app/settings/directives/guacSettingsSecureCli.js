/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * A directive for managing all users in the system.
 */
angular.module('settings').directive('guacSettingsSecureCli', [function guacSettingsSecureCli() {
    
    return {
        // Element only
        restrict: 'E',
        replace: true,

        scope: {
        },

        templateUrl: 'app/settings/templates/settingsSecureCli.html',
        controller: ['$scope', '$injector', function settingsSecureCliController($scope, $injector) {

            // Required types
            var ManageableUser  = $injector.get('ManageableUser');
            var PermissionSet   = $injector.get('PermissionSet');
            var SortOrder       = $injector.get('SortOrder');

            // Required services
            var $location              = $injector.get('$location');
            var $translate             = $injector.get('$translate');
            var authenticationService  = $injector.get('authenticationService');
            var dataSourceService      = $injector.get('dataSourceService');
            var guacNotification       = $injector.get('guacNotification');
            var permissionService      = $injector.get('permissionService');
            var userService            = $injector.get('userService');

            // Identifier of the current user
            var currentUsername = authenticationService.getCurrentUsername();

            console.log("Hola Mundo!!!")


            
        }]
    };
    
}]);
