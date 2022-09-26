import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import styled from 'styled-components'

/*---> Component <---*/
export const SingleSelectDropdown = ({
  placeholder,
  options = [],
  searchValue,
  setSearchValue,
}) => {
  const [allOptions, setAllOptions] = useState(options)
  const [placeHolder, setPlaceHolder] = useState(placeholder)
  const [isSelectActive, setIsSelectActive] = useState(false)
  const [activeOption, setActiveOption] = useState(searchValue)

  useEffect(() => {
    const updateSelectMenu = () => {
      if (!searchValue) {
        setPlaceHolder(placeholder)
        setActiveOption('')
      }
    }
    updateSelectMenu()
  }, [searchValue])

  const handleSelectClick = () => {
    setIsSelectActive(!isSelectActive)
    setAllOptions(options)
  }

  const handleOptionClick = (item) => {
    setPlaceHolder(item.info)
    setActiveOption(item.info)
    setIsSelectActive(false)
    setSearchValue(item.info)
  }

  const handleSearch = (event) => {
    const matchedOptions = options.filter((item) =>
      item.info.toLowerCase().includes(event.target.value.toLowerCase())
    )
    if (event.target.value) {
      setAllOptions(matchedOptions)
    } else {
      setAllOptions(options)
    }
  }

  return (
    <MainWrapper>
      <FieldWrapper>
        <SelectField
          onClick={handleSelectClick}
          onKeyPress={handleSelectClick}
          role='menuitem'
          tabIndex={0}
          isSelectActive={isSelectActive}
        >
          <PlaceHolder>{placeHolder}</PlaceHolder>
          {isSelectActive ? <ArrowUp /> : <ArrowDown />}
        </SelectField>
        {isSelectActive ? (
          <SelectMenu>
            <SearchBoxWrapper>
              <SearchBox
                placeholder='Search here ...'
                onChange={(event) => handleSearch(event)}
                autoFocus
              />
            </SearchBoxWrapper>
            {allOptions.map((item, index) => (
              <Option
                key={index}
                onClick={() => handleOptionClick(item)}
                onKeyPress={() => handleOptionClick(item)}
                role='option'
                tabIndex={0}
                aria-selected={false}
                activeOption={activeOption === item.info}
              >
                {item.info}
                {activeOption === item.info ? <CheckIcon /> : null}
              </Option>
            ))}
          </SelectMenu>
        ) : null}
      </FieldWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  max-height: 40px;
`

const FieldWrapper = styled.div`
  /* border: 1px solid green; */
  width: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  max-height: 470px;
`

const PlaceHolder = styled.span`
  color: #444444;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  font-size: 18px;
`

const SelectMenu = styled.div`
  /* border: 1px solid green; */
  background: white;
  border-radius: 8px;
  padding: 14px 0px;
  margin-top: 12px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.5),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  overflow: visible; /** this contols showing menu over category title ***/
  z-index: 99;
`

const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 14px;
`

const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  background: white;
  border: 1px solid #ff0000;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 20px;
  padding: 10px 14px;
  outline: none;
  font-size: 14px;

  :focus {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f7d5d5;
    border: 1px solid #ff0000;
  }
`

const Option = styled.div`
  color: #444444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
  padding: ${(props) => (props.activeOption ? '10px 14px' : '12px 14px')};
  background: ${(props) => (props.activeOption ? '#fdecec' : 'initial')};

  :hover {
    background: #fdecec;
  }
`

const SelectField = styled.div`
  /* border: 1px solid green; */
  height: 40px;
  background: white;
  border: 1px solid #ff0000;
  box-shadow: ${(props) =>
    props.isSelectActive
      ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f7d5d5'
      : '0px 1px 2px rgba(16, 24, 40, 0.05)'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  cursor: pointer;
  user-select: none;
`

const ArrowUp = styled(ChevronUp)`
  width: 20px;
  color: #ff0000;
`

const ArrowDown = styled(ChevronDown)`
  width: 20px;
  color: #ff0000;
`

const CheckIcon = styled(Check)`
  width: 20px;
  color: #ff0000;
`
