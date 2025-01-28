import { lazy, Suspense } from 'react'
import { Layout } from '../../components'
import { LoginCard } from './Login.Card'
import { useModalValidationForgotPassword } from '@/hooks/use-ModalValidationForgotPassword'

import { constants } from './Login.constants'
import { Modal } from '@/components/modal/Modal'

const ModalForgot = lazy(async () => import('@/components/modal/ModalForgotPassword'))

export const Login = () => {

  const { isModalActive } = useModalValidationForgotPassword()

  return (
    <Layout>
      <Suspense>
        {isModalActive && (
          <Modal>
            <ModalForgot />
          </Modal>)
        }
        <article
          className={constants.articleClassName}>
          <LoginCard />
        </article>
      </Suspense>
    </Layout >
  )
}


