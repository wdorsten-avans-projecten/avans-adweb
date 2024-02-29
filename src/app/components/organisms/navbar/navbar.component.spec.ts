import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavbarComponent],
			imports: [FontAwesomeTestingModule]
		}).compileComponents();

		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeDefined();
	});

	it('should contain title', () => {
		expect(fixture.nativeElement.textContent).toContain('Booker');
	});

	it('should contain links', () => {
		const links = fixture.nativeElement.querySelector('a')!;
		expect(links.count).not.toBe(0);
	});
});
