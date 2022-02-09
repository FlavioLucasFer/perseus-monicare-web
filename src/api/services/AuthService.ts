import HttpRequestService from "api/services/HttpRequestService";

import responseToPatient, { PatientResponse } from "api/utils/responseToPatient";

import Patient from "api/models/Patient";

export type AuthResponse = {
	accessToken: string,
	tokenType: 'bearer',
	expiresIn: number,
};

class AuthService {
	public static async login(login: string, password: string): Promise<AuthResponse> {
		let res: AuthResponse;
		const body = {
			login,
			password,
		};

		try {
			res = await HttpRequestService.post('/auth/login', body) as AuthResponse;
		} catch (err) {
			throw err;
		}

		HttpRequestService.authenticationToken = res.accessToken;

		return res;
	}

	public static async logout(): Promise<void> {
		try {
			await HttpRequestService.post('/auth/logout');
		} catch (err) {
			throw err;
		}

		HttpRequestService.authenticationToken = '';
	}

	public static async me(): Promise<Patient> {
		let res: any;

		try {
			res = await HttpRequestService.post('/auth/me');
		} catch (err) {
			throw err;
		}

		return responseToPatient(res as PatientResponse);
	}

	public static async refreshToken(): Promise<AuthResponse> {
		let res: AuthResponse;

		try {
			res = await HttpRequestService.post('/auth/refresh') as AuthResponse;
		} catch (err) {
			throw err;
		}

		HttpRequestService.authenticationToken = res.accessToken;

		return res;
	}
};

export default AuthService;
