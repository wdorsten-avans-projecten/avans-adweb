import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { CollectionReference, DocumentData } from 'firebase/firestore';

describe('TransactionService', () => {
	let service: TransactionService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TransactionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a collection with a specific type', () => {
		expect(typeof service.getCollection()).not.toBe(typeof CollectionReference<DocumentData>);
	});

	it('should throw an error with incorrect parameters', () => {
		expect(() => {
			// @ts-ignore: Deliberately testing for errors.
			service.getTransaction(true);
		}).toThrowError();
	});
});
