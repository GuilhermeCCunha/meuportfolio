import React from 'react'
import { Container, Content } from '../../../styles/contactStyle'
import { FaLinkedin, /*FaFacebook, FaInstagram,*/ FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/guilherme-cunha-8b707423a/" 
        />
        
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="guilhermecdacunha@gmail.com" 
        />
      </Content>
    </Container>
  )
}