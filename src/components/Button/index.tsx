import { darken, lighten, transparentize } from 'polished'
import React, { ReactNode } from 'react'
import { ChevronDown } from 'react-feather'
import { Text } from 'rebass'
import { ButtonProps, Button as RebassButton } from 'rebass/styled-components'
import styled from 'styled-components'

import border8pxRadius from '../../assets/images/border-8px-radius.png'
import { ReactComponent as CarrotIcon } from '../../assets/svg/carrot.svg'
import { RowBetween } from '../Row'
import arrowIcon from './../../assets/svg/double-angle.svg'

interface BaseProps {
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}

const Base = styled(RebassButton)<BaseProps>`
  padding: ${({ padding }) => (padding ? padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '12px')};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.white};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.purple5};
    color: ${({ theme }) => transparentize(0.28, theme.purpleBase)};
    cursor: not-allowed;
    box-shadow: none;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.7' : '1')};
  }
`

export const ButtonSecondary = styled(Base)`
  border: 1px solid ${({ theme }) => theme.text5};
  color: ${({ theme }) => theme.text5};
  background-color: transparent;
  font-size: 16px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`

export const ButtonGrey = styled(Base)`
  border: 1px solid #2a2f42;
  background-color: ${props => props.theme.bg1And2};
  color: ${({ theme }) => theme.text5};
  font-size: 16px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`

export const ButtonInvisbile = styled.button`
  border: none;
  outline: none;
  background: transparent;
`

export const ButtonDark = styled(Base)`
  border: 1px solid #252237;
  background-color: ${({ theme }) => theme.bg6};
  color: ${({ theme }) => theme.text5};
  font-size: 16px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`

export const ButtonDark1 = styled(Base)`
  background-color: ${({ theme }) => theme.dark1};
  color: ${({ theme }) => theme.white};
  padding: 8.5px 26px;
  width: fit-content;
  transition: background-color 0.3s ease;
  border: 1px solid ${({ theme }) => theme.dark1};
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.dark2)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.dark2)};
  }
`
export const ButtonPurple = styled(Base)`
  background: linear-gradient(90deg, #2e17f2 -24.77%, #fb52a1 186.93%);
  color: ${({ theme }) => theme.white};
  padding: 8.5px 26px;
  width: fit-content;
  transition: background-color 0.3s ease;
  border: 1px solid ${({ theme }) => theme.dark1};
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.dark2)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.dark2)};
  }
`
export const ButtonDark2 = styled(Base)`
  background-color: ${({ theme }) => theme.dark2};
  color: ${({ theme }) => theme.white};
  transition: background-color 0.3s ease;
  border: 1px solid ${({ theme }) => theme.bg3};
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.dark2)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.dark2)};
  }
`

export const ButtonOutlined = styled(Base)`
  border: 8px solid;
  border-image: url(${border8pxRadius}) 8;
  background-color: ${({ theme }) => transparentize(0.28, theme.purpleBase)};
  color: ${({ theme }) => theme.text1};
  text-transform: initial;
  cursor: pointer;
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: ${({ theme }) => theme.primary1};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: ${({ theme }) => theme.bg1};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${darken(0.05, '#edeef2')};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonConfirmedStyle = styled(Base)`
  background-color: ${({ theme }) => lighten(0.5, theme.green1)};
  color: ${({ theme }) => theme.green1};
  border: 1px solid ${({ theme }) => theme.green1};

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonErrorStyle = styled(Base)`
  background-color: ${({ theme }) => theme.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.red1};
  }
`

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}

export function ButtonWithLink({ link, text, style }: { link: string; text: string; style?: any }) {
  return (
    <ButtonSecondary
      id="join-pool-button"
      as="a"
      style={{ padding: '10px 20px', borderRadius: '8px', ...style }}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Text fontWeight={700} fontSize={12} lineHeight="15px">
        {text} <span style={{ fontSize: '11px', marginLeft: '4px' }}>↗</span>
      </Text>
    </ButtonSecondary>
  )
}

const CarrotIconWithMargin = styled(CarrotIcon)`
  margin-right: 4px;
`

const CarrotButtonText = styled(Text)`
  white-space: nowrap;
  color: #fff;
`

const StyledButtonSecondary = styled(ButtonSecondary)`
  padding: 0px 6px;
  border-radius: 4px;
  background-color: #ea6433;
  width: auto;
  height: 22px;
  border: none;
`

export function CarrotButton({ link, text, style }: { link: string; text: string; style?: any }) {
  return (
    <StyledButtonSecondary as="a" style={style} href={link} rel="noopener noreferrer" target="_blank">
      <CarrotIconWithMargin />
      <CarrotButtonText fontWeight={700} fontSize={10} lineHeight="9px" letterSpacing="4%">
        {text}
      </CarrotButtonText>
    </StyledButtonSecondary>
  )
}

export function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  )
}

const StyledChevronDown = styled(ChevronDown)`
  color: ${({ theme }) => theme.text5};
`

export function ButtonDropdownLight({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <StyledChevronDown size={20} />
      </RowBetween>
    </ButtonOutlined>
  )
}

export const AddSWPRToMetamaskButton = styled(Base)<{ active?: boolean }>`
  max-width: 190px;
  padding: 6px 8px;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${props => (props.active ? props.theme.white : '#c0baf7')};
  background: ${props =>
    props.active ? `linear-gradient(90deg, ${props.theme.primary1} -24.77%, #fb52a1 186.93%)` : props.theme.bg8};
  border-radius: 8px;
  border: none;
  box-shadow: ${props => (props.active ? '0px 0px 42px rgba(165, 58, 196, 0.35)' : 'none')};
`

const MoreButton = styled.button`
  position: relative;
  display: block;
  padding: 6px 8px;
  margin: 12px auto 0;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text5};
  background: none;
  border: none;
  cursor: pointer;

  img {
    margin-left: 10px;
  }
`

interface ShowMoreButtonProps {
  children: ReactNode
  onClick: () => void
  isOpen: boolean
}

export const ShowMoreButton = ({ children, onClick, isOpen }: ShowMoreButtonProps) => (
  <MoreButton onClick={onClick}>
    {children}
    <img src={arrowIcon} alt="arrow down" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
  </MoreButton>
)
