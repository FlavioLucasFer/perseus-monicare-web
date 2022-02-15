import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import PatientList from 'screens/PatientList';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom') as any, 
	useNavigate: () => mockedUseNavigate,
}));

describe('PatientList Screen', () => {
	it('Should render properly', () => {
		const wrapper = shallow(
			<PatientList />
		);
		expect(wrapper.debug()).toMatchSnapshot();
		
	}); 

});