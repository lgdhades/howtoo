import { useState } from 'react'
import styled from 'styled-components'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import categories from '../../data/categories.json'

/*---> Component <---*/
export const CateogriesSlider = () => {
  const [activeCategory, setActiveCategory] = useState(5)

  return (
    <SliderWrapper>
      {categories.map((category, index) => (
        <>
          {index === activeCategory ? (
            <CategoryWrapper key={category.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {activeCategory > 0 && (
                  <LeftArrow
                    size={48}
                    onClick={() => setActiveCategory(activeCategory - 1)}
                  />
                )}
                <div>
                  <BigImage imageURL={category.imageURL} />
                </div>
                {activeCategory !== categories.length - 1 && (
                  <RightArrow
                    size={48}
                    onClick={() => setActiveCategory(activeCategory + 1)}
                  />
                )}
              </div>
            </CategoryWrapper>
          ) : index === activeCategory + 1 || index === activeCategory - 1 ? (
            <CategoryWrapper key={category.id}>
              <MediumImage imageURL={category.imageURL} />
            </CategoryWrapper>
          ) : index === activeCategory + 2 || index === activeCategory - 2 ? (
            <CategoryWrapper key={category.id}>
              <SmallImage imageURL={category.imageURL} />
            </CategoryWrapper>
          ) : null}
        </>
      ))}
    </SliderWrapper>
  )
}

/*---> Styles <---*/
const SliderWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`

const CategoryWrapper = styled.div`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 20px;
`

const BigImage = styled.div`
  width: 295px;
  height: 145px;
  background: url(${(props) => props.imageURL});
  background-position: center;
  background-size: cover;
  border-bottom: 6px solid red;
  margin: 0px 10px;
  transform: skew(-20deg);
`

const MediumImage = styled.div`
  width: 240px;
  height: 115px;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageURL});
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.arrowPlace === 'right' ? 'flex-end' : 'flex-start'};
  transform: skew(-20deg);
`

const SmallImage = styled.div`
  border: 1px solid yellow;
  width: 195px;
  height: 95px;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.imageURL});
  transform: skew(-20deg);
`

const RightArrow = styled(ChevronRight)`
  /* border: 1px solid red; */
  color: #ff0000;
  cursor: pointer;
`

const LeftArrow = styled(ChevronLeft)`
  color: #ff0000;
  cursor: pointer;
`
