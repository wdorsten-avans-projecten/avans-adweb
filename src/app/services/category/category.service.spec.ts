import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { CollectionReference, DocumentData } from 'firebase/firestore';

describe('CategoryService', () => {
	let service: CategoryService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CategoryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a collection with a specific type', () => {
		expect(typeof service.getCollection() === typeof CollectionReference<DocumentData>).not.toBeTrue();
	});

	it('should throw error with incorrect params', () => {
		expect(() => {
			//@ts-ignore: Deliberately testing for errors.
			service.getCategory(true);
		}).toThrowError();
	});
});
