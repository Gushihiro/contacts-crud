import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './List.css'
import AddBtn from '../AddBtn'
import Modal from '@material-ui/core/Modal'
type Props = {
  children: any
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const List: React.FC<Props> = ({ children }) => {

  const [open, setOpen] = useState(false);

  const handleOpen = ():void => {
    setOpen(true);
  };

  const handleClose = ():void => {
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
