import { ForgetPassPage } from './forget-pass.page';
import {AuthenticationService} from '../../services/authentication-service';
import { Router} from '@angular/router';

describe('Component: Details', () => {

    let component: ForgetPassPage;
    let router:Router;

    let authentication:AuthenticationService;

    beforeEach(() => {
      component = new ForgetPassPage(authentication,router);
    });

    // clear
    afterEach(() => {
      authentication=null;

        router = null;
        component = null;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});