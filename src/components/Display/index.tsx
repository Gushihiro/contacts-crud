import { useHistory } from 'react-router-dom'
import './Display.css'
import { CurrentContactType } from '../../App'
import { editContact } from '../../utils/API'
type Props = {
  currentContact: CurrentContactType,
  setCurrentContact: (obj: CurrentContactType) => void,
  handleOpenEmail: (boolean:boolean) => void
}
const Display: React.FC<Props> = ({ currentContact, setCurrentContact, handleOpenEmail }) => {
  const contactEmail = currentContact.emails
  const handleEditForm = (e: any) => {
    e.preventDefault();
    editContact(currentContact.id, currentContact).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  if (currentContact.firstName === ""){
    return (
      <div className='mainDisplay' key={currentContact.id}>
        <h1>Click on a Contact to get Started!</h1>
      </div>
    )
  } else {
    return (
      <div className='mainDisplay' key={currentContact.id}>
        <form onSubmit={handleEditForm} className='editContactForm'>
          <div className='editName'>
            <div className='firstNameBox'>
              <h6>First Name</h6>
              <input className='nameInput' value={currentContact.firstName} onChange={(e) => setCurrentContact({ ...currentContact, firstName: e.target.value})}></input>
            </div>
            <div className='lastNameBox'>
              <h6>Last Name</h6>
              <input className='nameInput' value={currentContact.lastName} onChange={(e) => setCurrentContact({ ...currentContact, lastName: e.target.value})}></input>
            </div>
          </div>
          <div className='contactEmails'>
            <h6>Emails</h6>
              {currentContact.emails.map((email, emailIdx) =>
                emailIdx===0?
                <p key={emailIdx}>
                  {email}
                  <button 
                  type='button'
                  key={emailIdx}
                  onClick={(e:any) => {
                    for (const emails of currentContact.emails) {
                      console.log(contactEmail)
                      console.log(currentContact.emails[emailIdx])
                      if (emails === contactEmail[emailIdx])
                      contactEmail.splice(emailIdx)
                      setCurrentContact({...currentContact, emails: contactEmail})
                    }
                  }}
                  >
                    x
                  </button>
                  </p>
                  :<p key={emailIdx}>{email}</p>
              )}
            <button type='button' onClick={() => handleOpenEmail(true)}>Add Email</button>
          </div>
          <div className='btnGroup'>
          <button type='button' key={currentContact.id}>Delete</button>
          <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Display;