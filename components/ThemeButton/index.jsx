import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'
import React from 'react'
import { StyledThemeButton} from './style'

export default function ThemeButton({ onClick, isDarkTheme }) {
  return (
    <StyledThemeButton alt="botão de tema" onClick={onClick}>
      {isDarkTheme ? <CgSun size={25} /> : <HiMoon size={25} />}
    </StyledThemeButton>
  );
}
