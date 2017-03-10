var app = angular.module('app', ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            url: '',
            views:{
                'header': {
                    templateUrl: 'header.html',
                    controller: 'headerCtrl'
                },
                'footer': {
                    templateUrl: 'footer.html',
                }
            }
        })
        .state('root.home', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'home.html',
                    controller: 'homeCtrl'
                }
            }
        })
        .state('root.webinar1', {
            url: '/webinar1',
            views: {
                'content@': {
                    templateUrl: 'webinar1.html',
                    controller: 'webinar1Ctrl'
                }
            }
        })
        .state('root.webinar2', {
            url: '/webinar2',
            views: {
                'content@': {
                    templateUrl: 'webinar2.html',
                    controller: 'webinar2Ctrl'
                }
            }
        })
        .state('root.webinar3', {
            url: '/webinar3',
            views: {
                'content@': {
                    templateUrl: 'webinar3.html',
                    controller: 'webinar3Ctrl'
                }
            }
        })
        .state('root.webinar4', {
            url: '/webinar4',
            views: {
                'content@': {
                    templateUrl: 'webinar4.html',
                    controller: 'webinar4Ctrl'
                }
            }
        })
        .state('root.webinar5', {
            url: '/webinar5',
            views: {
                'content@': {
                    templateUrl: 'webinar5.html',
                    controller: 'webinar5Ctrl'
                }
            }
        })
        .state('root.webinar6', {
            url: '/webinar6',
            views: {
                'content@': {
                    templateUrl: 'webinar6.html',
                    controller: 'webinar6Ctrl'
                }
            }
        });
}).run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})



