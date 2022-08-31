import { Container, Title, Content, Infos, Intro, Img, Nextlogo } from '../../../styles/aboutStyle'

export default function About() {
  return (
    <Container>
      <Content>
        <Infos>
          <Title>Sobre o site</Title>
          <br />
          <Intro> Este site é uma Single-page application e foi criado usando o framework Next.js, a seção Projetos são os repositórios que estão no meu GitHub,
            eles são obtidos dinamicamente consumindo dados da API do GitHub. O site também é responsivo
            sendo compatível com a maioria dos dispositivos móveis.
          </Intro>
          <Nextlogo>
            <Img src="/images/nextjslogo.png" alt="logo" />
          </Nextlogo>
        </Infos>
      </Content>
    </Container>


  )
}