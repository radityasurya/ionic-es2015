import './resources/scss/app.scss'
import './initialise-ionic'

import dashboard from './modules/dashboard/dashboard-module';

angular.module('app', ['ionic', dashboard.name])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})
.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
});
