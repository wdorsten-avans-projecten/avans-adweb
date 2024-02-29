import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { DeleteComponent } from './delete.component';
import { Transaction } from '../../../../services/transaction/types';

describe('DeleteComponent', () => {
	let component: DeleteComponent;
	let fixture: ComponentFixture<DeleteComponent>;
	let mockTransaction: Transaction = { id: 'Dy4S25pHI5EMkhteEVoh', sum: 11, date: new Date('2023-06-20') };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DeleteComponent],
			imports: [FontAwesomeTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteComponent);
		component = fixture.componentInstance;
		component.transaction = mockTransaction;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain id of mocktransaction', () => {
		expect(fixture.nativeElement.textContent).toContain(mockTransaction.id);
	});

	it('should contain exactly 3 icons', () => {
		const icons = fixture.nativeElement.querySelectorAll('svg');
		expect(icons.length).toBe(3);
	});
});
