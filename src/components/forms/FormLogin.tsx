import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import { constants } from './constants'

export interface FormLoginProps {
  label?: string
  type?: string
  placeholder?: string
  onChange?: () => void
  require: boolean
}

export type FormLoginTypes = {
  fields: FormLoginProps[]
}

export const FormLogin = ({ fields }: FormLoginTypes) => {
  const handleSubmitLogin = () => {
    event?.preventDefault()
    alert('ola')
  }

  return fields ?
    (
      <div>
        {fields.map((item, key) => {
          return (
            <form key={key} className='flex flex-col pt-4' onSubmit={handleSubmitLogin}>
              <div >
                <label className=' text-sm font-medium text-zinc-500'>
                  {item.label}
                </label>

                {
                  item.require ?
                    (
                      <Input
                        required
                        onChange={() => null}
                        type={item.type}
                        placeholder={item.placeholder} />) :
                    (
                      <Input
                        onChange={() => null}
                        type={item.type}
                        placeholder={item.placeholder} />
                    )
                }
              </div>
            </form>
          )
        })}
        <div>
          <text className='
                    cursor-pointer
                    w-full 
                    flex flex-1  
                    justify-end 
                    items-center
                    font-medium
                    text-zinc-500
                    pt-2 
                    text-[0.7rem]'>
            {constants.forgotPass}
          </text>
        </div>
        <div className='mt-2 w-full flex justify-end pt-1'>

          <Button className='w-full' >{constants.textButtonToEnter}</Button>
        </div>
      </div>

    ) : (null)
}
