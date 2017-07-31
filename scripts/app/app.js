var appRoot = angular.module('langingPages', ['ngRoute', 'ngResource', 'ngSanitize', 'angularStart.directives', 'angularStart.filters' /*, 'angularStart.services',  'ui.bootstrap'*/]); //Define the main module

appRoot
	.config([
		'$routeProvider', function($routeProvider) {
			//Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
			$routeProvider
				.when('/flat', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'flat'; }
					}
				})
				.when('/house', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'house'; }
					}
				})
				.when('/dacha', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'dacha'; }
					}
				})
				.when('/bathhouse', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'bathhouse'; }
					}
				})
				.when('/garazh', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'garazh'; }
					}
				})
				.when('/property', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'property'; }
					}
				})
				.when('/zhilyo', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'zhilyo'; }
					}
				})
				.when('/zhil-pom', {
					templateUrl: '/flat.html',
					controller: 'MainController',
					resolve: {
						propType: function() { return 'zhil-pom'; }
					}
				})
				.when('/turist', {
					templateUrl: '/turist.html',
					controller: 'TravelController',
					resolve: {
						tourType: function () { return 'turist'; }
					}
				})
				.when('/turizm', {
					templateUrl: '/turist.html',
					controller: 'TravelController',
					resolve: {
						tourType: function () { return 'turizm'; }
					}
				})
				.otherwise({ redirectTo: '/flat' }); //under question on integration
		}
	]);


appRoot.run(function($rootScope) {
	$(function() {
		$.extend($.inputmask.defaults.definitions, {
			'c': {
				"validator": "[А-Яа-яЁё \.\-\]",
				"cardinality": 1,
				'prevalidator': null
			},
			't': {
				"validator": "(0[0-9]|1[0-9]|2[0-3])",
				"cardinality": 2,
				"prevalidator": [
					{ validator: "[012]", cardinality: 1 }
				]
			}
		});

		$(window).scroll(function() {
			var offset = $('.header').offset().top;
			if (offset > 0) {
				$('.header').addClass('active');
			} else {
				$('.header').removeClass('active');
			}
		});
	});
});