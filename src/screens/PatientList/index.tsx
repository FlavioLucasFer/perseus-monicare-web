import React, { useEffect, useState } from 'react';
import PatientCard from 'components/PatientCard';
import { Patient, PatientRepository } from 'api';

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const patientRepository = new PatientRepository();
  
  useEffect(() => {

    async function searchPatients() {
      const patients = await patientRepository.all();
      
      setPatients(patients);
    }
    
    searchPatients();
  }, [])

  return (
    <div className='container' style={{ height: '100vh' }}>
      <div className='row col-sm-12'>
        {
          patients.map(patient => (
            <PatientCard 
              key={patient.id}
              patient={patient}
              caregiver={patient.caregivers[0]}
            />
          ))
        }
      </div>
    </div>
  );
}

export default PatientList;
