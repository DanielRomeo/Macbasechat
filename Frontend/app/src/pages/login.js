import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// import '../../css/admin/adminLogin.scss'
import axios from 'axios'
import OurAlert from '../components/utilities/alert'
import {
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
} from 'reactstrap'

const Login = () => {
  
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loginerror, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displaydata, setDisplaydata] = useState('');
  const [adminsData, setAdminsData] = useState({});
  let info = {}

  const handleusername = async (e) => {
    setUsername(e.target.value);
  }
  const handlepassword = async (e) => {
    setPassword(e.target.value);
  }

  

  /* access backend and access the staff number and password, if match then run "setLocalStorage" */

  const handleLogin = () => {
    setLoading(true)
    console.log('state username is : ' + username + ' pass is ' + password)
    const url = 'https://serve.macbase.co.za/adminlogin'

    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then(function (response) {
        setLoginError(true)
        setLoading(false)
        info = response.data
        // setAdminsData(info);
        if (info.success == 'true') {
          setLoginError(false)
          // do something
          setAdminsData(info.result)
          setLocalStorage(username,password);
        } else {
          setLoginError(true)
        }

        console.log(info)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
      })
  }

  // we set local storage when authentication is complete and ready to send the user away:
  const setLocalStorage = (username, password) => {
    localStorage.removeItem("macbasechat");
    let data = {
      id: info.result.id,
      institution_id: info.result.institution_id,
      staffnumber: username,
      password: password,
    };
    localStorage.setItem("macbasechat", JSON.stringify(data));
  };

  

  return (
    <div>
      {
        // loginerror ? (
        //   <OurAlert
        //     type='danger'
        //     message='Wrong username or password'
        //   ></OurAlert>
        // ) : (
        //   <div></div>
        // )
      }
      {loading ? (
        <div>Loading...</div>
      ) :
      adminsData.hasOwnProperty('staffnumber') ? (
        history.push('/adminDashboard')
      ) : (
        <Container class='container'>
          <Row>
            <Col md='4'>
              <Form class='form-signin'>
               
                <h1 class='h3 mb-3 font-weight-normal'> Please sign in </h1>
                <FormGroup>
                  <Label for='inputEmail' class='sr-only'>
                    username
                  </Label>
                  <input
                    placeholder='USERNAME'
                    type='text'
                    onChange={(e) => handleusername(e)}
                    value={username}
                    required
                    autofocus
                  />
                </FormGroup>

                <FormGroup>
                  <Label for='inputPassword' class='sr-only'>
                    Password
                  </Label>
                  <input
                    placeholder='PASSWORD'
                    type='password'
                    onChange={(e) => handlepassword(e)}
                    value={password}
                    required
                  />
                </FormGroup>

                <Button onClick={handleLogin} type='button'>
                  Sign in
                </Button>
              </Form>{' '}
            </Col>{' '}
          </Row>

          <Row>
            
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Login