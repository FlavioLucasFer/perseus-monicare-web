import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import Login from 'screens/Login';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom') as any, 
	useNavigate: () => mockedUseNavigate,
}));

describe('Login Screen', () => {
	it('Should render properly', () => {
		const wrapper = shallow(
			<Login/>
		);
		expect(wrapper.debug()).toMatchSnapshot();

	}); 

});