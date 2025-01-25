import { Layout, ModalForgotPassword } from '../../components'
import { LoginCard } from './Login.Card'
import { Modal } from '@/components/modal/Modal';
import { useLogin } from './Login.model';
export const Login = () => {
  const { isModalActive } = useLogin();
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