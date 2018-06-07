function APPCtrl($scope) {
    var parseAppId = 'iXHZYAvuBaX7aXdZrd2Yhu8O0PrKCMad6aIivZNx',
            parseAppKey = '8KMDmMepdWWXnBNF87bEcNlR3ArEFEjzH8oB9Lwo';

            Parse.initialize(parseAppId, parseAppKey);

            Parse.serverURL = 'https://parseapi.back4app.com';

    // $mdDialog.show({
    //         locals:{email: email},  
    //         controller: 'ReplyEmailDialogController',
    //         templateUrl: 'app/email/reply-email-dialog.tmpl.html',
    //         clickOutsideToClose:true
    //     })

    $scope.subscribe  = function(){
        console.log('$scope.subscribe_email');
        if (!$scope.subscribe_email_succeed) {
            var SBEmail = Parse.Object.extend('SBEmail');
            var email = new SBEmail();
            email.set('email',$scope.subscribe_email);
            email.save();
            $scope.subscribe_email_succeed = true;
        }else{
            $scope.subscribe_email_error = true;
        }
        
    }

    $scope.sendMessage = function() {
        if (!$scope.name || !$scope.email || !$scope.subject || !$scope.message) {
            $scope.empty_info = true;
        };

        if ($scope.success) {
            $scope.already_send = true;
        };

        if ($scope.name && $scope.email && $scope.subject && $scope.message && !$scope.success) {
            
            $scope.message_feedback = 'Messae has been sent!';
            
            $scope.success = true;
            $scope.empty_info = false;
            var WEBContact = Parse.Object.extend('WEBContact');
            var contact = new WEBContact();
            contact.set('name', $scope.name);
            contact.set('email', $scope.email);
            contact.set('subject', $scope.subject);
            contact.set('message', $scope.message);
            contact.save().then(function(contact){
                console.log(contact);
            });
        };


        
    }
}