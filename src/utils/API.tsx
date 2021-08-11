import axios from 'axios'
import { UserDataType, CurrentContactType, NewContactType } from '../App'

const getContacts = async (): Promise<UserDataType> => {
  try {
    return await axios.get('https://avb-contacts-api.herokuapp.com/contacts/paginated');
  } 
  catch(err) {
    throw(err)
  }
}

const addContact = async (newContact: NewContactType): Promise<UserDataType> => {
  const headers = {
    "accept": "application/json",
    "Content-Type": "application/json"
  }
  try {
    return await axios.post('https://avb-contacts-api.herokuapp.com/contacts', newContact, {
      headers: headers
    })
  } catch (err) {
    throw err
  }
}

const editContact = async(id: number, editContactData: CurrentContactType): Promise<UserDataType[]> => {
  try {
    return await axios.put(`https://avb-contacts-api.herokuapp.com/contacts/${id}`, editContactData)
  } catch(err) {
    throw(err)
  }
}

export { getContacts, editContact, addContact }