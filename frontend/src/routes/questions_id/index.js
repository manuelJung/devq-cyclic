import './index.scss'
import { useParams } from 'react-router-dom'

export default function Question () {
  const params = useParams()
  return (
    <h1>Question [{params.id}]</h1>
  )
}