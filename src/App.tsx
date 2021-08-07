import React, { useState, useEffect } from 'react';
import axios from 'axios';

//https://avb-contacts-api.herokuapp.com

export type UserDataType = {
  id: number,
  firstName: string,
  lastName: string,
}


function App() {

  const [userData, setUserData] = useState([] as UserDataType[])

  const getContacts = async (): Promise<void> => {
    const pullData = await axios.get('https://avb-contacts-api.herokuapp.com/contacts/paginated')
    const userInfo:UserDataType[] = pullData.data.contacts
    try {
      console.log(userInfo)
      await setUserData(userInfo)
    } catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    getContacts()
    
  }, []) 

  console.log(userData)
  return (
    <div className="App">
      <h1>Contacts-CRUD</h1>
      {userData.map((user: UserDataType) => (
          <h2 key={user.id}>Name: {user.firstName} {user.lastName}</h2>
        ))}
    </div>
  );
}

export default App;
