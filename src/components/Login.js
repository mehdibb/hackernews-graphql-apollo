import React, {useState} from 'react';
import {useHistory} from 'react-router';


function Login() {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: '',
  });

  return (
    <div>
      <h4 className="mv3">
        {formState.login ? "Login" : "Sign up"}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.name}
            onChange={(event) => {
              setFormState({
                ...formState,
                name: event.target.value,
              })
            }}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.password}
          onChange={(event) => {
            setFormState({
              ...formState,
              password: event.target.value,
            })
          }}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={() => console.log('onClick')}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={(event) => {
            setFormState({
              ...formState,
              login: !formState.login
            })
          }}
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account'}
        </button>
      </div>
    </div>
  )
}

export default Login;