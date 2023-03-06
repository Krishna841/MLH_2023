import './Home.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token');

const Home = () => {
  const [enteredUser, setUser] = useState('');
  const handleUser = (event) => {
    setUser(event.target.value);
  };
  const [enteredPass, setPass] = useState('');
  const handlePass = (event) => {
    setPass(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let userData = new FormData();
    userData.append('username', enteredUser);
    userData.append('password', enteredPass);
    userData.append('csrfmiddlewaretoken', '{{csrf_token}}');

    console.log(userData);

    axios
      .post('https://82af-49-36-224-5.ngrok.io/login/', userData)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setPass('');
    setUser('');
  };

  return (
    <div className="home">
      {/* <div className="home_empty"></div> */}
      <div className="home_title">
        <FontAwesomeIcon
          style={{
            fontSize: '1.5em',
            alignSelf: 'center',
            marginRight: '0.3em',
          }}
          icon={faWarehouse}
        />

        <div className="home_title_one">Cellar</div>
        {/* <div className="home_title_two">
          <div className="home_title_two_text">Welcome back</div>
          <div className="home_title_two_sign">!</div>
        </div> */}
      </div>

      <div className="home_login">
        <div className="home_login_text">
          <form onSubmit={submitHandler}>
            <div className="home_login_text_title">Login</div>
            <div className="home_login_text_input">
              <div className="home_login_text_input_username">
                <input
                  type="text"
                  value={enteredUser}
                  placeholder="username"
                  onChange={handleUser}
                />
              </div>
              <div className="home_login_text_input_password">
                <input
                  type="password"
                  value={enteredPass}
                  placeholder="password"
                  onChange={handlePass}
                />
              </div>
            </div>
            <div className="home_login_text_buttons">
              <div className="home_login_text_buttons_logbutton">
                <button type="submit">Login</button>
              </div>
              <div className="home_login_text_buttons_forgotpassword">
                <Link
                  to="/ForgotPassword"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  element={<ForgotPassword />}
                >
                  forgot password?
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="home_login_logo">
          <img src="https://i.imgur.com/jVIeGib.png)" alt="main logo" width={600} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Home;
