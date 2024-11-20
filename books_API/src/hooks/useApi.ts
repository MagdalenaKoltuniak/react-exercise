const API_URL = import.meta.env.VITE_API_URL;

export const useApi = () => {
	const call = async <R>(url: string, method: 'GET' | 'DELETE' | 'POST'): Promise<R> => {
		const fetchConfig = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const response = await fetch(`${API_URL}${url}`, fetchConfig);

			if (response.ok) {
				const data: R = await response.json();
				return data;
			} else {
				const apiError: string = await response.text();
				throw new Error(apiError);
			}
		} catch (e) {
			console.log('Error', e);
			throw new Error('wystąpił błąd');
		}
	};

	const apiGet = async <R>(url: string) => {
		return await call<R>(url, 'GET');
	};

	return { apiGet };
};
