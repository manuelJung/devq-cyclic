import './index.scss'
import Layout from '../../Layout'
import useUser from '../../hooks/useUser'

export default function Account () {
  const user = useUser()

  console.log(user.data)

  return (
    <Layout>
      <h1>Account Route</h1>
    </Layout>
  )
}