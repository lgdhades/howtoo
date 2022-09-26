import { useState } from 'react'
import styled from 'styled-components'
import navbarLinks from '../../data/navbarLinks.json'
import { Bell } from 'lucide-react'

/*---> Component <---*/
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Logo src='/images/logo.png' alt='logo' />
      </LogoWrapper>
      <LinksWrapper>
        {navbarLinks.map((link, index) => (
          <Link
            key={index}
            link={link}
            activeLink={activeLink}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </Link>
        ))}
        <BellIcon />
        <NotificationsNumber>4</NotificationsNumber>
        <Avatar src='/images/avatar2.png' alt='avatar' />
      </LinksWrapper>
    </NavbarWrapper>
  )
}

/*---> Styles <---*/
const NavbarWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const LogoWrapper = styled.div``

const Logo = styled.img`
  width: 140px;
  object-fit: cover;
  object-position: center;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.div`
  margin-right: 10px;
  padding: 5px 0px;
  border-bottom: ${(props) =>
    props.activeLink === props.link ? '2px solid #ff0000' : 'none'};
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #ff0000;
  }
`

const BellIcon = styled(Bell)`
  cursor: pointer;
`

const NotificationsNumber = styled.div`
  border: 1px solid red;
  border-radius: 50%;
  background: #ff0000;
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 30px;
  margin-right: 10px;
`

const Avatar = styled.img`
  /* border: 1px solid red; */
  object-fit: cover;
  object-position: center;
`
