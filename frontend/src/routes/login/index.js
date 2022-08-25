import * as React from 'react'
import './index.scss'
import Layout from '../../Layout'

export default function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showRegister, setShowRegister] = React.useState(false)
  const [name, setName] = React.useState('')


  const handleLoginClick = (e) => {
    e.preventDefault()
    alert('login-click')
  }

  const handleRegisterClick = (e) => {
    e.preventDefault()
    alert('register-click')
  }

  if(showRegister) {
    return (
      <Layout>
        <div className='Login'>
          <form className='box'  onSubmit={handleRegisterClick}>
            <h1>Register</h1>
            <hr/>
  
            <div className='input-group'>
              <div className='label'>Email</div>
              <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
  
            <div className='input-group'>
              <div className='label'>Password</div>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className='input-group'>
              <div className='label'>Name</div>
              <input type='text' value={name} placeholder='Name' onChange={e => setName(e.target.value)}/>
            </div>
  
            <div className='toggle-register' onClick={() => setShowRegister(false)}>
              Ich habe bereits einen Account
            </div>
  
            <button type='submit'>
              Abschicken
            </button>
          </form>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='Login'>
        <form className='box'  onSubmit={handleLoginClick}>
          <h1>Login</h1>
          <hr/>

          <div className='input-group'>
            <div className='label'>Email</div>
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>

          <div className='input-group'>
            <div className='label'>Password</div>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          </div>

          <div className='toggle-register' onClick={() => setShowRegister(true)}>
            Ich habe noch keinen Account
          </div>

          <button type='submit'>
            Abschicken
          </button>
        </form>
      </div>
    </Layout>
  )
}