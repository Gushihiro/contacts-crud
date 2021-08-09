
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button'

type Props = {
  handleOpen: () => void
}

const AddBtn: React.FC<Props> = ({ handleOpen }) => {

  return (
    <Button onClick={handleOpen}>
      <AddCircleIcon fontSize="large"/>
    </Button>
  )
}

export default AddBtn;
