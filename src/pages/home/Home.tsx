import { Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { constants } from './constants'
import { HomeModel } from './Home.model'
export const Home = () => {
  const { handleClickNavigationNewRegister, handleClickNavigationOldList } = HomeModel();
  return (
    <Layout >
      <main className='flex flex-1 flex-col justify-center items-center'>
        <div className='flex flex-col border-white gap-2'>
          <Button
            onClick={handleClickNavigationNewRegister}
            className='bg-green-600 hover:bg-green-500 font-bold'>{constants.textButtonNewRegister}</Button>
          <Button
            onClick={handleClickNavigationOldList}
            className='font-bold bg-slate-200 hover:bg-zinc-100 text-zinc-800 hover:text-zinc-700'>{constants.textButtonOldRegister}</Button>
        </div>
      </main>
    </Layout>
  )
}