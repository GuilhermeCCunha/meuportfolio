import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Updated_at, Language, Description, Stargazers_count } from '../../../styles/projectsStyle'
import { FaRegStar } from 'react-icons/fa'

export async function getServerSideProps () { // SSR
  const itemsApi = await fetch('https://api.github.com/users/GuilhermeCCunha/repos').then(res => res.json());
   return {
     props: { itemsApi }
   }

} // Para acessar a página de projetos com os repositórios renderizados da forma padrão, substitua /projects por /projectsCSR na barra de endereço

export default function Projects(props) {
 
  return (
    <Container>
      <Content>
        <Ul>
          {props.itemsApi.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>

              {item.description !== null &&
                <Description>Descrição:   {item.description} </Description>
              }
              <Url>URL: <a href={item.html_url} target='_blank' rel="noreferrer" >{item.html_url}</a></Url>
              <Created_at>Data de Criação: {Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
              </Created_at>
              <Updated_at>Atualizado em: {Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.updated_at))}
              </Updated_at>
              {item.language !== null &&
                <Language>Linguagem: {item.language}</Language>
              }
              {item.stargazers_count > 0 &&
                <Stargazers_count>  <FaRegStar /> {item.stargazers_count}</Stargazers_count>
              }
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  )
}
