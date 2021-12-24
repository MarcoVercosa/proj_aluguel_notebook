import React, { useState } from 'react';
import "./login.css"
import { Link } from "react-router-dom"

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';



function Login(): JSX.Element {


  interface Icredentials {
    user: string;
    password: string
  }
  const [credentials, setCredentials] = useState<Icredentials>({ user: "", password: "" })


  return (
    <main className='main-login' >

      <div className='div-form'>
        <form className='form-login'>
          <div className='div-login'>
            <legend className='legend-login'>Painel administrativo</legend>
            <legend className='legend-login'>Fazer login</legend>

            <div className='div-user-login'>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: -0.2 }} style={{ fontSize: "40px" }} />
                <TextField id="input-with-sx" label="Usuário" variant="standard" value={credentials.user}
                  onChange={(dados: any) => {
                    setCredentials((prevState: Icredentials) => {
                      return { ...prevState, user: dados.target.value }
                    })
                  }}
                />
              </Box>
            </div>

            <div className='div-password-login'>
              <LockIcon sx={{ color: 'action.active', mr: 1, my: 3 }} style={{ fontSize: "40px" }} />
              <TextField id="standard-basic" label="Senha" variant="standard" type="password" value={credentials.password}
                onChange={(dados: any) => {
                  setCredentials((prevState: Icredentials) => {
                    return { ...prevState, password: dados.target.value }
                  })
                }}
              />
            </div>

            <div className='div-botaoacessar-login'>
              <Link to="paineladministrativo" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large">
                  Acessar painel
                </Button>
              </Link>
            </div>
            <div className='div-botaoesqueceu-login'>

              <Button size="small">Esqueceu a senha ?</Button>

            </div>

          </div>
        </form>
      </div>

    </main>
  );
}

export default Login;
