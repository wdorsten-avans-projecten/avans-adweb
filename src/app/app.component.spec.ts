import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, FontAwesomeTestingModule],
			declarations: [AppComponent, NavbarComponent, AlertComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeDefined();
	});

	it('should contain exactly 1 router-outlet', () => {
		const routerOutlet = fixture.nativeElement.querySelectorAll('router-outlet');
		expect(routerOutlet.length).toBe(1);
	});

	it('should contain nav', () => {
		const nav = fixture.nativeElement.querySelector('nav');
		expect(nav).toBeDefined();
	});
});
