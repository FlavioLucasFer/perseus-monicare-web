import React, { useEffect, useState } from 'react';
import { Timeline, Tooltip, Typography } from 'antd';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import { 
  Patient, 
  PatientMeasurement, 
  PatientRepository 
} from 'api';

const { Item } = Timeline;
const { Title } = Typography;


const Measurements = () => {
  const [patient, setPatient] = useState<Patient>(new Patient());
  const [measurements, setMeasurements] = useState<PatientMeasurement[]>([]);

  const patientRepository = new PatientRepository();
  
  const { patientId } = useParams();

  useEffect(() => {
    async function searchMeasurements() {
      const patient = await patientRepository.findById(Number(patientId));
      const measurements = await patientRepository.getMeasurements(Number(patientId));
      
      setPatient(patient);
      setMeasurements(measurements);
    }

    searchMeasurements();
  }, []);
  
  const renderTimeLineItem = (e: PatientMeasurement) => {    
    const {
      id,
      value,
      measuredAt,
      status,
      measurementType,
    } = e;
    
    let color = '#33f587';
    let dotTooltip = 'Tudo bem!';

    switch (status) {
      case 'bad':
        color = '#f53933';
        dotTooltip = 'Perigoso!'
        break;

      case 'caution':
        color = '#ffcc00';
        dotTooltip = 'Cuidado!'
        break;
    }

    return (
      <Item 
        key={id}
        label={<span className="fs-7"><b>{measurementType?.name}</b></span>}
        className="mt-2 mb-2"
        dot={
          <Tooltip title={dotTooltip}>
            <div style={{
              height: '15px',
              width: '15px',
              backgroundColor: 'transparent',
              border: `3px solid ${color}`,
              borderRadius: '50%',
             }} />
          </Tooltip>
        }>
        <span className={`fs-5 ${status === 'bad' && 'fw-bold'}`}
          style={{ color: status === 'bad' ? color : '#000' }}> 
          {value} 
        </span>
        <br />
        <small> <b> Medido em: </b> {moment(measuredAt).format('DD/MM/YYYY')} </small>
      </Item>
    );
  }

  const renderTimeLine = () => {
    return (
      <Timeline mode='left'
        reverse
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '100%',
        }}>
        {measurements.map(renderTimeLineItem)}
      </Timeline>
    );
  }

  return (
    <div className='container' style={{ height: '100%' }}>
      <div className='row col-sm-12' style={{ height: '100%' }}>
        <Title 
          className='text-center mb-2'
          level={2}>
          {patient?.name}
        </Title>

        <div className='col-sm-6' style={{ height: '85%' }}>
          {renderTimeLine()}
        </div>
      </div>
    </div>
  );
}

export default Measurements;
