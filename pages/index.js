import Head from 'next/head'
import styled from 'styled-components'
import { Post } from '../components/Post/Post'
import posts from '../data/posts.json'

/*---> Component <---*/
export default function Home() {
  return (
    <>
      <Head>
        <title>HowToo</title>
        <meta name="description" content="HowToo Auto" />
        <link rel="icon" href="/HowTooIcon.ico" />
      </Head>
      <PageWrapper>
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
      </PageWrapper>
    </>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  /* border: 1px solid yellow; */
  padding: 50px 300px;
`

const PostsWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`