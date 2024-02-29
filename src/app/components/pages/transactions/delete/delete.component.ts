import { Component, Input } from '@angular/core';
import { faExclamationTriangle, faTrash, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../../../services/transaction/types';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
	selector: 'transaction-delete',
	templateUrl: './delete.component.html'
})
export class DeleteComponent {
	@Input() transaction!: Transaction;
	faExclamationTriangle = faExclamationTriangle;
	faTrash = faTrash;
	faStopCircle = faStopCircle;

	constructor(private transactionService: TransactionService, private alertService: AlertService) {}

	deleteAction() {
		if (this.transaction.id) {
			this.transactionService.deleteTransaction(this.transaction.id);
			this.alertService.success(`Transactie met ID ${this.transaction.id} is succesvol verwijderd.`, {
				autoClose: true
			});
		}
	}
}
