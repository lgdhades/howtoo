import styled from 'styled-components'
import { Facebook, Twitter, Instagram } from 'lucide-react'

/*---> Component <---*/
export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLinks>
          <Link>HowToo inc. 2022</Link>
          <Link>Privacy & Legal</Link>
          <Link>Contact Us</Link>
        </FooterLinks>
      </FooterWrapper>
      <SocialIcons>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </SocialIcons>
    </>
  )
}

/*---> Styles <---*/
const FooterWrapper = styled.div`
  height: 70px;
  background: #000000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: -50px;
`

const FooterLinks = styled.div`
  display: flex;
`

const Link = styled.div`
  color: white;
  margin-right: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
`

const SocialIcons = styled.div`
  float: right;
`

const FacebookIcon = styled(Facebook)`
  color: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-right: 30px;
`

const TwitterIcon = styled(Twitter)`
  color: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-right: 30px;
`

const InstagramIcon = styled(Instagram)`
  color: white;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-right: 20px;
`
