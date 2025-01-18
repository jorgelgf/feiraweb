import { App } from './App';
import { render } from '@testing-library/react'
describe('App', () => {
  it('Render App', () => {
    const { debug } = render(<App />)
    debug();
  });
});