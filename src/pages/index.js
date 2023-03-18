import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  const GitHubProfilePicture = false;
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Guilherme Cunha</Name>
          <Function>  Developer</Function>
          <Intro>Graduado em Sistemas de Informação pela UFF.
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src={GitHubProfilePicture ? `https://github.com/${process.env.userName}.png` : `/images/logo.png`} alt="foto de perfil" />
        </Logo>
      </Content>
    </Container>
  )
}