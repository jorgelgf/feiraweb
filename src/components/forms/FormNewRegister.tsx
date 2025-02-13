import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const FormNewRegister = () => {
  return (
    <form className='flex gap-3 max-sm:px-2 flex flex-col'>
      <div>
        <div className='flex gap-2'>
          <span>
            <label className='font-medium'>Produto</label>
            <Input required placeholder='Nome do produto' type='text' />
          </span>
          <span>
            <label className='font-medium'>Qnt.</label>
            <Input required placeholder='Insira a quantidade' type='number' />
          </span>
          <span>
            <label className='font-medium'>R$</label>
            <Input required placeholder='Insira o valor do produto' type='number' />
          </span>
        </div>
      </div>

      <Button className='bg-transparent text-zinc-700 hover:text-zinc-500 hover:bg-green-100'>ADICIONAR <Plus /></Button>
    </form>
  )
}