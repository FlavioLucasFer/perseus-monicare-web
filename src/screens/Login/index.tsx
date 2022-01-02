import './index.css';
import React from 'react';
import { Image, Form, Input, Button } from 'antd';

const UserLogin = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className='container-login'>
            <Image 
                preview={false}
                
                src={require('../../images/logo_monicare.png')} />

            <div className='user-login'>
                <Form
                    name='userLogin'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout='vertical'
                >
                    <Form.Item
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
                    </Form.Item>

                    <Form.Item
                        label='Senha:'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Digite sua senha'
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
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
                    </Form.Item>

                </Form>

                <a href=''>Esqueci minha senha</a>
            </div>


        </div>
    );
}

export default UserLogin;