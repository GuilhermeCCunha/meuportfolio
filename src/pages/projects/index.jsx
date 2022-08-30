import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Updated_at, Language } from '../../../styles/projectsStyle'

export default function Projects() {
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

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: <a href= {item.html_url}>{item.html_url}</a></Url>
            <Created_at>Data de Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
            <Updated_at>Atualizado em: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.updated_at))}
            </Updated_at>
            <Language>Linguagem: {item.language}</Language>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}