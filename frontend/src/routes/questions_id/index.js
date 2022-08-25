import * as React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout'

export default function Question () {
  const params = useParams()
  const [question, setQuestion] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3001/questions/' + params.id, {
      method: 'GET',
      credentials: 'include'
    })
    .then(async res => {
      const result = await res.json()

      if(res.status === 200) {
        setQuestion(result)
      }
    })
  }, [params.id])

  if(!question) {
    return (
      <Layout>
        <h2>fetching...</h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='QuestionId'>
        <div className='title'>
          <h1>{question.title}</h1>
          <div className='name'>{question.user.name}</div>
        </div>
        <p className='description'>{question.description}</p>
      </div>
    </Layout>
  )
}