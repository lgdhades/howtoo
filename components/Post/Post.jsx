import styled from 'styled-components'
import { ThumbsUp } from 'lucide-react'

/*---> Component <---*/
export const Post = ({
  imageURL,
  title,
  avatarURL,
  author,
  views,
  date,
  percentage,
}) => {
  return (
    <PostWrapper>
      <PostImage imageURL={imageURL} />
      <PostTitle>{title}</PostTitle>
      <PostFooter>
        <LeftFooter>
          <Avatar avatarURL={avatarURL} />
          <PostInfo>
            <Author>{author}</Author>
            <Views>
              {views} Views - {date}
            </Views>
          </PostInfo>
        </LeftFooter>
        <RightFooter>
          <ThumbsUp size={14} color='#444444' />
          <Percentage>{percentage}</Percentage>
        </RightFooter>
      </PostFooter>
    </PostWrapper>
  )
}

/*---> Styles <---*/
const PostWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 300px;
  height: 240px;
  margin: 17px 11px;
`

const PostImage = styled.div`
  /* border: 1px solid red; */
  background: url(${(props) => props.imageURL});
  background-position: center;
  height: 150px;
`

const PostTitle = styled.div`
  /* border: 1px solid black; */
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #444444;
  padding: 0px 10px;
`

const PostFooter = styled.div`
  /* border: 1px solid yellow; */
  height: 50px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`

const RightFooter = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`

const LeftFooter = styled.div`
  /* border: 1px solid black; */
  display: flex;
`

const Avatar = styled.div`
  /* border: 1px solid red; */
  background: url(${(props) => props.avatarURL});
  background-position: center;
  background-repeat: no-repeat;
  width: 42px;
  height: 41px;
  margin-right: 10px;
`

const PostInfo = styled.div`
  /* border: 1px solid red; */
`

const Author = styled.div`
  /* border: 1px solid green; */
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #444444;
`

const Views = styled.div`
  /* border: 1px solid green; */
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: #444444;
`

const Percentage = styled.div`
  /* border: 1px solid green; */
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #444444;
  margin-left: 5px;
`
