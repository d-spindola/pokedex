import { Pokemon } from '!types/api'
import { createContext, FC, PropsWithChildren, useRef, useState } from 'react'

interface DataContextProps<T> {
  query: string
  data: T[]
  onQueryChange: (query: string) => void
}

export const DataContext = createContext<DataContextProps<Pokemon>>({
  query: '',
  data: [],
  onQueryChange: () => {},
})

interface Props {
  data: Pokemon[]
}

export const DataContextProvider: FC<PropsWithChildren<Props>> = ({
  data,
  children,
}) => {
  const [query, setQuery] = useState('')

  const onQueryChange = (newQuery: string): Pokemon[] => {
    setQuery(newQuery)

    return data.filter((p) =>
      p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
  }

  const loadFilteredData = (pokemonData: Pokemon[]) => {
    if (!query) {
      return pokemonData
    }

    return data.filter((p) =>
      p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    )
  }

  return (
    <DataContext.Provider
      value={{
        query,
        data: loadFilteredData(data),
        onQueryChange,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
