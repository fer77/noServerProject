angular.module('myApp', ['ngAnimate', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'Menu/aboutTmpl.html',
        controller: 'aboutCtrl'
    })
    
    .state('blog', {
        
    })
    
    .state('help', {
        
    })
    
    .state('Contact', {
        
    })
    
    .state('home', {
        url: '/home',
        template: ''
    })
    
    $urlRouterProvider.otherwise('/home');
})

