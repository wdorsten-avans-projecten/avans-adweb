import { Injectable } from '@angular/core';
import {
	CollectionReference,
	DocumentData,
	QuerySnapshot,
	doc,
	getDoc,
	onSnapshot,
	DocumentReference,
	DocumentSnapshot,
	updateDoc
} from 'firebase/firestore';
import { FirebaseService } from '../firebase/firebase.service';
import { Category } from './types';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	private readonly collection: CollectionReference<Category>;

	constructor(private fireService: FirebaseService) {
		this.collection = fireService.getCollection('categories') as CollectionReference<Category>;
	}

	async getCategory$(id: string): Promise<Observable<Category>> {
		const ctg = await getDoc(doc(this.collection, id));
		return new Observable<Category>((sub: Subscriber<Category>) => {
			sub.next({ id, ...ctg.data() } as Category);
		});
	}

	async getCategory(id: string): Promise<DocumentSnapshot<Category>> {
		return (await getDoc(doc(this.collection, id))) as DocumentSnapshot<Category>;
	}

	async getCategories$() {
		return new Observable<Category[]>((sub: Subscriber<Category[]>) => {
			onSnapshot(this.collection, (querySnapshot: QuerySnapshot<DocumentData>) => {
				const categories: Category[] = [];
				querySnapshot.forEach((doc) => {
					let category = doc.data() as Category;
					category.id = doc.id;
					categories.push(category);
				});
				sub.next(categories);
			});
		});
	}

	async createCategory(category: Category) {
		this.fireService.addOne(this.collection, category);
	}

	async updateCategory(id: string, data: Partial<Category>) {
		return await updateDoc(doc(this.collection, id), data);
	}

	async deleteCategory(categoryId: string) {
		this.fireService.deleteOne(doc(this.collection, categoryId));
	}
}
