import React from 'react';
import { Layout } from 'antd';

import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'api';

const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () =>  {
		try {
			await AuthService.logout();
      navigate('/');

		} catch (error) {
			console.log('Erro: ', error);
		}
	};

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
            cursor='pointer'
            onClick={handleLogout}
          />
        </div>
      </div>
    </Header>
  );
}

export default NavBar;
