import './Display.css'
import { CurrentContactType } from '../../App'

type Props = {
  currentContact: CurrentContactType,
  handleFirstNameChange: (event: any) => void,
  handleLastNameChange: (event: any) => void,
  firstNameValue: string,
  lastNameValue: string
}
const Display: React.FC<Props> = ({ currentContact, handleFirstNameChange, handleLastNameChange, firstNameValue, lastNameValue }) => {

  const addEmail = () => {
    currentContact.emails.push(firstNameValue)
  }
  
  return (
    <div className='mainDisplay'>
      <div className='editName'>
        {currentContact.firstName!==""?
          <div className='firstNameBox'>
            <h6>First Name</h6>
            <input className='nameInput' value={firstNameValue} onChange={handleFirstNameChange}></input>
          </div>
        :null}
        {currentContact.lastName!==""? 
          <div className='lastNameBox'>
            <h6>Last Name</h6>
            <input className='nameInput' value={lastNameValue} onChange={handleLastNameChange}></input>
          </div>
        :null}
      </div>
      <div className='contactEmails'>
        {currentContact.emails.map(email => <p>{email}</p>)}
        <button onClick={() => addEmail()} />
      </div>

    </div>
  )
}

export default Display;