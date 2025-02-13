import { Navigate, Route, Routes } from 'react-router'
import { Home, Login, NewRegister, OldList } from '../pages'
export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/oldList' element={<OldList />} />
      <Route path='/newRegister' element={<NewRegister />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )
}