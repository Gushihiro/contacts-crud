import { CurrentContactType } from '../../App'
import './Contact.css'

type Props = {
  user: CurrentContactType,
  key: number,
  handleCurrentContact: (clickedContact: CurrentContactType) => void,
}

const Contact: React.FC<Props> = ({ user, handleCurrentContact}) => {

  return (
  <div 
    className='userContact'
    tabIndex={0}
    onClick={() => handleCurrentContact(user)}
  >
    {user.firstName} {user.lastName}
  </div>
)}

export default Contact;