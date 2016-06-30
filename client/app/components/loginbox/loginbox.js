import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginboxComponent from './loginbox.component';

let loginboxModule = angular.module('loginbox', [
  uiRouter
])

.component('loginbox', loginboxComponent);

export default loginboxModule;
