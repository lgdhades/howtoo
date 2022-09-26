import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { Post } from '../components/Post/Post'
import posts from '../data/posts.json'
import { CarsSlider } from '../components/CarsSlider/CarsSlider'
import { CateogriesSlider } from '../components/CategoriesSlider/CateogriesSlider'
import { SingleSelectDropdown } from '../components/SingleSelectDropDown/SingleSelectDropdown'
import cars from '../data/cars.json'
import { Sidebar } from '../components/Sidebar/Sidebar'

/*---> Component <---*/
export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Head>
        <title>HowToo</title>
        <meta name="description" content="HowToo Auto" />
        <link rel="icon" href="/HowTooIcon.ico" />
      </Head>
      <PageWrapper>
        <CarsSlider searchValue={searchValue} setSearchValue={setSearchValue} />
        <SingleSelectDropdown
          placeholder={'Quick Search'}
          options={cars}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <CateogriesSliderTitle>SELECT A CATEGORY</CateogriesSliderTitle>
        <CateogriesSlider />
        <MainContentWrapper>
          <Sidebar />
          <PostsWrapper>
            {posts.map(post => (
              <Post
                key={post.id}
                imageURL={post.imageURL}
                title={post.title}
                avatarURL={post.avatarURL}
                author={post.author}
                views={post.views}
                date={post.date}
                percentage={post.percentage}
              />
            ))}
          </PostsWrapper>
        </MainContentWrapper>
      </PageWrapper>
    </>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  /* border: 1px solid red; */
  /* padding: 50px 300px; */
`

const MainContentWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0px 200px;

  @media (max-width: 1640px) {
    padding: 0px 100px;
  }

  @media (max-width: 1450px) {
    padding: 0px 50px;
  }

   @media (max-width: 1350px) {
    padding: 0px 20px;
  }

  @media (max-width: 1285px) {
    padding: 0px 10px;
  }

`

const PostsWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 825px

`

const CateogriesSliderTitle = styled.div`
  /* border: 1px solid green; */
  padding: 25px 0px;
  text-align: center;
  font-weight: 400;
  font-size: 50px;
  line-height: 91.5%;
  color: #444444;
`