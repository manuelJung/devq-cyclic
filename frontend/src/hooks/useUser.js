import * as React from 'react'

const Context = React.createContext({
  data: null,
  error: '',
  isFetching: false,
  login: async () => 0,
  register: async () => 0,
})

export function UserProvider (props) {
  const [user, setUser] = React.useState(null)
  const [error, setError] = React.useState('')
  const [isFetching, setIsFetching] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  

  React.useEffect(() => {
    fetch('http://localhost:3001/user', {
      method: 'GET',
      credentials: 'include'
    })
    .then(async res => {
      if(res.status === 200) {
        const result = await res.json()
        setUser(result)
      }
    })
    .finally(() => {
      setReady(true)
    })
  }, [])
  
  const data = {
    data: user,
    error: error,
    isFetching: isFetching,

    login: async (body) => {
      setError('')
      setIsFetching(true)
      const res = await fetch('http://localhost:3001/user/login', {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const result = await res.json()

      if(res.status === 200) {
        setUser(result)
      }
      else if (result.errors) {
        setError(result.errors[0].msg)
      }
      else if (result.error) {
        setError(result.error)
      }

      setIsFetching(false)

      return res.status
    },

    register: async (body) => {
      setError('')
      setIsFetching(true)
      const res = await fetch('http://localhost:3001/user/register', {
        method: "POST",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const result = await res.json()

      if(res.status === 200) {
        setUser(result)
      }
      else if (result.errors) {
        setError(result.errors[0].msg)
      }
      else if (result.error) {
        setError(result.error)
      }

      setIsFetching(false)

      return res.status
    }
  }

  return (
    <Context.Provider value={data}>
      {ready && props.children}
    </Context.Provider>
  )
}



export default function useUser () {
  return React.useContext(Context)
}