import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faPlusCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from '../../../../services/transaction/types';

@Component({
	selector: 'transaction-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
	@Input() set categoryId(val: string) {
		console.log(val);
		if (val) this.filteredTransactions = this.transactions.filter((t: Transaction) => t.categoryId === val);
		if (val !== this.selectedCategoryId) this.selectedCategoryId = val;
	}

	faPlusCircle = faPlusCircle;
	faTrash = faTrash;
	faEdit = faEdit;

	transactionsSubscription: Subscription;
	transactions: Transaction[] = [];
	filteredTransactions: Transaction[] = [];
	selectedCategoryId: string;

	constructor(private transactionService: TransactionService) {}

	ngOnInit(): void {
		this.transactionService.getTransactions$().then((data) => {
			this.transactionsSubscription = data.subscribe((trns) => {
				this.transactions = trns as Transaction[];
				this.filteredTransactions = trns.filter((t) => t.categoryId === this.selectedCategoryId);
			});
		});
	}

	ngOnDestroy(): void {
		this.transactionsSubscription.unsubscribe();
	}

	async deleteTransaction(id: string) {
		this.transactionService.deleteTransaction(id);
	}
}
