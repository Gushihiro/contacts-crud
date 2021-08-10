import React from 'react'
import { UserDataType } from '../App'

type Props = {
  children: UserDataType
}


const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Modal;