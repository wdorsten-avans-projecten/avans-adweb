import { Component, Input } from '@angular/core';
import { LedgerService } from 'src/app/services/ledger/ledger.service';
import { Ledger } from 'src/app/services/ledger/types';
import { faExclamationTriangle, faTimes, faArchive } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
	selector: 'ledger-delete',
	templateUrl: './delete.component.html'
})
export class DeleteComponent {
	@Input() ledger: Ledger;
	faExclamationTriangle = faExclamationTriangle;
	faTimes = faTimes;
	faArchive = faArchive;

	constructor(private ledgerService: LedgerService, private router: Router) {}

	archiveLedger() {
		this.ledgerService.archiveLedger(this.ledger.id!);
		this.router.navigate(['/']);
	}
}
