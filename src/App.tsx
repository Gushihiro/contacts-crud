import { useState, useEffect, ReactNode } from 'react'
import Wrapper from './components/Wrapper'
import Contact from './components/Contact'
import List from './components/List'
import Display from './components/Display'

import { getContacts, editEmail }  from './utils/Functions'

//Types

export type UserDataType = {
  data: any,
  id: number,
  firstName: string,
  lastName: string,
  emails: Array<string>,
}

export type CurrentContactType = {
  id: number,
  firstName: string,
  lastName: string,
  emails: Array<string>,
}

function App() {
  const [userData, setUserData] = useState([] as UserDataType[])
  const [currentContact, setCurrentContact] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emails: [""]
  })
  const [firstName, setFirstName] = useState(currentContact.firstName)
  const [lastName, setLastName] = useState(currentContact.lastName)

  const handleCurrentContact = (clickedContact: CurrentContactType) => {
    for (const user of userData) {
      if (clickedContact.id === user.id) {
        setCurrentContact(user)
        if (user.firstName !== firstName) {
          setFirstName(user.firstName)
        }
        if (user.lastName !== lastName) {
          setLastName(user.lastName)
        }
      }
    }
    console.log(currentContact)
    return {...clickedContact}
  }

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value)
  }
  console.log(firstName)
  useEffect(() => {
    getContacts().then(res => {
      setUserData(res.data.contacts)
    })
  }, []) 

  console.log(userData)
  return (
    <div className="App">
      <Wrapper>
        <List>
          {userData.map((user: UserDataType, userIdx) => (
            <Contact 
              key={userIdx} 
              user={user}
              handleCurrentContact={handleCurrentContact}
            />
            ))}
        </List>
        <Display
          currentContact={currentContact}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          firstNameValue={firstName}
          lastNameValue={lastName}
        >
        </Display>
      </Wrapper>
    </div>
  );
}

export default App;
