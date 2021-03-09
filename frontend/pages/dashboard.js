import Router from 'next/router';
import cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';

const Dashboard = () => {
  const token = cookie.get('token');
  const [dataError, setDataError] = useState('');
  const [username, setUserName] = useState('');
  const [userid, setUserId] = useState('');

  function get_user_data(auth_token) {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me/`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      })
      .then((response) => {
        setDataError('');
        let user_data = JSON.parse(JSON.stringify(response.data));
        setUserName(user_data.username);
        setUserId(user_data.id);
      })
      .catch((error) => {
        setDataError('Server error');
        //TODO send 'error' to loggin server
      });
  }

  useEffect(() => {
    if (token) {
      get_user_data(token);
    } else {
      Router.push('/login');
    }
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Login: {username}</p>
      <p>Id: {userid}</p>
      {dataError && <Alert color="danger">{dataError}</Alert>}
    </>
  );
};

export default Dashboard;
