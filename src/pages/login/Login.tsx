import { Layout } from '../../components'
import { LoginCard } from './Login.Card'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, validationModal } from '../../store';
import { Modal } from '@/components/modal/Modal';
export const Login = () => {
  const dispatch = useDispatch()
  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);
  const handleClickCloseModal = () => dispatch(validationModal({ isModalActive: !isModalActive }))
  return (
    <Layout>
      {isModalActive && <Modal onClick={handleClickCloseModal} />}
      <article
        className='
        w-full flex 
        flex-col 
        justify-center 
        items-center'
      >
        <LoginCard />
      </article>
    </Layout>)
}