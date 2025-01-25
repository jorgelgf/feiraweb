import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useLogin = () => {

  const isModalActive = useSelector((state: RootState) => state.modalForgotPassword.isModalActive);

  return { isModalActive }
}