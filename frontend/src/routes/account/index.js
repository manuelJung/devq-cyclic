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

  console.log(user.data);

  return (
    <Layout>
      <div className='Account'>
        <div className='title'>
          <h1>Das bin Ich</h1>
		  <button onClick={handleLogout}>logout</button>
        </div>
		{user.data && <div className={"profileView"}>
			<div>{user.data.profileImage && <img src={user.data.profileImage} alt="Profilbild" width="128" height="128" />}</div>
			<div style={{marginLeft: 15}}>
				<p>{user.data.name}</p>
				<p>{user.data.email}</p>
			</div>
		</div>}
      </div>
    </Layout>
  )
}
