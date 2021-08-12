import './Display.css'
import { CurrentContactType } from '../../App'
import { editContact, deleteContact } from '../../utils/API'
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
      window.location.reload();
    }).catch(err => {
      console.log(err)
    })
    setCurrentContact({
      id: 0,
      firstName: "",
      lastName: "",
      emails: [""]
    })
  }

  const handleDeleteContact = () => {
    deleteContact(currentContact.id).then(res => {
      console.log(res)
      setCurrentContact({
        id: 0,
        firstName: "",
        lastName: "",
        emails: [""]
      })
      window.location.reload();
    }).catch(err => {
      console.log(err)
    })
  }

  if (currentContact.firstName === ""){
    return (
      <div className='mainDisplay' key={currentContact.id}>
        <h1>CRUD - And Company</h1>
        <div className='startDisplay'>
          <div>
            <h1>Don't Be Shy, Click a Contact</h1>
            <p>All Names are Subject to Review</p>
          </div>
        </div>
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
                <p key={emailIdx} className='emailGrp'>
                  {email}
                  <button 
                  type='button'
                  className='btn'
                  key={emailIdx}
                  onClick={(e:any) => {
                      contactEmail.shift()
                      setCurrentContact({...currentContact, emails: contactEmail})
                    }
                  }
                  >
                    <CancelIcon fontSize='small'/>
                  </button>
                  </p>
                  :<p key={emailIdx}>{email}</p>
              )}
            <button type='button' className='btn addEmlBtn' onClick={() => handleOpenEmail(true)}><AddCircleIcon fontSize='medium'/>add email</button>
          </div>
          <div className='btnGroup'>
          <button type='button' className='btn deleteBtn' key={currentContact.id} onClick={handleDeleteContact}>Delete</button>
          <div className='cancelSave'>
          <button 
            type='button' 
            className='btn cancelBtn' 
            onClick={() => {setCurrentContact({
              id: 0,
              firstName: "",
              lastName: "",
              emails: [""]
            })}}
            >
            Cancel</button>
          <button type='submit' className='btn saveBtn'>Save</button>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Display;