import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';

import { Doctor, DoctorAttributesT, DoctorRepository } from 'api';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();  
  
  const doctorRepository = new DoctorRepository();

  const onFinish = async (values: DoctorAttributesT) => {
    try {
      doctorRepository.save(new Doctor(values));
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
    <div style={{ height: '100%' }}>
      <Form
        name='doctor'
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
                  message: 'Informe o nome do doutor'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              label='CPF:'
              name='cpf'
              rules={[
                {
                  required: true,
                  message: 'Informe o CPF'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              label='CRM:'
              name='crm'
              rules={[
                {
                  required: true,
                  message: 'Informe o CRM'
                }
              ]}>
              <Input style={{ borderRadius: '10px' }} />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <FormItem
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  type: 'email',
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

          <Col span={8}>
            <FormItem
              name="specialty"
              label="Especialidade"
              rules={[
                {
                  required: true,
                  message: 'Informe a especialidade',
                },
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

        <FormItem style={{ position: 'fixed', right: 50, bottom: 30, textAlign: 'right' }}>
          <Button
            type='primary'
            htmlType='submit'
            className='btn btn-success'>
            Confirmar
          </Button>
        </FormItem>

      </Form>

    </div>
  );
}

export default DoctorForm;