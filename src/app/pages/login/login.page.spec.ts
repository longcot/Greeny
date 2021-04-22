import { LoginPage } from './login.page';
import {AuthenticationService} from '../../services/authentication-service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

describe('Component: Details', () => {

    let component: LoginPage;
    let router:Router;
    let modalController:ModalController;
    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new LoginPage(authentication,router,modalController);
    });

    // clear
    afterEach(() => {
      authentication=null;
        modalController = null;
        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});