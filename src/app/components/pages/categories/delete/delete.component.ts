import { Component, Input } from '@angular/core';
import { faExclamationTriangle, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
	selector: 'category-delete',
	templateUrl: './delete.component.html'
})
export class DeleteComponent {
	@Input() set categoryId(val: string) {
		this.categoryService.getCategory(val).then((ref) => (this.categoryName = ref.data()!.name));
	}

	faExclamationTriangle = faExclamationTriangle;
	faTimesCircle = faTimesCircle;
	faTrash = faTrash;

	constructor(private categoryService: CategoryService) {}

	categoryName: string;

	deleteAction(): void {
		this.categoryService.deleteCategory(this.categoryId);
	}
}
