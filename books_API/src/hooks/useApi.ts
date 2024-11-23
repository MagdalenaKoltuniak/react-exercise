const API_URL = import.meta.env.VITE_API_URL;

export const useApi = () => {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	const call = async <R, P = {}>(url: string, method: 'GET' | 'DELETE' | 'POST' | 'PUT', payload?: P): Promise<R> => {
		const fetchConfig = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: payload ? JSON.stringify(payload) : undefined,
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

	const apiPost = async <R, P>(url: string, payload: P) => {
		return await call<R, P>(url, 'POST', payload);
	};

	const apiPut = async <R, P>(url: string, payload: P) => {
		return await call<R, P>(url, 'PUT', payload);
	};

	return { apiGet, apiPost, apiPut };
};
