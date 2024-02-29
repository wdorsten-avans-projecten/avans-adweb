import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LedgerService } from 'src/app/services/ledger/ledger.service';

@Component({
	selector: 'ledger-create',
	templateUrl: './create.component.html'
})
export class CreateComponent {
	title: string | undefined;
	description: string | undefined;
	faCheckCircle = faCheckCircle;

	constructor(private ledgerService: LedgerService, private alertService: AlertService) {}

	private formReset() {
		this.title = undefined;
		this.description = undefined;
	}

	onFormSubmit(): void {
		if (this.title && this.description) {
			this.ledgerService.createLedger(this.title, this.description);
			this.formReset();
		} else {
			if (!this.title) this.alertService.error('Vul alstublieft een geldige titel in.');
			if (!this.description) this.alertService.error('Vul alstublieft een geldige beschrijving in.');
		}
	}
}
