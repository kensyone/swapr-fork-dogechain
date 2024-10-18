import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { ReactComponent as EcoRouter } from '../../assets/svg/eco-router.svg'
import Row from '../Row'

const TabsColumn = styled.div`
  max-width: 457px;
  width: 100%;
`

const TabsRow = styled(Row)`
  display: inline-flex;
  width: auto;
  margin: 0 0 10px;
  padding: 2px;
  background: ${({ theme }) => theme.bg6};
  border-radius: 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text5};
  border-radius: 10px;
  border: none;
  background: none;
  cursor: pointer;

  &.active {
    color: #ffffff;
    background: ${({ theme }) => theme.bg2};
    font-size: 12px;
    line-height: 14px;
  }

  &:disabled {
    color: ${({ theme }) => theme.text6};
    cursor: not-allowed;
  }
`

const StyledEcoRouter = styled(EcoRouter)`
  margin-right: 5px;
`

export const Tabs = () => {
  const { t } = useTranslation()

  return (
    <TabsColumn>
      <TabsRow>
        <Button className="active">
          <StyledEcoRouter />
          Swap
        </Button>
        <Button disabled={true}>{t('limit')}</Button>
      </TabsRow>
    </TabsColumn>
  )
}
