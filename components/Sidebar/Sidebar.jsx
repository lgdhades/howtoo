import { useState } from 'react'
import styled from 'styled-components'
import sidebarCategories from '../../data/sidebarCategories.json'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

/*---> Component <---*/
export const Sidebar = () => {
  const [allCateogries, setAllCategories] = useState(sidebarCategories)
  const [expandedCategories, setExpandedCategories] = useState([])
  const [checkedCategories, setCheckedCategories] = useState([])

  const handleSearch = (event) => {
    const matchedCategories = allCateogries.filter((category) =>
      category.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    if (event.target.value) {
      setAllCategories(matchedCategories)
    } else {
      setAllCategories(sidebarCategories)
    }
  }

  return (
    <SidebarWrapper>
      <SearchBoxWrapper>
        <Search color='#343741' />
        <SearchBox
          placeholder='Search'
          onChange={(event) => handleSearch(event)}
        />
      </SearchBoxWrapper>
      <SideCategories>
        {allCateogries.map((category) => (
          <div key={category.id}>
            <CategoryWrapper>
              <Checkbox
                onClick={() =>
                  checkedCategories.includes(category.name)
                    ? setCheckedCategories(
                        checkedCategories.filter(
                          (item) => item !== category.name
                        )
                      )
                    : setCheckedCategories([
                        ...checkedCategories,
                        category.name,
                      ])
                }
                checked={checkedCategories.includes(category.name)}
              />
              <Category>{category.name}</Category>
              {expandedCategories.includes(category.name) ? (
                <ArrowUp
                  onClick={() =>
                    setExpandedCategories(
                      expandedCategories.filter(
                        (item) => item !== category.name
                      )
                    )
                  }
                />
              ) : (
                <ArrowDown
                  onClick={() =>
                    setExpandedCategories([
                      ...expandedCategories,
                      category.name,
                    ])
                  }
                />
              )}
            </CategoryWrapper>
            {expandedCategories.includes(category.name) && (
              <SubCategoriesWrapper>
                {category.submenu.map((subCategory, index) => (
                  <SubCategoryWrapper>
                    <Checkbox
                      onClick={() =>
                        checkedCategories.includes(subCategory)
                          ? setCheckedCategories(
                              checkedCategories.filter(
                                (item) => item !== subCategory
                              )
                            )
                          : setCheckedCategories([
                              ...checkedCategories,
                              subCategory,
                            ])
                      }
                      checked={checkedCategories.includes(subCategory)}
                    />
                    <SubCategory key={index}>{subCategory}</SubCategory>
                  </SubCategoryWrapper>
                ))}
              </SubCategoriesWrapper>
            )}
          </div>
        ))}
      </SideCategories>
    </SidebarWrapper>
  )
}

/*---> Styles <---*/
const SidebarWrapper = styled.div`
  /* border: 1px solid yellow; */
  min-width: 280px;
  padding: 20px 0px;
`

const SearchBoxWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #afafaf;
  padding: 0px 10px;
`

const SearchBox = styled.input`
  /* border: 1px solid blue; */
  width: 100%;
  height: 40px;
  background: white;
  border: none;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  padding: 10px 10px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #7e7e7e;
`

const SideCategories = styled.div`
  /* border: 1px solid black; */
  padding: 0px 20px;
`

const CategoryWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const Checkbox = styled.div`
  border: 1px solid ${(props) => (props.checked ? '#FF0000' : '#444444')};
  width: 17px;
  height: 17px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  background: ${(props) => (props.checked ? '#FF0000' : 'initial')};
`

const Category = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-right: 10px;
`

const ArrowUp = styled(ChevronUp)`
  width: 20px;
  color: #ff0000;
  cursor: pointer;
`

const ArrowDown = styled(ChevronDown)`
  width: 20px;
  color: #ff0000;
  cursor: pointer;
`

const SubCategoriesWrapper = styled.div`
  /* border: 1px solid red; */
  padding-left: 22px;
`
const SubCategoryWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`

const SubCategory = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  display: flex;
  flex-direction: column;
`
