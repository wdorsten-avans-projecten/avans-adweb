import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LedgerService } from 'src/app/services/ledger/ledger.service';
import { Ledger } from 'src/app/services/ledger/types';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'ledger-edit',
	templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
	@Input() ledger: Ledger;
	title: string | undefined;
	description: string | undefined;

	faTimes = faTimes;
	faSave = faSave;

	constructor(private ledgerService: LedgerService, private alertService: AlertService) {}

	ngOnInit(): void {
		this.title = this.ledger.title;
		this.description = this.ledger.description;
	}

	updateLedger() {
		if (this.title && this.description) {
			this.ledgerService.updateLedger(this.title, this.description, this.ledger.id!);
		} else {
			if (!this.title) this.alertService.error('Vul alstublieft een geldige titel in.');
			if (!this.description) this.alertService.error('Vul alstublieft een geldige omschrijving in.');
		}
	}
}
