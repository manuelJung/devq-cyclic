import './index.scss'
import Layout from '../../Layout'
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'

export default function Account () {
  const user = useUser()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await user.logout()
    navigate('/login')
  }

  return (
    <Layout>
      <div className='Account'>
        <div className='title'>
          <h1>Das bin Ich</h1>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </Layout>
  )
}