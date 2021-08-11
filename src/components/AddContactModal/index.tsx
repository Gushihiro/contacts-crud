import { useState } from 'react'
import './AddContactModal.css'
import { CurrentContactType } from '../../App'
import { addContact } from '../../utils/API'

type Props = {
  openContact: boolean,
  currentContact: CurrentContactType,
  handleClose: (boolean:boolean) => void,
}

const AddContactModal: React.FC<Props> = ({ handleClose, openContact }) => {

  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    emails: [""]
  })
  const [newEmail, setNewEmail] = useState("")
  const pushEmail = () => {
    let pushEmailArray = newContact.emails;
    pushEmailArray.push(newEmail)
    if(pushEmailArray[0] === "") {
      pushEmailArray.shift()
    }
    setNewContact({...newContact, emails: pushEmailArray})
  }

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    addContact(newContact).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const cancelAdd = () => {
    handleClose(false);
    setNewContact({
      firstName: "",
      lastName: "",
      emails: []
    })
    setNewEmail("")
  }
  
  if(!openContact) {
    return null
  }

  return (
    <div className='contactModal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Add Contact</h4>
        </div>
        <form onSubmit={handleFormSubmit} className='addContactForm'>
          <div className="modal-body">
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              value={newContact.firstName}
              onChange={(e) => setNewContact({...newContact, firstName: e.target.value})}
              required
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              value={newContact.lastName}
              onChange={(e) => setNewContact({...newContact, lastName: e.target.value})}
              required
            />
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            {newContact.emails.map((email, emailIdx) => <p key={emailIdx}>{email}</p>)}
            <button type='button' onClick={() => pushEmail()}>Add Email</button>
            <h1>Contact Modal Stuff Here</h1>
          </div>
          <div className="modal-footer">
            <button type="submit">Add Contact</button>
            <button 
              className='closeBtn'
              onClick={() => cancelAdd()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContactModal;