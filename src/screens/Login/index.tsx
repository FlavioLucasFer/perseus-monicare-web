import 'screens/Login/index.css';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { Logo } from 'components/logo';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const { Item: FormItem } = Form;
    const { Password: InputPassword } = Input;

    return(
        <div className='container-login'>
            <Logo className='logo'/>

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

                <a className='password-recovery-link' href=''>Esqueci minha senha</a>
            </div>


        </div>
    );
}

export default Login;