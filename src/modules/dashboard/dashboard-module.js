import DashboardCtrl from './dashboard-ctrl.js';
import dashboardTemplate from './dashboard.html';

let dashboard = angular.module('dashboard', [])
  .config(function($stateProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      template: dashboardTemplate,
      controller: DashboardCtrl,
      controllerAs: 'dashboard'
    });
  });

export default dashboard;
