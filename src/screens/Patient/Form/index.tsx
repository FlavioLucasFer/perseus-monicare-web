import 'screens/Login/index.css';
import React from 'react';

import { Form, Input, Button, Row, Col, DatePicker, Typography, message } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';

import { Patient, PatientAttributesT, PatientRepository } from 'api';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const PatientForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();  

  const patientRepository = new PatientRepository();

  const onFinish = async (values: PatientAttributesT) => {
    try {
      patientRepository.save(new Patient(values));

    } catch (error) {
      console.log('Erro: ', error);
    }

    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    errorInfo.errorFields.map((e: any) => {
      message.warning(e.errors[0], 4);
    });
  };

  const { Item: FormItem } = Form;
  const { Password: InputPassword } = Input;

  return (
    <>
      <Form
        name='patient'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        layout='vertical'>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <FormItem
              label='Nome:'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Informe o nome do paciente'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>
            
          <Col span={4}>
            <FormItem
              label='Data de nascimento:'
              name='birthDate'
              rules={[
                {
                  required: true,
                  message: 'Informe a data de nascimento'
                }
              ]}>
              <DatePicker format={'DD/MM/YYYY'}
                locale={locale}
                style={{ borderRadius: '10px', width: '100%' }} />
            </FormItem>
          </Col>

          <Col span={4}>
            <FormItem
              label='CPF:'
              name='cpf'
              rules={[
                {
                  required: true,
                  message: 'Informe o CPF'
                }
              ]}>
              <Input style={{ borderRadius: '10px', width: '100%' }} />
            </FormItem>
          </Col>

          {/* <Col offset={2}>
            <div style={{
              height: '230px',
              width: '230px',
              borderRadius: '50%',
              boxShadow: 'rgba(0, 0, 0, 0.30) 2.4px 2.4px 3.2px',
            }}>
            </div>
          </Col> */}
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <FormItem
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  message: 'Informe o e-mail',
                },
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              label='Telefone:'
              name='phone'
              rules={[
                {
                  required: true,
                  message: 'Informe o telefone'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <FormItem
              label='Login:'
              name='login'
              rules={[
                {
                  required: true,
                  message: 'Informe o login'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>
          
          <Col span={8}>
          <FormItem
            label='Senha:'
            name='password'
            rules={[
              {
                required: true,
                message: 'Informe a senha'
              }
            ]}>
            <InputPassword style={{ borderRadius: '10px' }} />
          </FormItem>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col>
            <Title level={5}>
                Cuidadores:
            </Title>

            <Button
              type='primary'
              shape='circle'
              icon={<PlusOutlined />}>
                
            </Button>
          </Col>
        </Row>
          
        <FormItem style={{ position: 'fixed', right: 50, bottom: 30, textAlign: 'right' }}>
          <Button
            type='primary'
            htmlType='submit'>
            Confirmar
          </Button>
        </FormItem>
      
      </Form>
    
    </>
  );
}

export default PatientForm;