interface ModalProps {
  onClick: () => void
}
export const Modal = ({ onClick }: ModalProps) => {

  return (

    <div onClick={onClick} className='fixed top-0 left-0 w-full h-screen bg-[#575656d4]'>
      <div>testando</div>
    </div>
  )
}