import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LedgerService } from 'src/app/services/ledger/ledger.service';
import { Ledger } from 'src/app/services/ledger/types';
import { faSpinner, faArchive, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'ledger-detail',
	templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
	ledgerSubscription: Subscription | undefined;
	ledger: Ledger | undefined;

	faSpinner = faSpinner;
	faArchive = faArchive;
	faEdit = faEdit;

	constructor(private route: ActivatedRoute, private ledgerService: LedgerService) {}

	ngOnInit(): void {
		const id = this.route.snapshot.url[1].toString();
		this.ledgerService.getLedger$(id).then((data) => {
			this.ledgerSubscription = data.subscribe((doc) => {
				this.ledger = doc as Ledger;
			});
		});
	}

	ngOnDestroy(): void {
		this.ledgerSubscription!.unsubscribe();
	}
}
