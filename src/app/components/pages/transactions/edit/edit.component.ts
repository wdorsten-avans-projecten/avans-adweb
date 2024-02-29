import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../../services/transaction/types';
import { AlertService } from 'src/app/services/alert/alert.service';
import { faEuroSign, faCheckCircle, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
	selector: 'transaction-edit',
	templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
	@Input() transaction: Transaction | undefined;
	sum: number | undefined;
	date: string | undefined;
	faEuroSign = faEuroSign;
	faCheckCircle = faCheckCircle;
	faTimes = faTimes;
	faSave = faSave;

	constructor(private transactionService: TransactionService, private alertService: AlertService) {}

	ngOnInit(): void {
		if (this.transaction) {
			this.sum = this.transaction.sum;
			this.date = this.transaction.date;
		}
	}

	updateTransaction() {
		this.transactionService.updateTransaction(this.transaction!, { sum: this.sum, date: this.date });
		this.alertService.success(`Transactie met ID ${this.transaction!.id} is succesvol aangepast.`);
	}
}
