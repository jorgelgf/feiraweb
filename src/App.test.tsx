import { render } from '@testing-library/react'
import { App } from './App'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'

describe('Testing the App Component', () => {
  it('should render RouterApp and display content from store', () => {

    // Render the App with Provider and Router
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
});
