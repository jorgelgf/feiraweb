import { Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { OldListModel } from './OldListModel';
import { constants } from './constantes';

export const OldList = () => {
  const { handleClickGoHome } = OldListModel();
  return (
    <Layout >
      <main className='flex flex-1 flex-col justify-start'>
        <div className='py-4 font-medium text-center'>{constants.title}</div>
        <div className=' w-full max-h-64 overflow-y-auto flex flex-col gap-2 flex-1 '>
          <div className='border-b-[1px] border-zinc-400 flex justify-between px-4 mt-16 '>
            <span>{constants.data}</span>
            <span>{constants.value}</span>
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <Button onClick={handleClickGoHome}>{constants.textButtonBackPage}</Button>
        </div>
      </main>
    </Layout>)
}