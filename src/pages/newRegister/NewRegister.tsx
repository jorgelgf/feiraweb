import { FormNewRegister, Layout } from '@/components'
export const NewRegister = () => {
  return (
    <Layout>
      <main className='flex flex-1 w-full flex-col'>
        <div className='flex w-full justify-center font-medium py-7'>NOVO REGISTRO</div>
        <div className='flex flex-col'>
          <FormNewRegister />
        </div>
      </main>
    </Layout>
  )
}