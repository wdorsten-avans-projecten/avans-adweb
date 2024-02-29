/**
 * Type for the actual Transaction entity.
 */

export type Transaction = {
	id?: string;
	categoryId: string;
	sum: number;
	date: string;
};
