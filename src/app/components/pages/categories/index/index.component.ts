import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/services/category/types';
import { faPlusCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'category-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
	@Input() ledgerId: string;

	categoriesSubscription: Subscription;
	categories: Category[];

	selectedCategory: string;
	faPlusCircle = faPlusCircle;
	faTrash = faTrash;
	faEdit = faEdit;

	constructor(private categoryService: CategoryService) {}

	ngOnInit(): void {
		this.categoryService.getCategories$().then((data) => {
			this.categoriesSubscription = data.subscribe((docs) => {
				this.categories = docs.filter((c) => c.ledgerId === this.ledgerId) as Category[];
			});
		});
	}

	ngOnDestroy(): void {
		this.categoriesSubscription.unsubscribe();
	}
}
