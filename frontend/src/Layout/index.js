import { Link } from 'react-router-dom'
import './index.scss'
import {BiUser} from 'react-icons/bi'

export default function Layout (props) {
  return (
    <div className='Layout'>
      <header>
        <div className='logo'>DevQ</div>
        <div className='spacer' />
        <Link to='/account' className='icon-wrapper'>
          <BiUser size={30} color="black"/>
        </Link>
        <Link to='/create-question' className='question-button'>
          Erstellen
        </Link>
      </header>
      <main>{props.children}</main>
    </div>
  )
}