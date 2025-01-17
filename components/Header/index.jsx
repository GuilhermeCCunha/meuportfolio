import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Guilherme Cunha
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
          <Link href="/" legacyBehavior={true}>
            <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
          </Link>
          <Link href="projects" legacyBehavior={true}>
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
          </Link>
          <Link href="contact" legacyBehavior={true}>
            <Ancora className={activeLink('contact')} onClick={showSiderbar}>Contato</Ancora>
          </Link>
          <Link href="about" legacyBehavior={true}>
            <Ancora className={activeLink('about')} onClick={showSiderbar}>Sobre</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}