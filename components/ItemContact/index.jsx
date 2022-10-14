import React from 'react'
import { Item, Icon, Text } from './style'

export default function ItemContact({ IconFa, LinkContact }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
      <a href={LinkContact} target='_blank' rel="noreferrer" >{LinkContact}</a>
      </Text>
    </Item>
  )
}