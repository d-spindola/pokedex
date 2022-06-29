import '@testing-library/jest-dom'
import { render, screen } from 'test-utils'
import Header from './Header'

describe('Header', () => {
  it('should render the header component with appName', () => {
    const appNameProp = 'pokedx'
    render(<Header appName={appNameProp} />)

    const appName = screen.getByText(appNameProp)

    expect(appName).toBeInTheDocument()
  })
})
