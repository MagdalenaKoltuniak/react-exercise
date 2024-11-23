import { ChangeEvent, FormEvent } from 'react';
import { BookDto } from './types';

type BookFormProps = {
	handleSubmit: (e: FormEvent) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	isPending: boolean;
	values: BookDto;
};

export const BookForm = ({ handleSubmit, handleChange, isPending, values }: BookFormProps) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<label htmlFor='title'>Podaj tytuł książki</label>
				</div>

				<input type='text' id='title' name='title' value={values.title} onChange={handleChange} />
			</div>
			<div>
				<div>
					<label htmlFor='year'>Podaj rok książki</label>
				</div>
				<input type='number' id='year' name='year' value={values.year} onChange={handleChange} />
			</div>
			<div>
				<div>
					<label htmlFor='description'>Podaj opis książki</label>
				</div>
				<textarea name='description' id='description' value={values.description} onChange={handleChange}></textarea>
			</div>
			<button type='submit' disabled={isPending}>
				Save
			</button>
		</form>
	);
};
