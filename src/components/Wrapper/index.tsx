import './Wrapper.css'

type Props = {
  children: any
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper;