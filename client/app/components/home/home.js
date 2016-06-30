import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import loginBox from '../loginbox/loginbox';

let homeModule = angular.module('home', [
  uiRouter,
  loginBox.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;