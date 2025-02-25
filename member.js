function skillsMember() {
 return{
    restrict: 'E',
    templateUrl: 'app/member/member.html',  
    controller: 'skillsMemberCtrl',
    controllerAs: 'vm',
    binddtocontroller: true ,
    scope: {
        member: '='
    }

 };
}