import { Component, OnInit } from '@angular/core';
import { faBookOpen, faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
	constructor(private authService: AuthService) {}

	faBookOpen = faBookOpen;
	faSignInAlt = faSignInAlt;
	faSignOutAlt = faSignOutAlt;
	faUserPlus = faUserPlus;
	currentUser: User | null = null;
	email: string | null = null;

	ngOnInit(): void {
		this.authService.getAuth().onAuthStateChanged((u) => {
			if (u) {
				this.currentUser = u;
				this.email = u.email;
			}
		});
	}

	signOutHandler() {
		this.authService.signOut();
	}
}
