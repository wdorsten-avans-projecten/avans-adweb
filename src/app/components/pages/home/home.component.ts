import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	currentUser: User | null = null;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.getAuth().onAuthStateChanged((u) => {
			this.currentUser = u;
		});
	}
}
