import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
	selector: 'progressbar',
	templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent {
	@Input() set categoryId(val: string) {
		if (val !== this._categoryId) {
			this._categoryId = val;
			this._sumTransactions = 0;
			this.categoryService.getCategory(this._categoryId).then((c) => {
				if (c.data()) this._maxBudget = c.data()!.maxBudget;
			});

			this.transactionService.getTransactions().then((t) => {
				t.forEach((tr) => {
					if (tr.data().categoryId === val) {
						this._sumTransactions += tr.data().sum;
					}
				});
			});
		}
	}

	constructor(private transactionService: TransactionService, private categoryService: CategoryService) {}
	private _categoryId: string;
	_maxBudget: number;
	_sumTransactions: number;
}
