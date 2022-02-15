import 'screens/Login/index.css';
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';

import Logo from 'components/Logo';
import { useNavigate } from 'react-router-dom';

import { AuthService } from 'api';

const Login = () => {
	const navigate = useNavigate();

	const [message, setMessage] = useState('');

	const onFinish = async (values: any) =>  {
		const {
			username,
			password,
		} = values;

		try {
			await AuthService.login(username, password);
			navigate('/patients');
		} catch (error) {
			console.log('Erro: ', error);
			setMessage('Credenciais inválidas! Tente novamente!');
		}
		
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const { Item: FormItem } = Form;
	const { Password: InputPassword } = Input;

	return (
		<div className='container-login'>
			<Logo className='logo' />

			<div className='user-login'>
				<Form
					name='userLogin'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					layout='vertical'
				>
					<FormItem
						label='Nome de Usuário:'
						name='username'
						rules={[
							{
								required: true,
								message: 'Digite seu nome de usuário'
							}
						]}
					>
						<Input />
					</FormItem>

					<FormItem
						label='Senha:'
						name='password'
						rules={[
							{
								required: true,
								message: 'Digite sua senha'
							}
						]}
					>
						<InputPassword />
					</FormItem>

					<FormItem>
						<Button
							type='primary'
							htmlType='submit'
							block
							style={{
								background: '#FC9A9A',
								borderColor: '#FF1616',
								fontSize: 18,
								color: 'black',
								height: 'auto',
							}}
						>
							Entrar
						</Button>
					</FormItem>

				</Form>

				<p style={{color: 'red', textAlign: 'center'}} >{message}</p>

				<a className='password-recovery-link' href=''>Esqueci minha senha</a>
			</div>


		</div>
	);
}

export default Login;