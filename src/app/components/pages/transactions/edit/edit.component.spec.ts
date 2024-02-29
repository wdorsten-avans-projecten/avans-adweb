import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { Transaction } from '../../../../services/transaction/types';
import { FormsModule } from '@angular/forms';

describe('EditComponent', () => {
	let component: EditComponent;
	let fixture: ComponentFixture<EditComponent>;
	let mockTransaction: Transaction = { id: 'Dy4S25pHI5EMkhteEVoh', sum: 11, date: new Date('2023-06-20') };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditComponent],
			imports: [FontAwesomeTestingModule, FormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(EditComponent);
		component = fixture.componentInstance;
		component.transaction = mockTransaction;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it("should contain the mock transaction's id", () => {
		expect(fixture.nativeElement.textContent).toContain(mockTransaction.id);
	});

	it('should contain input fields', () => {
		const input = fixture.nativeElement.querySelector('input')!;
		expect(input.length).not.toBe(0);
	});
});
