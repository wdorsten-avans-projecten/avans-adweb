import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AlertService } from '../alert/alert.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(fireService: FirebaseService, private alertService: AlertService) {
		this.auth = fireService.getAuth();
	}

	private readonly auth: Auth;

	getAuth() {
		return this.auth;
	}

	async signUp(email: string, password: string) {
		await createUserWithEmailAndPassword(this.auth, email, password)
			.then(() => {
				this.alertService.success(`Account succesvol aangemaakt.`);
			})
			.catch((e) => {
				this.alertService.error(`Gebruiker met emailadres ${email} bestaat al.`);
				console.error(e);
			});
	}

	async signIn(email: string, password: string) {
		await signInWithEmailAndPassword(this.auth, email, password)
			.then(() => {
				this.alertService.success(`Succesvol ingelogd als ${email}.`);
			})
			.catch((e) => {
				this.alertService.error(`Kon niet inloggen met de ingevulde inloggegevens.`, { autoClose: true });
				console.error(e);
			});
	}

	signOut() {
		signOut(this.auth);
	}
}
