import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Contact from './components/Contact'
import List from './components/List'
import Display from './components/Display'
import ContactModal from './components/AddContactModal'
import EmailModal from './components/AddEmailModal'

import { getContacts }  from './utils/API'

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

export type NewContactType = {
  firstName: string,
  lastName: string,
  emails: Array<string>
}

function App() {
  const [userData, setUserData] = useState([] as UserDataType[])
  const [currentContact, setCurrentContact] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emails: [""]
  })

  const sortedData = (a:any, b:any) => {
    const userA = a.firstName.toUpperCase();
    const userB = b.firstName.toUpperCase();
    
    if (userA > userB) {
      return 1;
    } else if (userA < userB) {
      return -1;
    }
    return 0
  }
  const sortedDataArray = userData.sort(sortedData);
  
  const handleCurrentContact = (clickedContact: CurrentContactType) => {
    for (const user of userData) {
      if (clickedContact.id === user.id) {
        setCurrentContact(user)
      }
    }
    return {...clickedContact}
  }

  const [openContact, setOpenContact] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)

  useEffect(() => {
    getContacts().then(res => {
      setUserData(res.data.contacts)
    })
  }, []) 



  return (
    <Router>
    <div className="App">
      <Route exact path='/'>
      <Wrapper>
        <List
          handleOpen={() => setOpenContact(true)}
        >
          
          {sortedDataArray.map((user: UserDataType, userIdx) => {
            return (
            <Contact
              key={userIdx}
              user={user}
              handleCurrentContact={handleCurrentContact}
            />
            )})}
        </List>
        <Display
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          handleOpenEmail={() => setOpenEmail(true)}
        > 
        </Display>
        <ContactModal
          currentContact={currentContact}
          handleClose={() => setOpenContact(false)}
          openContact={openContact}
        />
        <EmailModal 
          setOpenEmail={setOpenEmail}
          openEmail={openEmail}
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
        />
      </Wrapper>
      </Route>
    </div>
    </Router>
  );
}

export default App;
