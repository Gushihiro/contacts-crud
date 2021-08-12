import { useState } from 'react'
import './AddContactModal.css'
import { CurrentContactType } from '../../App'
import { addContact } from '../../utils/API'
import AddCircleIcon from '@material-ui/icons/AddCircle'

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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    addContact(newContact).then(res => {
      console.log(res)
      handleClose(true)
      window.location.reload();
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
          <h1 className='modal-title'>Add Contact</h1>
        </div>
        <form onSubmit={handleFormSubmit} className='addContactForm'>
          <div className="modal-body">
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              className="modalInput"
              value={newContact.firstName}
              onChange={(e) => setNewContact({...newContact, firstName: e.target.value})}
              required
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              className="modalInput"
              value={newContact.lastName}
              onChange={(e) => setNewContact({...newContact, lastName: e.target.value})}
              required
            />
            <p>Email</p>
            <input
              type="text"
              name="email"
              className="modalInput"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            {newContact.emails.map((email, emailIdx) => <p key={emailIdx}>{email}</p>)}
            <button 
              type='button' 
              className='btn addEmlBtn' 
              onClick={() => pushEmail()}
            >
              <AddCircleIcon fontSize='medium'/>
              Add Email
            </button>
          </div>
          <div className="modal-footer">
            <button 
              type="submit"
              className="btn mainAddBtn"
              >Add Contact</button>
            <button 
              className='btn closeBtn'
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