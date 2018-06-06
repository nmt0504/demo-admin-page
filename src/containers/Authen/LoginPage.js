import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../_actions/users.action';

import './login.css';

const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const self = this;
    // const { dispatch } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.setState({submitted: true});
        // dispatch(userActions.login(values));
        this.props.login(values)
          .then(data => {
	          message.success('Welcome ' + data.user.username);
	          self.props.history.replace('/');
          })
          .catch(error => {
            message.error(error.msg);
          })
      }
    });
  };

  render() {
    const { loggingIn } = this.props;
    const userNameInput = this.props.form.getFieldDecorator('username', {
      rules: [
        { required: true, message: 'This field is required' },
	      { min: 4, message: 'This field must be at least 4 characters' },
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
        { min: 4, message: 'This field must be at least 4 characters' },
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
        loading={loggingIn}
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
              {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
              {submitButton}
              </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
	  loggingIn
  };
}

function mapDispatchToProps(dispatch) {
	return {
		login: bindActionCreators(userActions.login, dispatch)
	}
}

const WrappedLoginPageWithAnt = Form.create()(LoginPage);

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(WrappedLoginPageWithAnt);

export default connectedLoginPage;
