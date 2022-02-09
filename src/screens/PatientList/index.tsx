import React, { useEffect } from 'react';
import PatientCard from 'components/PatientCard';

const PatientList = () => {
  return (
    <div className='container'>
      <div className='row col-sm-12'>
        <PatientCard patient={{
          name: 'teste com nome bem grande',
          age: 20,
          caregiver: 'teste com nome bem grande de novo novamente outra vez',
          status: 'bad',
        }} />

        <PatientCard patient={{
          name: 'teste com nome bem grande',
          age: 1,
          caregiver: 'teste com nome bem grande de novo novamente outra vez',
          status: 'good',
        }} />

        <PatientCard patient={{
          name: 'teste com nome bem grande',
          age: 1,
          caregiver: 'teste com nome bem grande de novo novamente outra vez',
          status: 'caution',
        }} />

        <PatientCard patient={{
          name: 'teste com nome bem grande',
          age: 1,
          caregiver: 'teste com nome bem grande de novo novamente outra vez',
          status: 'good',
        }} />
      
      </div>
    </div>
  );
}

export default PatientList;
