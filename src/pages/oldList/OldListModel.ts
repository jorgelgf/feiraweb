import { useNavigate } from 'react-router'
export const OldListModel = () => {
  const navigation = useNavigate()
  const handleClickGoHome = () => navigation('/Home')
  return { handleClickGoHome }
}