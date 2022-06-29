import { Pokemon } from '!types/api'
import { useContext } from 'react'
import { DataContext } from '.'

type UseDataContext<T> = () => {
  data: T[]
  query: string
  onQueryChange: (query: string) => void
}

export const useDataContext: UseDataContext<Pokemon> = () => {
  const { data, query, onQueryChange } = useContext(DataContext)

  return {
    data,
    query,
    onQueryChange,
  }
}
