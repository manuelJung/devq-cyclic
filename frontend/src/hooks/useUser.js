import * as React from 'react'

const Context = React.createContext({
  data: null,
  login: () => null,
  register: () => null,
})

export function UserProvider (props) {
  const [user, setUser] = React.useState(null)
  
  const data = {
    data: user,

    login: async (body) => {
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
    },

    register: async (body) => {
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
    }
  }

  return (
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  )
}



export default function useUser () {
  return React.useContext(Context)
}