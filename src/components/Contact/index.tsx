import { UserDataType } from '../../App'
import './Contact.css'

type Props = {
  user: UserDataType
}
const Contact: React.FC<Props> = ({ user }) => (
  <div className='userContact' key={user.id}>
    {user.firstName} {user.lastName}
  </div>
)

export default Contact;