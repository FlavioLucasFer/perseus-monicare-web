import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const { Sider } = Layout;

const SideNavBar = () => {
  const navigate = useNavigate();

  function handleItemClick(route: string) {
    navigate(route);
  }

  return (
    <Sider width={200}
      className='site-layout-background'>
      <Menu mode='inline'
        style={{ 
          height: '100%', 
          borderRight: 0 
        }}>
        <Item key='1' onClick={handleItemClick.bind(null, 'patients')}> Pacientes </Item>
      </Menu>
    </Sider>
  );
}

export default SideNavBar;
