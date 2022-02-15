
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat, 
  faThermometer, 
  faLungs, 
  faUser 
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import { 
  CaregiverAttributesT,
  PatientAttributesT, 
  PatientMeasurement, 
  PatientRepository 
} from 'api';

export type PatientCardProps = {
  patient: PatientAttributesT,
  caregiver: CaregiverAttributesT,
};  

const PatientCard: React.FC<PatientCardProps> = (PatientCardProps) => {
  const {
    patient,
    caregiver
  } = PatientCardProps;

  const [heartBeats, setHeartBeats] = useState<PatientMeasurement | undefined>();
  const [bodyTemperature, setBodyTemperature] = useState<PatientMeasurement | undefined>();
  const [bloodOxygenation, setBloodOxygenation] = useState<PatientMeasurement | undefined>();

  const navigate = useNavigate();
  
  let colorHeader = '#0328fc80';
  let patientSituation = '';
  
  useEffect(() => {
    async function fetchMeasurements() {      
      const patientRepository = new PatientRepository();

      const measurements = await patientRepository.getMeasurements(Number(patient.id));

      measurements.reverse();

      const heartBeats = measurements.find(e => e.measurementType.name === 'Batimentos Cardíacos');
      const bodyTemperature = measurements.find(e => e.measurementType.name === 'Temperatura Corporal');
      const bloodOxygenation = measurements.find(e => e.measurementType.name === 'Oxigenação Sanguínea');    

      setHeartBeats(heartBeats);
      setBodyTemperature(bodyTemperature);
      setBloodOxygenation(bloodOxygenation);
    }
    
    fetchMeasurements();
  }, []);
  
  switch (heartBeats?.status || bodyTemperature?.status || bloodOxygenation?.status) {
    case 'bad':
      colorHeader = '#f53933';
      patientSituation = 'Perigoso!'
      break;

    case 'caution':
      colorHeader = '#F8CF40';
      patientSituation = 'Cuidado!'
      break;
  }

  const getPatientAge = () => {
    return moment().diff(patient?.birthDate, 'years');
  }

  const handleCardClick = () => {
    navigate(`/patients/${patient.id}/measurements`);
  }

  return (
    <div className='patient-card-container'
      onClick={handleCardClick.bind(null)}>
      <div className='patient-card-header'
        style={{ 
          backgroundColor: colorHeader,
         }}>
        <div style={{ 
          padding: '10px 10px 0'
         }}>
           <div style={{
             display: 'flex',
             justifyContent: 'space-between',
           }}>
            <div>
              <FontAwesomeIcon
                icon={faLungs}
                color='#FFF'
              />

              <span 
                className='fw-bold' 
                style={{
                  paddingLeft: '4px', 
                  color: '#FFF' 
                }}> 
                {bloodOxygenation?.value} 
              </span>
            </div>
            
            <span 
              className='fw-bold'
              style={{
                color: '#FFF'
              }}>  
              {patientSituation}
            </span>
           </div>

          <div>
            <FontAwesomeIcon
              icon={faThermometer}
              color='white'
            />

            <span 
              className='fw-bold' 
              style={{ 
                paddingLeft: '8px',
                color: '#FFF' 
              }}> 
              {bodyTemperature?.value} 
            </span>
          </div>

          <div>
            <FontAwesomeIcon 
              className='fa-beat'
              icon={faHeartbeat} 
              color='#FFF'
            />

            <span 
              className='fw-bold' 
              style={{ 
                paddingLeft: '6px',
                color: '#FFF' 
              }}> 
              {heartBeats?.value}
            </span>
          </div>
        </div>
      </div>
      <div className='patient-card-photo'>
        <FontAwesomeIcon
          icon={faUser}
          style={{ 
            height: '70%',
            width: '70%',
          }}
        />
      </div>
      
      <div className='row col'
        style={{ 
          width: '100%',
          position: 'relative',
          bottom: '45px',
          marginLeft: 0,
        }}>
        <span className='overflow-patients-names'
          title={patient.name}> 
          {patient.name}
        </span>
        
        <span> 
          {getPatientAge()} ano{getPatientAge() > 1 && 's'}
        </span>

        <span style={{ fontSize: '10px' }}> 
          Cuidador 
        </span>

        <span className='overflow-patients-names'
          title={caregiver?.name}> 
          {caregiver?.name}
        </span>
      </div>
    </div>
  );  
}

export default PatientCard;
