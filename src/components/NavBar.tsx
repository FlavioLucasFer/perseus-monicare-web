import React from 'react';
import { Layout } from 'antd';

import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header style={{ backgroundColor: '#FFF' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div>
          <Logo style={{ 
            width: '120px',
            height: '41px',
          }} />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faRightFromBracket}
          />
        </div>
      </div>
    </Header>
  );
}

export default NavBar;
