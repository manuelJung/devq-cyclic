import * as React from 'react'
import './index.scss'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'

export default function Overview () {
  const [questions, setQuestions] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(async res => {
        const result = await res.json()

        if(res.status === 200) {
          setQuestions(result)
        }
      })
  }, [])

  return (
    <Layout>
      <div className='Overview'>
        <h1>Fragen</h1>

        <div className='questions'>
          {questions.map(question => (
            <Link className='question' key={question._id} to={'/questions/'+question._id}>
              <h4>{question.title}</h4>
              <p>{question.user.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}