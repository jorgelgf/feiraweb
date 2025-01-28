import { RouterApp } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google';


export const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_ID}>

        <div className='font-Montserrat'>
          <RouterApp />
        </div>
      </GoogleOAuthProvider>
    </Provider>
  )
}