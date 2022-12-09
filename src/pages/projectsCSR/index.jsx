import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Updated_at, Language, Description, Stargazers_count } from '../../../styles/projectsStyle'
import { FaRegStar } from 'react-icons/fa'

export default function ProjectsCSR() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/GuilhermeCCunha/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          var data = await res.json()
          setItemsApi(data)
        })
        .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  const [topRepositories, setTopRepositories] = useState(null);

  useEffect(() => {
    const getTopRepositories = itemsApi.sort((first, second) => {
      if (first.stargazers_count < second.stargazers_count) return 1
      if (first.stargazers_count > second.stargazers_count) return -1
      if (first.name.toUpperCase() < second.name.toUpperCase()) return - 1
      if (first.name.toUpperCase() > second.name.toUpperCase()) return 1
    }
    );
    setTopRepositories(getTopRepositories);
  }, [itemsApi]);



  if (topRepositories === null) return null;


  return (
    <Container>
      <Content>
        <Ul>
          <strong>Client-Side Rendering</strong>
          {topRepositories.map(item => (
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