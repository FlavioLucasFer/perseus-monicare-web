import HttpRequestService from "api/services/HttpRequestService";

import responseToPatient, { PatientResponse } from "api/utils/responseToPatient";

import Patient from "api/models/Patient";

export type AuthResponseT = {
	accessToken: string,
	tokenType: 'bearer',
	expiresIn: number,
};

class AuthService {
	public static async login(login: string, password: string): Promise<AuthResponseT> {
		let res: AuthResponseT;
		const body = {
			login,
			password,
		};

		try {
			res = await HttpRequestService.post('/auth/login', body) as AuthResponseT;
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

	public static async refreshToken(): Promise<AuthResponseT> {
		let res: AuthResponseT;

		try {
			res = await HttpRequestService.post('/auth/refresh') as AuthResponseT;
		} catch (err) {
			throw err;
		}

		HttpRequestService.authenticationToken = res.accessToken;

		return res;
	}
};

export default AuthService;
