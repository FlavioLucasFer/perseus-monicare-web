import HttpRequestService from "api/services/HttpRequestService";

import RepositoryInterface from "api/repositories/RepositoryInterface";

import mapResponseToPatient from "api/utils/responseToPatient";

import Patient from "api/models/Patient";
import { isDate } from "lodash";
import moment from "moment";

export type NewPatientT = {
	name: string,
	login: string,
	password: string,
	email: string,
	birthDate: string | Date,
	cpf: string,
	phone: string,
};

class PatientRepository implements RepositoryInterface<Patient, NewPatientT, number> {
	private resourceRoute = '/patients';
	
	public async save(patient: Patient): Promise<Patient> {
		let res: any;

		if (patient.id) {
			const dirty = patient.dirty();

			if (dirty.birthDate) {	
				dirty.birthDate = moment(dirty.birthDate).format('YYYY-MM-DD');
			}

			try {
				res = await HttpRequestService.put(`${this.resourceRoute}/${patient.id}`, dirty);
			} catch (err) {
				throw err;
			}
		} else {
			const patientObj = patient.toObject();

			if (isDate(patientObj.birthDate))
				patientObj.birthDate = moment(patientObj.birthDate).format('YYYY-MM-DD');
			
			try {
				res = await HttpRequestService.post(this.resourceRoute, patientObj);
			} catch (err) {
				throw err;
			}
		}

		return mapResponseToPatient(res);
	}

	public async create(attributes: NewPatientT): Promise<Patient> {
		if (isDate(attributes.birthDate))
			attributes.birthDate = moment(attributes.birthDate).format('YYYY-MM-DD');

		try {
			return mapResponseToPatient(
				await HttpRequestService.post(this.resourceRoute, attributes),
			);
		} catch (err) {
			throw err;
		}
	}

	public async all(): Promise<Patient[]> {
		let res: any[];

		try {
			res = await HttpRequestService.get(this.resourceRoute);
		} catch (err) {
			throw err;
		}

		return res.map(e => mapResponseToPatient(e));
	}

	public async findById(id: number): Promise<Patient> {
		try {
			const res = await HttpRequestService.get(`${this.resourceRoute}/${id}`);

			return mapResponseToPatient(res);
		} catch (err) {
			throw err;
		}
	}
};

export default PatientRepository;
