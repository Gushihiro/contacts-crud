import './Display.css'
import { CurrentContactType } from '../../App'
import { editContact } from '../../utils/API'
type Props = {
  currentContact: CurrentContactType,
  setCurrentContact: (obj: CurrentContactType) => void,
  handleOpenEmail: (boolean:boolean) => void
}
const Display: React.FC<Props> = ({ currentContact, setCurrentContact, handleOpenEmail }) => {

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
            {currentContact.emails.map((email, emailIdx) => <p key={emailIdx}>{email}</p>)}
            <button onClick={() => handleOpenEmail(true)}>Add Email</button>
          </div>
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default Display;