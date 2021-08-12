import { useState } from 'react'
import './AddEmailModal.css'
import { CurrentContactType } from '../../App'

type Props = {
  openEmail: boolean,
  setOpenEmail: (boolean:boolean) => void,
  currentContact: CurrentContactType,
  setCurrentContact: (object: CurrentContactType) => void
}

const AddEmailModal:React.FC<Props> = ({ setOpenEmail, openEmail, currentContact, setCurrentContact }) => {
  const [newEmail, setNewEmail] = useState("")
  const pushEmail = () => {
    let pushEmailArray:Array<string> = currentContact.emails;
    pushEmailArray.push(newEmail)
    setCurrentContact({...currentContact, emails: pushEmailArray})
  }
  const handleClose = ():void => {
    setOpenEmail(false)
    setNewEmail("")
  }
  if(!openEmail) {
    return null
  }

  return (
    <div className='emailModal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='modal-title'>Add Email</h1>
        </div>
        <div className="modal-body">
          {currentContact.emails.map((email, emailIdx) => (
            <p key={emailIdx}>{email}</p>
          ))}

          <input type="text" className='modalInput' value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
        </div>
        <div className="modal-footer eml-modal-footer">
          <button 
            className='btn mainAddBtn'
            onClick={() => pushEmail()}>Add Email</button>
          <button 
            className='btn closeBtn'
            onClick={() => handleClose()}
            >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEmailModal