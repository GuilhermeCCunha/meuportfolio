import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Updated_at, Language, Description, Stargazers_count, Badges } from '../../../styles/projectsStyle'
import { FaRegStar } from 'react-icons/fa'
import React, { useEffect, useState } from "react";


export async function getServerSideProps() { // SSR
  const itemsApi = await fetch('https://api.github.com/users/GuilhermeCCunha/repos').then(res => res.json());
  return {
    props: { itemsApi }
  }

} // Para acessar a página de projetos com os repositórios renderizados da forma padrão, substitua /projects por /projectsCSR na barra de endereço

export default function Projects(props) {

  const [topRepositories, setTopRepositories] = useState(null);

  useEffect(() => {
    const getTopRepositories = props.itemsApi.sort((first, second) => {
      if (first.stargazers_count < second.stargazers_count) return 1
      if (first.stargazers_count > second.stargazers_count) return -1
      if (first.name.toUpperCase() < second.name.toUpperCase()) return - 1
      if (first.name.toUpperCase() > second.name.toUpperCase()) return 1
    }
    );
    setTopRepositories(getTopRepositories);
  }, [props.itemsApi]);

  if (topRepositories === null) return null;

  return (
    <Container>
      <Content>
        <Ul>
          {topRepositories.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>

              {item.description !== null &&
                <Description>Descrição:   {item.description} </Description>
              }
              <Url>URL: <a href={item.html_url} target='_blank' rel="noreferrer" >{item.html_url}</a></Url>
              {item.topics.length > 0 && 
              <Badges>{item.topics.map((topic) => (
										<li key={topic}>{topic}</li>
									))}</Badges> }
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
