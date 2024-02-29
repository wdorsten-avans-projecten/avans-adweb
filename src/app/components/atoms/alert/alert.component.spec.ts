import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertType } from 'src/app/services/alert/alert';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;
	const msg = 'Hello world!';

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AlertComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		component.alerts.push({ message: msg, type: AlertType.Success });
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain a message', () => {
		expect(fixture.nativeElement.textContent).toContain(msg);
	});

	it('should contain a close button', () => {
		const btn = fixture.nativeElement.querySelector('button');
		expect(btn.classList).toContain('btn-close');
	});
});
