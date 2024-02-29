import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { AlertComponent } from 'src/app/components/atoms/alert/alert.component';
import { Alert } from './alert';

describe('AlertService', () => {
	let service: AlertService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AlertService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should not throw an error with correct parameters', () => {
		const alert: Alert = { message: 'Hello world!', autoClose: true };
		expect(() => {
			service.alert(alert);
		}).not.toThrowError();
	});

	it('should throw an error with incorrect arguments', () => {
		expect(() => {
			//@ts-ignore: Deliberately testing for errors.
			service.alert(true);
		}).toThrowError();
	});
});
