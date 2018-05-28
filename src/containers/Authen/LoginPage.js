import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/users.action';

import './login.css';

const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.setState({submitted: true});
        dispatch(userActions.login(values));
      }
    });
  };

  render() {
    const { isLoggingIn } = this.props;
    const userNameInput = this.props.form.getFieldDecorator('username', {
      rules: [
        { required: true, message: 'This field is required' },
      ],
    })(
      <Input
        prefix={<Icon type="user" />}
        placeholder="Username"
      />,
    );
    const passwordInput = this.props.form.getFieldDecorator('password', {
      rules: [
        { required: true, message: 'This field is required' },
      ],
    })(
      <Input
        prefix={<Icon type="lock" />}
        type="password"
        placeholder="Password"
      />,
    );
    const rememberMeInput = this.props.form.getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
    })(
      <Checkbox>Remember me</Checkbox>
    );
    const submitButton = (
      <Button
        type="primary" htmlType="submit" className="login-form-button"
        loading={isLoggingIn}
      >
        Login
      </Button>
    );
    return (
      <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle login-row">
        <div className="ant-col-8">
          <Form className="login-form" onSubmit={this.onFormSubmit}>
            <h2 className="logo">
              <span>logo</span>
            </h2>
            <FormItem>{userNameInput}</FormItem>
            <FormItem>{passwordInput}</FormItem>
            <FormItem>
              {rememberMeInput}
              <a className="login-form-forgot" href="">Forgot password</a>
              {submitButton}
              </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { isLoggingIn, loggedIn, user, errorMessage } = state.authentication;
  return {
    user,
    isLoggingIn,
    loggedIn,
    errorMessage,
  };
}

const WrappedLoginPageWithAnt = Form.create()(LoginPage);

const connectedLoginPage = connect(mapStateToProps)(WrappedLoginPageWithAnt);

export default connectedLoginPage;
