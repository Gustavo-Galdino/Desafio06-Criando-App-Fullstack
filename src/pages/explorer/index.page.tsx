import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import { Binoculars, MagnifyingGlass, Star } from 'phosphor-react'
import { KeyboardEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Author,
  BookContainer,
  Box,
  CardsContainer,
  CategoriesContainer,
  Content,
  Header,
  InputContainer,
  Main,
  StarContainer,
} from './styles'
import { BookDetails } from '@/components/bookDetails'
import { Nav } from '@/components/nav'
import { Container } from '../home/styles'
import axios from 'axios'
import { api } from '@/lib/api'
import { GetServerSideProps } from 'next'

interface CategoriesOnBooks {
  book_id: string
  categoryId: string
}

interface Rating {
  id: string
  rate: number
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

interface ExplorerProps {
  books: Books[]
  categories: Category[]
}

export default function Explorer({ books, categories }: ExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<Books[]>(books)
  const { register, watch } = useForm()

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

  function handleCaptureCategory(id: string) {
    const selectedBook = selectedCategory.find((book) => book.id === id)
    const selectedCategories = selectedBook?.categories?.map((category) => {
      const foundCategory = categories.find(
        (cate) => cate.id === category.categoryId,
      )
      return foundCategory ? foundCategory.name : ''
    })

    return selectedCategories?.join(',')
  }

  return (
    <Container>
      <Nav />

      <Main>
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
            <Dialog.Root key={book.id}>
              <Dialog.Trigger asChild>
                <Box>
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
                      <StarContainer>
                        {[...Array(5)].map((_, index) => {
                          const totalRatings = book.ratings.reduce(
                            (acc, rating) => acc + rating.rate,
                            0,
                          )
                          const averageRating = Math.round(
                            totalRatings / book.ratings.length,
                          )
                          const weight =
                            index < averageRating ? 'fill' : undefined
                          return <Star key={index} weight={weight} />
                        })}
                      </StarContainer>
                    </Content>
                  </BookContainer>
                </Box>
              </Dialog.Trigger>

              <BookDetails
                author={book.author}
                image={book.cover_url}
                name={book.name}
                totalPages={book.total_pages!}
                category={handleCaptureCategory(book.id)}
                bookId={book.id}
                rate={book.ratings.map((rating) => (
                  <StarContainer key={rating.id}>
                    {[...Array(rating.rate)].map((_, index) => (
                      <Star weight="fill" key={index} />
                    ))}
                    {rating.rate < 5 && <Star />}
                  </StarContainer>
                ))}
              />
            </Dialog.Root>
          ))}
        </CardsContainer>
      </Main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const booksResponse = await axios.get('http://localhost:3000/api/books')
  const categoriesResponse = await axios.get(
    'http://localhost:3000/api/category',
  )

  return {
    props: {
      books: booksResponse.data,
      categories: categoriesResponse.data,
    },
  }
}
