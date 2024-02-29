import { Component, Input } from '@angular/core';
import { faCheckCircle, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
	selector: 'transaction-create',
	templateUrl: './create.component.html'
})
export class CreateComponent {
	faCheckCircle = faCheckCircle;
	faEuroSign = faEuroSign;

	@Input() categoryId: string;
	date: string = new Date().toISOString().split('T')[0];
	sum: number;

	constructor(private transactionService: TransactionService) {}

	async onFormSubmit() {
		this.transactionService.addTransaction({ sum: this.sum, date: this.date, categoryId: this.categoryId });
	}
}
