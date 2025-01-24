import { Layout, ModalForgotPassword } from '../../components'
import { LoginCard } from './Login.Card'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import { Modal } from '@/components/modal/Modal';
export const Login = () => {
  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);
  return (
    <Layout>
      {isModalActive && <Modal ><ModalForgotPassword /></Modal>}
      <article
        className='
        w-full flex 
        flex-col 
        justify-center 
        items-center'
      >
        <LoginCard />
      </article>
    </Layout >)
}