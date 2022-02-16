import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import Measurements from 'screens/Measurements';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom') as any, 
	useNavigate: () => mockedUseNavigate,
}));

describe('Measurements Screen', () => {
	it('Should render properly', () => {
		const wrapper = shallow(
			<Measurements />
		);
		expect(wrapper.debug()).toMatchSnapshot();

	}); 

});