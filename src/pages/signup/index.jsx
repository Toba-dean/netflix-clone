import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { FooterContainer, HeaderContainer } from "../../container";
import { Form } from "../../components";
import { FirebaseContext } from "../../context/firebaseContext";
import * as ROUTES from "../../constants/routes";
import { createUserProfile } from "../../services/firebase";

const SignUp = () => {

  const nav = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const isInValid = password === '' || email === '';
  const auth = getAuth(firebase);

  const handleSignIn = async e => {
    e.preventDefault();
    const photoURL = Math.floor(Math.random() * 5) + 1;

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      createUserProfile(user, { displayName, photoURL });
      nav(ROUTES.BROWSE)
    } catch (e) {
      setEmail('');
      setPassword('');
      setError(e.message);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {
            error && (
              <Form.Error>{error}</Form.Error>
            )
          }

          <Form.Base
            method="post"
            onSubmit={handleSignIn}
          >
            <Form.Input
              placeholder='Username'
              type='text'
              value={displayName}
              onChange={({ target }) => setDisplayName(target.value)}
            />

            <Form.Input
              placeholder='Email Address'
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Form.Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit
              type="submit"
              disabled={isInValid}
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignUp