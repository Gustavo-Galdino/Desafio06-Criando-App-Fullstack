import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '@/lib/api'

interface Rating {
  id: string
  rate: number
  book_id: string
  description: string
}

interface CategoriesOnBooks {
  book_id: string
  categoryId: string
}

interface Category {
  id: string
  name: string
  books: CategoriesOnBooks[]
}

interface Books {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages?: number
  ratings: Rating[]
  categories?: CategoriesOnBooks[]
}

interface User {
  id: string
  name: string
  image: string
  ratings: Rating[]
  book: Books[]
}

interface ApiContextType {
  books: Books[]
  popularBooks: Books[]
  users: User[]
  categories: Category[]
}

const ApiContext = createContext({} as ApiContextType)

interface ApiProviderProps {
  children: ReactNode
}

export function getMostPopularBooks(books: Books[]) {
  const mostRatting = books.sort((a, b) => {
    const ratingA =
      a.ratings.reduce((sum, rating) => sum + rating.rate, 0) / a.ratings.length
    const ratingB =
      b.ratings.reduce((sum, rating) => sum + rating.rate, 0) / b.ratings.length
    return ratingB - ratingA
  })

  return mostRatting.slice(0, 4)
}

export function ApiProvider({ children }: ApiProviderProps) {
  const [books, setBooks] = useState<Books[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [popularBooks, setPopularBooks] = useState<Books[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function getBooks() {
      const res = await api.get('books')

      setBooks(res.data)
    }

    getBooks()
  }, [])

  useEffect(() => {
    async function getUsers() {
      const res = await api.get('users')

      setUsers(res.data)
    }

    getUsers()
  }, [])

  useEffect(() => {
    async function getCategory() {
      const res = await api.get('/category')

      setCategories(res.data)
    }

    getCategory()
  }, [])

  useEffect(() => {
    setPopularBooks(getMostPopularBooks(books))
  }, [books])

  return (
    <ApiContext.Provider value={{ books, users, popularBooks, categories }}>
      {children}
    </ApiContext.Provider>
  )
}

export function useApi() {
  const context = useContext(ApiContext)

  return context
}
