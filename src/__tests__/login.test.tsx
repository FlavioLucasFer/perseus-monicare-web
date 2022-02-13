import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Routes } from 'react-router-dom';
import Login from 'screens/Login';

afterEach(cleanup);
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), 
	useNavigate: () => mockedUseNavigate,
}));

describe('Login Screen', () => {
	it('Should render properly', () => {
		const wrapper = shallow(<Login/>);
		expect(wrapper.debug()).toMatchSnapshot();

	}); 

	// const linkElement = screen.getByText('Esqueci minha senha');
	// expect(linkElement).toBeInTheDocument();

    
	// const {debug, getByText} = render(<Login/>)
	// expect(getByText('Entrar').tagName).toBe('BUTTON')
	// debug()
});