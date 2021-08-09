import axios from 'axios'
import { UserDataType } from '../App'

const getContacts = async (): Promise<UserDataType> => {
  try {
    return await axios.get('https://avb-contacts-api.herokuapp.com/contacts/paginated');
  } 
  catch(err) {
    throw(err)
  }
}

const editEmail = async(id: number): Promise<UserDataType[]> => {
  try {
    return await axios.put(`https://avb-contacts-api.herokuapp.com/contacts/${id}`)
  } catch(err) {
    throw(err)
  }
}

export { getContacts, editEmail }