import { useState } from 'react'
import './List.css'
import AddBtn from '../AddBtn'
import Modal from '@material-ui/core/Modal'
type Props = {
  children: any
}

const List: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = ():void => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='list'>
      <div className='listHead'>
        <h1>Contacts</h1>
        <AddBtn handleOpen={handleOpen}/>
      </div>
      {children}
    </div>
  )
}

export default List;
