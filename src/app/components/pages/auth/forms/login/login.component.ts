import { Component } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	email: string | undefined;
	password: string | undefined;
	faSignInAlt = faSignInAlt;
	message: String | undefined;

	constructor(private authService: AuthService) {}

	loginHandler() {
		if (this.email && this.password) {
			this.authService.signIn(this.email, this.password);
		} else {
			if (!this.email && !this.password) this.message = 'Vul geldige gegevens in.';
			else if (!this.password) this.message = 'Vul een geldig wachtwoord in.';
			else if (!this.email) this.message = 'Vul een geldig emailadres in.';
		}
	}
}
