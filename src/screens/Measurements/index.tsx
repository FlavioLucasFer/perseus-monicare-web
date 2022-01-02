import './index.css';

import { useEffect, useState } from 'react';
import { Timeline, Tooltip, Typography } from 'antd';

const { Item } = Timeline;
const { Title } = Typography;

function Measurements() {
  const [patient, setPatient] = useState({
    name: 'José da Silva Souza Sauro Dellavedova',
    measurements: [
    {
      id: 1,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'bad',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    }, 
    {
      id: 2,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'caution',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 3,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'good',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 4,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'bad',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 5,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'caution',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 6,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'good',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 7,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'bad',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 8,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'caution',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    },
    {
      id: 9,
      value: '35.4',
      measuredAt: '01/01/2022',
      status: 'good',
      measurementType: {
        name: 'Temperatura Corporal'
      },
    }
    ]
  });

  function renderTimeLineItem(e: any) {
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
      <Item className="mt-2 mb-2"
        key={id}
        label={<span className="fs-7"><b>{measurementType.name}</b></span>}
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
        <small> <b> Medido em: </b> {measuredAt} </small>
      </Item>
    );
  }

  function renderTimeLine() {
    return (
      <Timeline mode='left'
        reverse
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '100%',
        }}>
        {patient.measurements.map(renderTimeLineItem)}
      </Timeline>
    );
  }

  return (
    <div className='container' style={{ height: '100%' }}>
      <div className='row col-sm-12' style={{ height: '100%' }}>
        <Title className='text-center mb-2'
          level={2}>
          {patient.name}
        </Title>

        <div className='col-sm-4' style={{ height: '85%' }}>
          {renderTimeLine()}
        </div>
      </div>
    </div>
  );
}

export default Measurements;
