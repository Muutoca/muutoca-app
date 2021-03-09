import { useState } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import axios from 'axios';
import {
  Alert,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/login/`,
        { username: username, password: password },
        headers,
      )
      .then((response) => {
        setLoginError('');
        const token = response.data.access;
        cookie.set('token', token, { expires: 2, sameSite: 'strict' });
        Router.push('/dashboard');
      })
      .catch((error) => {
        setLoginError('Verify your email or password');
        //TODO send 'error' to loggin server
      });
  }

  return (
    <Container className="form-login">
      <h2>Login</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Button className="btn-login" type="submit">
          Submit
        </Button>
        {loginError && <Alert color="danger">{loginError}</Alert>}
      </Form>
    </Container>
  );
};

export default Login;
