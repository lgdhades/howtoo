import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import cars from '../../data/cars.json'

/*---> Component <---*/
export const CarsSlider = ({ searchValue, setSearchValue }) => {
  const [activeCar, setActiveCar] = useState(3)

  useEffect(() => {
    const updateActiveCar = () => {
      if (searchValue) {
        const searchValueIndex = cars.findIndex(
          (car) => car.info === searchValue
        )
        setActiveCar(searchValueIndex)
      }
    }
    updateActiveCar()
  }, [searchValue])

  return (
    <SliderWrapper>
      {cars.map((car, index) => (
        <>
          {index === activeCar ? (
            <CarWrapper key={car.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {activeCar > 0 && (
                  <LeftArrow
                    size={48}
                    onClick={() => {
                      setActiveCar(activeCar - 1)
                      setSearchValue('')
                    }}
                  />
                )}
                <div>
                  <BigImage src={car.imageURL} />
                  <CarInfo>{car.info}</CarInfo>
                </div>
                {activeCar !== cars.length - 1 && (
                  <RightArrow
                    size={48}
                    onClick={() => {
                      setActiveCar(activeCar + 1)
                      setSearchValue('')
                    }}
                  />
                )}
              </div>
            </CarWrapper>
          ) : index === activeCar + 1 || index === activeCar - 1 ? (
            <CarWrapper key={car.id}>
              <SmallImage src={car.imageURL} />
            </CarWrapper>
          ) : null}
        </>
      ))}
    </SliderWrapper>
  )
}

/*---> Styles <---*/
const SliderWrapper = styled.div`
  /* border: 1px solid yellow; */
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CarWrapper = styled.div`
  /* border: 1px solid black; */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const BigImage = styled.img`
  /* border: 1px solid red; */
  width: 400px;
  height: 140px;
  object-fit: cover;
  object-position: center;
`

const SmallImage = styled.img`
  /* border: 1px solid red; */
  width: 200px;
  height: 140px;
  object-fit: cover;
  object-position: center;
`

const CarInfo = styled.div`
  /* border: 1px solid red; */
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #444444;
`

const RightArrow = styled(ChevronRight)`
  /* border: 1px solid red; */
  color: #ff0000;
  cursor: pointer;
`

const LeftArrow = styled(ChevronLeft)`
  /* border: 1px solid red; */
  color: #ff0000;
  cursor: pointer;
`
