import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CategoriesComponent', () => {
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IndexComponent],
			imports: [ReactiveFormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(IndexComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should contain a form', () => {
		const frm = fixture.nativeElement.querySelector('form');
		expect(frm).toBeDefined();
	});

	it('should contain an unordered list', () => {
		const lst = fixture.nativeElement.querySelector('ul');
		expect(lst).toBeDefined();
	});
});
