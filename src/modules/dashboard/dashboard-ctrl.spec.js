import DashboardCtrl from './dashboard-ctrl';

let $scope;
let dashboardController;

beforeEach(inject(function ($rootScope) {
  $scope = $rootScope.$new();
  dashboardController = new DashboardCtrl($scope);
}));

describe('when the dashboard controller is initialised', function() {
  it('says hello', function() {
    expect(dashboardController.helloWorld).toEqual('Hello World');
  });
});
