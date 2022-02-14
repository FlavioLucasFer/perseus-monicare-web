import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";
import {
	Layout,
	Breadcrumb
} from 'antd';

import NavBar from 'components/NavBar';
import SideNavBar from 'components/SideNavBar';

import Login from 'screens/Login';
import Measurements from 'screens/Measurements';
import PatientList from 'screens/PatientList';

const { Content } = Layout;

function App() {
	return (
		<div>
			<Routes>
				<Route path='/'>
					<Route index element={<Login />} />
				</Route>
			</Routes>

			<Layout style={{ height: '100%' }}>
				<NavBar />
				<Layout style={{ height: '100%' }}>
					<SideNavBar />

					<Layout 
						style={{ 
						padding: '0 24px 24px', 
						height: '100%' 
					}}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>

						<Content
							className='site-layout-background'
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}>
							<Routes>
								<Route path='patients'>
									<Route index element={<PatientList />} />
									<Route path='measurements' element={<Measurements />} />
								</Route>
							</Routes>
						</Content>
						
					</Layout>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
