import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateComponent', () => {
	let component: CreateComponent;
	let fixture: ComponentFixture<CreateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CreateComponent],
			imports: [FontAwesomeTestingModule, ReactiveFormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(CreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeDefined();
	});

	it('should contain two input fields', () => {
		const input = fixture.nativeElement.querySelectorAll('input');
		expect(input.length).toBe(2);
	});

	it('should contain exactly 1 button', () => {
		const buttons = fixture.nativeElement.querySelectorAll('button');
		expect(buttons.length).toBe(1);
	});
});
