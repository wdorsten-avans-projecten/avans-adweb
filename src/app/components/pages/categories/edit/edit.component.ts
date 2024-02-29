import { Component, Input } from '@angular/core';
import { faEuroSign, faCheckCircle, faTimesCircle, faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/services/category/types';

@Component({
	selector: 'category-edit',
	templateUrl: './edit.component.html'
})
export class EditComponent {
	@Input() set categoryId(val: string) {
		this.categoryService
			.getCategory(val)
			.then((ref) => {
				this.category = ref.data() as Category;
				this.category.id = ref.id;
			})
			.then(() => {
				this.name = this.category.name;
				this.maxBudget = this.category.maxBudget;
				this.endDate = this.category.endDate;
			});
	}

	faEuroSign = faEuroSign;
	faCheckCircle = faCheckCircle;
	faTimesCircle = faTimesCircle;
	faSave = faSave;
	faSpinner = faSpinner;

	category: Category;
	name: string;
	maxBudget: number;
	endDate: string;

	constructor(private categoryService: CategoryService) {}

	onFormSubmit(): void {
		this.categoryService.updateCategory(this.category.id!, {
			name: this.name,
			endDate: this.endDate,
			maxBudget: this.maxBudget
		});
	}
}
