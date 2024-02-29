import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LedgerService } from 'src/app/services/ledger/ledger.service';
import { Ledger } from 'src/app/services/ledger/types';
import { faPlusCircle, faArchive } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'ledger-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
	private ledgerSubscription: Subscription;
	ledgers: Ledger[] = [];
	filteredLedgers: Ledger[] = [];
	filter: boolean = false;
	faPlusCircle = faPlusCircle;
	faArchive = faArchive;

	constructor(private ledgerService: LedgerService, private authService: AuthService) {}

	ngOnInit(): void {
		this.ledgerService.getLedgers$().then((data) => {
			this.ledgerSubscription = data.subscribe((docs) => {
				this.ledgers = docs.filter(
					(l: Ledger) => l.user === this.authService.getAuth().currentUser!.uid
				) as Ledger[];
				this.filteredLedgers = this.ledgers.filter((l: Ledger) => l.archived === this.filter);
			});
		});
	}

	toggleFilter(): void {
		this.filter = !this.filter;
		this.filteredLedgers = this.ledgers.filter((l: Ledger) => l.archived === this.filter);
	}

	unArchiveLedger(id: string): void {
		this.ledgerService.archiveLedger(id);
	}

	ngOnDestroy(): void {
		this.ledgerSubscription.unsubscribe();
	}
}
