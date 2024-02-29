import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { Firestore } from '@angular/fire/firestore';

describe('FirebaseService', () => {
	let service: FirebaseService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FirebaseService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a Firestore', () => {
		expect(typeof service.getDb).toBe(typeof Firestore);
	});

	it('should throw an error with incorrect parameters', () => {
		expect(() => {
			// @ts-ignore: Deliberately testing for errors.
			service.getCollection(false);
		}).toThrowError();
	});
});
