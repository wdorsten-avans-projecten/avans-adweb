import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent as LedgerDetail } from './components/pages/ledgers/detail/detail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'ledgers/:id', component: LedgerDetail }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {}
