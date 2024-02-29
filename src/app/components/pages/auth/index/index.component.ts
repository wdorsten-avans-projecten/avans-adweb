import { Component } from '@angular/core';
import { faUserPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'auth-index',
	templateUrl: './index.component.html'
})
export class IndexComponent {
	register: boolean;
	message = 'Account aanmaken';
	faUserPlus = faUserPlus;
	faArrowRight = faArrowRight;

	toggleRegister() {
		this.register = !this.register;
		if (this.register) this.message = 'Inloggen';
		else this.message = 'Account aanmaken';
	}
}
