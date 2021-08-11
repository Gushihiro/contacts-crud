import { useState } from 'react'
import './AddEmailModal.css'
import { CurrentContactType } from '../../App'

type Props = {
  openEmail: boolean,
  handleClose: (boolean:boolean) => void,
  currentContact: CurrentContactType,
  setCurrentContact: (object: CurrentContactType) => void
}

const AddEmailModal:React.FC<Props> = ({ handleClose, openEmail, currentContact, setCurrentContact }) => {
  const [newEmail, setNewEmail] = useState("")
  const pushEmail = () => {
    let pushEmailArray = currentContact.emails;
    pushEmailArray.push(newEmail)
    setCurrentContact({...currentContact, emails: pushEmailArray})
  }

  if(!openEmail) {
    return null
  }

  return (
    <div className='emailModal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Add Email</h4>
        </div>
        <div className="modal-body">
          {currentContact.emails.map((email, emailIdx) => (
            <p key={emailIdx}>{email}</p>
          ))}

          <input type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
        </div>
        <div className="modal-footer">
          <button onClick={() => pushEmail()}>Add Email</button>
          <button 
            className='closeBtn'
            onClick={() => handleClose(false)}
            >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEmailModal