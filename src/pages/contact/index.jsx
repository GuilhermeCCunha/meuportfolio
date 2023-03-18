import React from 'react'
import { Container, Content, Email, Links } from '../../../styles/contactStyle'
import { FaLinkedin, /*FaFacebook, FaInstagram,*/ FaEnvelope, FaGithubSquare } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
      <Links>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/guilherme-cunha-8b707423a"   
        />
      </Links>

      <Links>
        <ItemContact 
          IconFa={FaGithubSquare} 
          LinkContact={`https://github.com/${process.env.userName}`}   
        />
      </Links>

      <Email>
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="guilhermecdacunha@gmail.com"  
        />
      </Email>
      </Content>
    </Container>
  )
}