import LoginboxModule from './loginbox'
import LoginboxController from './loginbox.controller';
import LoginboxComponent from './loginbox.component';
import LoginboxTemplate from './loginbox.html';

describe('Loginbox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginboxModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginboxController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(LoginboxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginboxComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginboxTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginboxController);
      });
  });
});
