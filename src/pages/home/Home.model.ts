import { useNavigate } from 'react-router'
export const HomeModel = () => {
  const navigation = useNavigate()
  const handleClickNavigationOldList = () => navigation('/OldList')
  const handleClickNavigationNewRegister = () => navigation('/NewRegister')
  return { handleClickNavigationOldList, handleClickNavigationNewRegister }
}