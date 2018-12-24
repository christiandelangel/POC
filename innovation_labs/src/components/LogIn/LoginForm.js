import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import { Button, Grid, Header, Image, Message, Segment, Divider } from 'semantic-ui-react'
import './style.css';
import ButtonLogin from "./ButtonLogin";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function LoginForm(props) {
  const {
    isValid,
    isSubmitting,
  } = props;

  return (
    <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='violet' textAlign='center'>
          <Image src='https://pbs.twimg.com/profile_images/1014149524355416065/3xFLQ6PJ_400x400.jpg' />
          Log-in to your account
        </Header>
        {/* <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange}/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />

                <Button color='violet ' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form> */}
        <Form >
          <Segment stacked>
            {/* sabe como conectar directamentes sin necesidad de onChance y onBlur en los inputs */}
            <Field
              name="email"
              type="email"
              className="input"
              placeholder='E-mail'
            />
            <ErrorMessage name="email" >
              {message => <div className="error">{message}</div>}
            </ErrorMessage>

            <Field 
              name="password"
              type="password"
              className="input"
              placeholder='Password'
            />
            <ErrorMessage name="password" >
              {message => <div className="error">{message}</div>}
            </ErrorMessage>

            <Divider />

              <ButtonLogin 
                isValid = {isValid}
                isSubmitting= {isSubmitting}
              />
              
          </Segment>

        </Form>
      </Grid.Column>
    </Grid>
    </div>

  );

}

export default withFormik({
  mapPropsToValues(props) {
    return {
      email: '',
      password: '',
    };
  },

  async validate(values) {
    const errors = {};

    if (!values.password) {
      errors.password = 'Password es requerido';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    await sleep(500);

    if (Object.keys(errors).length) {
      throw errors;
    }
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
    console.log(values);
  },
})(LoginForm);