import { render, RenderOptions } from '@testing-library/react'
import { DataContextProvider } from 'context/DataContext'
import { FC, PropsWithChildren, ReactElement } from 'react'
import { pokemonListMock } from '__fixtures/pojos'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DataContextProvider data={pokemonListMock}>{children}</DataContextProvider>
  )
}

export const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
