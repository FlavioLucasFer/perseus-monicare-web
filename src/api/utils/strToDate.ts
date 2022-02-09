function strToDate(str: string): Date {
	const [date, hours] = str.split(' ');

	const [day, mouth, year] = date.split('/');
	
	return new Date(`${year}-${mouth}-${day}${hours ? `${hours}` : ''}`);
}

export default strToDate;
