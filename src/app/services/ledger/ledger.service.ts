import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { CollectionReference, getDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { Ledger } from './types';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class LedgerService {
	private readonly collection: CollectionReference<Ledger>;
	constructor(private fireService: FirebaseService, private authService: AuthService) {
		this.collection = fireService.getCollection('ledgers') as CollectionReference<Ledger>;
	}

	async getLedger$(id: string): Promise<Observable<Ledger>> {
		const ldg = await getDoc(doc(this.collection, id));
		return new Observable<Ledger>((sub: Subscriber<Ledger>) => {
			sub.next({ id, ...ldg.data() } as Ledger);
		});
	}

	async getLedgers$() {
		return new Observable<Ledger[]>((sub: Subscriber<Ledger[]>) => {
			onSnapshot(this.collection, (querySnapshot) => {
				const ledgers: Ledger[] = [];
				querySnapshot.forEach((doc) => {
					let ledger = doc.data() as Ledger;
					ledger.id = doc.id;
					ledgers.push(ledger);
				});
				sub.next(ledgers);
			});
		});
	}

	async createLedger(title: string, description: string) {
		const ledger: Ledger = {
			user: this.authService.getAuth().currentUser!.uid,
			title: title,
			description: description,
			archived: false
		};
		return await this.fireService.addOne(this.collection, ledger);
	}

	async updateLedger(title: string, description: string, id: string) {
		const ledger: Ledger = (await getDoc(doc(this.collection, id))).data() as Ledger;
		if (ledger.title !== title) ledger.title = title;
		if (ledger.description !== description) ledger.description = description;
		return await updateDoc(doc(this.collection, id), ledger);
	}

	async archiveLedger(id: string) {
		const ledger: Ledger = (await getDoc(doc(this.collection, id))).data() as Ledger;
		ledger.archived = !ledger.archived;
		return await updateDoc(doc(this.collection, id), ledger);
	}
}
