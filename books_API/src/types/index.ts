export type BookEntity = {
	id: string;
	year: number;
	title: string;
	description: string;
};

export type BookDto = Omit<BookEntity, 'id'>;
