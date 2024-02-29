import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { CreateComponent } from '../create/create.component';
import { TransactionTableComponent } from 'src/app/components/organisms/tables/transaction-table/transaction-table.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('IndexComponent', () => {
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IndexComponent, CreateComponent, TransactionTableComponent],
			imports: [FontAwesomeTestingModule, ReactiveFormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(IndexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain a table', () => {
		const tbl = fixture.nativeElement.querySelector('transaction-table');
		expect(tbl).toBeDefined();
	});

	it('should contain 2 buttons', () => {
		const btn = fixture.nativeElement.querySelectorAll('button');
		expect(btn.length).toBe(2);
	});
});
