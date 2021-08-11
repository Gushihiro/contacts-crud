import './List.css'
import AddBtn from '../AddBtn'

type Props = {
  children: any,
  handleOpen: (boolean:boolean) => void
}

const List: React.FC<Props> = ({ children, handleOpen }) => {

  return (
    <div className='list'>
      <div className='listHead'>
        <h1>Contacts</h1>
        <AddBtn handleOpen={() => handleOpen(true)}/>
      </div>
      {children}
    </div>
  )
}

export default List;
