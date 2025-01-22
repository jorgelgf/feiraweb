import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card'

describe("Tests the component Card", () => {
  it("\nShould render Card components with one div and text")

  render(<Card><div>Items</div></Card>)
  expect(screen.getByText('Items')).toBeInTheDocument();

})