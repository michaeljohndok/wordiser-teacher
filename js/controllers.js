function APPCtrl($scope) {
    
    var _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox12e36=["\x69\x58\x48\x5A\x59\x41\x76\x75\x42\x61\x58\x37\x61\x58\x64\x5A\x72\x64\x32\x59\x68\x75\x38\x4F\x30\x50\x72\x4B\x43\x4D\x61\x64\x36\x61\x49\x69\x76\x5A\x4E\x78","\x38\x4B\x4D\x44\x6D\x4D\x65\x70\x64\x57\x57\x58\x6E\x42\x4E\x46\x38\x37\x62\x45\x63\x4E\x6C\x52\x33\x41\x72\x45\x46\x45\x6A\x7A\x48\x38\x6F\x42\x39\x4C\x77\x6F","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65","\x73\x65\x72\x76\x65\x72\x55\x52\x4C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x72\x73\x65\x61\x70\x69\x2E\x62\x61\x63\x6B\x34\x61\x70\x70\x2E\x63\x6F\x6D"];var parseAppId=__Ox12e36[0],parseAppKey=__Ox12e36[1];Parse[__Ox12e36[2]](parseAppId,parseAppKey);Parse[__Ox12e36[3]]= __Ox12e36[4]

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