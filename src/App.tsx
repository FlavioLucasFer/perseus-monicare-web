import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";

import Login from 'screens/Login';
import Measurements from 'screens/Measurements';
import PatientList from 'screens/PatientList';

function App() {
  return (
		<Routes>
			<Route path='/'>
				<Route index element={<Login />}/>
				
				<Route path='patients'>
					<Route index element={<PatientList />}/>
					<Route path='measurements' element={<Measurements />} />
				</Route>
			</Route>
		</Routes>
  );
}

export default App;
