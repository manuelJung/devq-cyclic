import * as React from 'react'
import './index.scss'
import Layout from '../../Layout'
import useUser from '../../hooks/useUser'

export default function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showRegister, setShowRegister] = React.useState(false)
  const [name, setName] = React.useState('')
  const user = useUser()


  const handleLoginClick = async (e) => {
    e.preventDefault()
    await user.login({
      email: email,
      password: password
    })
  }

  const handleRegisterClick = async (e) => {
    e.preventDefault()
    await user.register({
      email: email,
      password: password,
      name: name,
    })
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
              {user.isFetching ? 'fetching...' : 'Abschicken'}
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
            {user.isFetching ? 'fetching...' : 'Abschicken'}
          </button>

          {user.error && (
            <div className='error'>{user.error}</div>
          )}
        </form>
      </div>
    </Layout>
  )
}