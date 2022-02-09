import Patient from "api/models/Patient";

export type PatientResponse = {
	id: number,
	email: string,
	birthDate: string | Date,
	user: {
		name: string,
		login: string,
		password: string,
		cpf: string,
		phone: string,
	},
};

function mapResponseToPatient(res: PatientResponse): Patient {
	return new Patient({
		id: res.id,
		name: res.user.name,
		login: res.user.login,
		password: res.user.password,
		email: res.email,
		birthDate: res.birthDate,
		cpf: res.user.cpf,
		phone: res.user.phone,
	});
}

export default mapResponseToPatient;
