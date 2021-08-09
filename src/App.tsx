import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import List from './components/List'
import { getContacts, editEmail }  from './utils/Functions'

//Types
export type UserDataType = {
  data: any,
  id: number,
  firstName: string,
  lastName: string,
  emails: Array<string>,
}


function App() {
  const [userData, setUserData] = useState([] as UserDataType[])

  useEffect(() => {
    getContacts().then(res => {
      setUserData(res.data.contacts)
    })
  }, []) 

  console.log(userData)
  return (
    <div className="App">
      <List>
        {userData.map((user: UserDataType) => (
          <Contact user={user} />
        ))}
      </List>
    </div>
  );
}

export default App;
