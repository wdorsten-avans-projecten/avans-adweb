import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'auth-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	email: string | undefined;
	password: string | undefined;
	passwordConfirm: string | undefined;
	message: string | undefined;
	faUserPlus = faUserPlus;

	constructor(private authService: AuthService) {}

	registerHandler() {
		if (this.email && this.password) {
			if (this.password === this.passwordConfirm) {
				this.authService.signUp(this.email, this.password);
			}
		} else {
			if (!this.email && !this.password) this.message = 'Voer geldige accountgegevens in.';
			else if (!this.email) this.message = 'Voer een geldig emailadres in.';
			else if (!this.password) this.message = 'Voer een geldig wachtwoord in.';
			else if (this.password !== this.passwordConfirm) this.message = 'Wachtwoorden komen niet overeen.';
		}
	}
}
