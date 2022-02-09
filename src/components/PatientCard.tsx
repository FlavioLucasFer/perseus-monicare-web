
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faThermometer, faLungs } from '@fortawesome/free-solid-svg-icons'

type Patient = {
  name: string,
  age: number,
  caregiver: string,
  status: string,
};

export type PatientCardProps = {
  patient: Patient,
};  

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {

  let colorHeader = '#0328fc80';
  let patientSituation = '';

  switch (patient.status) {
    case 'bad':
      colorHeader = '#f53933';
      patientSituation = 'Perigoso!'
      break;

    case 'caution':
      colorHeader = '#F8CF40';
      patientSituation = 'Cuidado!'
      break;
  }

  return (
    <div className='patient-card-container'>
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
                95% 
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
              37.1 
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
              90
            </span>
          </div>
        </div>
      </div>
      <div className='patient-card-photo'>
        <img src={require('images/logo_monicare.png')}
          style={{ width: '100%' }} />
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
          {`${patient.age} ano${patient.age > 1 ? 's' : ''}`}
        </span>

        <span style={{ fontSize: '10px' }}> 
          Cuidador 
        </span>

        <span className='overflow-patients-names'
          title={patient.caregiver}> 
          {patient.caregiver}
        </span>
      </div>
    </div>
  );  
}

export default PatientCard;
