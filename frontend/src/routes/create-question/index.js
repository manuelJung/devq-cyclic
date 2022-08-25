import * as React from 'react'
import './index.scss'
import Layout from '../../Layout'

export default function CreateQuestion () {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('submit')
  }

  return (
    <Layout>
      <form className='CreateQuestion' onSubmit={handleSubmit}>
        <h2>Title</h2>
        <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>

        <h2>Beschreibung</h2>
        <textarea rows={20} value={description} onChange={e => setDescription(e.target.value)}/>

        <button>Absenden</button>
      </form>
    </Layout>
  )
}