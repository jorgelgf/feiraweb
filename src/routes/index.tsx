import { Navigate, Route, Routes } from 'react-router'
import { Login } from '../pages'
export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>)
}