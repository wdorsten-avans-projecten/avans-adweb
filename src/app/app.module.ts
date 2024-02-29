import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/pages/home/home.component';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { IndexComponent as TransactionIndex } from './components/pages/transactions/index/index.component';
import { CreateComponent as TransactionCreate } from './components/pages/transactions/create/create.component';
import { EditComponent as TransactionEdit } from './components/pages/transactions/edit/edit.component';
import { DeleteComponent as TransactionDelete } from './components/pages/transactions/delete/delete.component';
import { IndexComponent as CategoryIndex } from './components/pages/categories/index/index.component';
import { CreateComponent as CategoryCreate } from './components/pages/categories/create/create.component';
import { EditComponent as CategoryEdit } from './components/pages/categories/edit/edit.component';
import { DeleteComponent as CategoryDelete } from './components/pages/categories/delete/delete.component';
import { IndexComponent as LedgerIndex } from './components/pages/ledgers/index/index.component';
import { DetailComponent as LedgerDetails } from './components/pages/ledgers/detail/detail.component';
import { CreateComponent as LedgerCreate } from './components/pages/ledgers/create/create.component';
import { EditComponent as LedgerEdit } from './components/pages/ledgers/edit/edit.component';
import { DeleteComponent as LedgerDelete } from './components/pages/ledgers/delete/delete.component';
import { IndexComponent as AuthIndex } from './components/pages/auth/index/index.component';
import { LoginComponent as AuthLogin } from './components/pages/auth/forms/login/login.component';
import { RegisterComponent as AuthCreate } from './components/pages/auth/forms/register/register.component';
import { ProgressbarComponent } from './components/molecules/progressbar/progressbar.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		AlertComponent,
		TransactionIndex,
		TransactionEdit,
		TransactionDelete,
		TransactionCreate,
		CategoryIndex,
		CategoryCreate,
		CategoryEdit,
		CategoryDelete,
		LedgerIndex,
		LedgerDetails,
		LedgerCreate,
		LedgerEdit,
		LedgerDelete,
		AuthIndex,
		AuthLogin,
		AuthCreate,
		ProgressbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		FontAwesomeModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
