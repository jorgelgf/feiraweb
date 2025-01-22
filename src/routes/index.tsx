import { Navigate, Route, Routes } from 'react-router'
import { Home, Login } from '../pages'
export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>)
}