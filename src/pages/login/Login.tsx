import { Layout } from '../../components'
import { LoginCard } from './Login.Card'

export const Login = () => {
  return (
    <Layout>
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