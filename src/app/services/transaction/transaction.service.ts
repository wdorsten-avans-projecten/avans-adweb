import { Injectable } from '@angular/core';
import {
	CollectionReference,
	DocumentData,
	DocumentReference,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	query,
	updateDoc,
	where
} from 'firebase/firestore';
import { Transaction } from 'src/app/services/transaction/types';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TransactionService {
	private readonly collection: CollectionReference<Transaction>;

	constructor(private fireService: FirebaseService) {
		this.collection = fireService.getCollection('transactions') as CollectionReference<Transaction>;
	}

	getCollection(): CollectionReference<Transaction> {
		return this.collection;
	}

	async getTransaction$(id: string) {
		const trns = await getDoc(doc(this.collection, id));
		return new Observable<Transaction>((sub: Subscriber<Transaction>) => {
			sub.next(trns.data() as Transaction);
		});
	}

	async getTransactions$() {
		return new Observable<Transaction[]>((sub: Subscriber<Transaction[]>) => {
			onSnapshot(this.collection, (querySnapshot) => {
				const transactions: Transaction[] = [];
				querySnapshot.forEach((doc) => {
					let trans = doc.data() as Transaction;
					trans.id = doc.id;
					transactions.push(trans);
				});
				sub.next(transactions);
			});
		});
	}

	async getTransactions() {
		return await getDocs(this.collection);
	}

	async getTransactionsForCategory(id: string) {
		const q = query(this.collection, where('category', '==', id));
		return await getDocs(q);
	}

	async updateTransaction(transaction: Transaction, data: Partial<Transaction>): Promise<void> {
		return await updateDoc(doc(this.collection, transaction.id), data);
	}

	async addTransaction(transaction: Transaction): Promise<DocumentReference<DocumentData>> {
		return await this.fireService.addOne(this.collection, transaction);
	}

	async deleteTransaction(id: string) {
		return await this.fireService.deleteOne(doc(this.collection, id));
	}
}
