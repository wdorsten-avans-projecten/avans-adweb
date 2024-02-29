import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
	CollectionReference,
	DocumentData,
	DocumentReference,
	addDoc,
	collection,
	deleteDoc,
	getFirestore
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	private environment = {
		apiKey: 'AIzaSyCup-RmwMZ1_BQQRqTAK5lXY3pH-ECuwSA',
		authDomain: 'adweb-booker.firebaseapp.com',
		projectId: 'adweb-booker',
		storageBucket: 'adweb-booker.appspot.com',
		messagingSenderId: '497447104873',
		appId: '1:497447104873:web:552e24b16631c4059ecdf8'
	};

	private readonly app = initializeApp(this.environment);
	private readonly db: Firestore = getFirestore(this.app);
	private readonly auth = getAuth(this.app);

	getDb(): Firestore {
		return this.db;
	}

	getAuth(): Auth {
		return this.auth;
	}

	getCollection(collectionName: string): CollectionReference<DocumentData> {
		return collection(this.db, collectionName);
	}

	async addOne(collection: CollectionReference, obj: any): Promise<DocumentReference<DocumentData>> {
		return await addDoc(collection, obj);
	}

	async addMany(collection: CollectionReference, objs: Array<any>): Promise<DocumentReference<DocumentData>> {
		return await addDoc(collection, objs);
	}

	async deleteOne(obj: DocumentReference<DocumentData>): Promise<void> {
		return await deleteDoc(obj);
	}
}
