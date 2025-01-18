import { RouterApp } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
export const App = () => {
  return (
    <Provider store={store}>

      <div className='font-Montserrat'>
        <RouterApp />
      </div>
    </Provider>
  )
}