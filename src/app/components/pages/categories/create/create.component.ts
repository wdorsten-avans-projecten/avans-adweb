import { Component, Input } from '@angular/core';
import { faEuroSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
	selector: 'category-create',
	templateUrl: './create.component.html'
})
export class CreateComponent {
	constructor(private categoryService: CategoryService, private alertService: AlertService) {}

	@Input() ledgerId: string;
	name: string | undefined;
	maxBudget: number | undefined;
	endDate: string | undefined;
	faEuroSign = faEuroSign;
	faCheckCircle = faCheckCircle;

	onFormSubmit(): void {
		if (!this.name) this.alertService.error('Voer alstublieft een naam in.');
		else if (!this.maxBudget) this.alertService.error('Voer alstublieft een maximaal budget in.');
		else if (!this.endDate) this.alertService.error('Voer alstublieft een einddatum in.');
		else if (new Date() >= new Date(this.endDate)) this.alertService.error('Voer een datum na vandaag in.');
		else {
			this.categoryService.createCategory({
				ledgerId: this.ledgerId,
				name: this.name!,
				maxBudget: this.maxBudget!,
				endDate: this.endDate!
			});

			this.name = undefined;
			this.maxBudget = undefined;
			this.endDate = undefined;
		}
	}
}
