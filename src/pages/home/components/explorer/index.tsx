import { api } from '@/lib/api'
import Image from 'next/image'

import { Binoculars, MagnifyingGlass, Star } from 'phosphor-react'
import { KeyboardEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Author,
  BookContainer,
  Box,
  CardsContainer,
  CategoriesContainer,
  Container,
  Content,
  Header,
  InputContainer,
  StarContainer,
} from './styles'

interface CategoriesOnBooks {
  book_id: string
}

interface Category {
  id: string
  name: string
  books: CategoriesOnBooks[]
}

interface Rating {
  id: string
  rate: number
}

interface Books {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  ratings: Rating[]
}

export function Explorer() {
  const [categories, setCategories] = useState<Category[]>([])
  const [books, setBooks] = useState<Books[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Books[]>([])
  const { register, watch } = useForm()

  useEffect(() => {
    async function getBooks() {
      const res = await api.get('books')

      setBooks(res.data)
      setSelectedCategory(res.data)
    }

    getBooks()
  }, [])

  useEffect(() => {
    async function getCategory() {
      const res = await api.get('/category')

      setCategories(res.data)
    }

    getCategory()
  }, [])

  function handleTagCategory(id: string) {
    const category = categories.find((category) => category.id === id)
    const bookIds = category?.books.map((book) => book.book_id)
    const filterBookList = books.filter((book) => bookIds?.includes(book.id))

    setSelectedCategory(filterBookList)
  }

  async function handleSearchBook() {
    const query = watch('query')

    const res = await api.get(`/books?name=${query}`)

    setSelectedCategory(res.data)
  }

  async function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      await handleSearchBook()
    }
  }

  return (
    <Container>
      <Header>
        <div>
          <Binoculars size={32} />
          <h1>Explorer</h1>
        </div>
        <InputContainer>
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            {...register('query')}
            onKeyDown={(event) => handleKeyPress(event)}
          />
          <div>
            <MagnifyingGlass size={20} onClick={handleSearchBook} />
          </div>
        </InputContainer>
      </Header>

      <CategoriesContainer>
        <button onClick={() => setSelectedCategory(books)}>Todos</button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleTagCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </CategoriesContainer>
      <CardsContainer>
        {selectedCategory.map((book) => (
          <Box key={book.id}>
            <BookContainer>
              <Image
                src={`${book.cover_url}`}
                alt=""
                width={108}
                height={152}
              />
              <Content>
                <Author>
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                </Author>

                {book.ratings.map((rating) => (
                  <StarContainer key={rating.id}>
                    {[...Array(rating.rate)].map((_, index) => (
                      <Star weight="fill" key={index} />
                    ))}
                    {rating.rate < 5 && <Star />}
                  </StarContainer>
                ))}
              </Content>
            </BookContainer>
          </Box>
        ))}
      </CardsContainer>
    </Container>
  )
}
