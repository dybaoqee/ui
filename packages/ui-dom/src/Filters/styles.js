import get from 'lodash/fp/get'
import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {themeGet, color, borderColor, zIndex} from 'styled-system'
import Button from '../Button'
import Row from '../Row'
import Col from '../Col'
import Icon from '../Icon'
import Text from '../Text'
import {breakpoint} from '@emcasa/ui/lib/styles'

export const Container = styled.div`
  position: relative;
  ${zIndex};
`

Container.defaultProps = {
  zIndex: 101
}

export const FilterButton = styled(Button)`
  ${borderColor};
  ${color};
  ${({hasValue, selected, disabledStyle, theme}) => {
    let color
    let borderColor
    const opacity = disabledStyle ? '70' : ''
    if (hasValue || selected) color = borderColor = theme.colors.pink + opacity
    else if (disabledStyle) color = theme.colors.grey
    else color = theme.colors.dark
    return {color, borderColor}
  }};
`

FilterButton.defaultProps = {
  type: 'button',
  fontSize: 'small'
}

export const Panel = styled(Col).attrs({elevation: 2})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: ${themeGet('space.3')}px ${themeGet('space.4')}px;
  background-color: white;
  .panelBody {
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }
  .panelFooter {
    margin-top: ${themeGet('space.4')}px;
    justify-content: space-between;
  }
  @media screen and ${breakpoint.down('tablet')} {
    left: ${themeGet('space.4')}px;
    right: ${themeGet('space.4')}px;
    top: ${themeGet('space.4')}px;
    bottom: ${themeGet('space.4')}px;
    width: auto;
    box-shadow: none;
    padding-top: ${({buttonRect, theme}) =>
      buttonRect ? buttonRect.bounds.height + theme.space[4] * 2 : 0}px;
  }
  @media screen and ${breakpoint.up('desktop')} {
    border-radius: 4px;
    margin-top: ${themeGet('space.2')}px;
    border: 1px solid ${themeGet('colors.lightGrey')};
  }
`

Panel.defaultProps = {
  width: 400
}

export const Title = styled(Text)`
  transition: all 300ms ease-in-out;
  display: flex;
  align-items: center;
  height: 0;
  margin: 0;
  overflow: hidden;
  display: block;
  @media screen and ${breakpoint.down('tablet')} {
    height: ${themeGet('buttonHeight.1')}px;
    line-height: ${themeGet('buttonHeight.1')}px;
  }
`

const mapDimensions = (fun, {initialize = true} = {}) => ({dimensions}) =>
  fun(initialize ? dimensions.measure() : dimensions.get())

export const Form = styled(
  posed.form({
    open: {
      preTransition: (props) => props.dimensions.measure(),
      applyAtStart: {
        position: 'fixed',
        top: 0,
        left: mapDimensions(get('left')),
        width: mapDimensions(get('width')),
        y: mapDimensions(get('top'))
      },
      y: ({theme}) => theme.space[4]
    },
    closed: {
      applyAtEnd: {
        position: 'sticky',
        top: 'unset',
        left: 'unset',
        width: 'unset',
        y: 0
      },
      y: mapDimensions(get('top'), {initialize: false})
    }
  })
).attrs({
  theme: ({theme}) => theme
})`
  display: flex;
  flex-direction: row;
  position: sticky;
  height: ${themeGet('buttonHeight.1')}px;
  transform-origin: 50% 0;
  ${zIndex};
`

Form.defaultProps = {
  zIndex: 101
}

export const Body = styled(Row)`
  z-index: 1;
  position: absolute;
  ${FilterButton} {
    margin-right: ${themeGet('space.2')}px;
  }
`

const BackgroundComponent = React.forwardRef(
  ({contentRef, onDismiss, ...props}, ref) => (
    <div ref={ref} {...props}>
      <a className="closeButton" onClick={onDismiss}>
        <Icon name="times" size={22} />
      </a>
      <div ref={contentRef} className="content" />
      <a className="clickArea" onClick={onDismiss} />
    </div>
  )
)

export const Background = styled(
  posed(BackgroundComponent)({
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  })
)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  pointer-events: ${({pose}) => (pose === 'closed' ? 'none' : 'all')};

  a.clickArea {
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  a.closeButton {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: ${themeGet('space.4')}px;
  }

  @media screen and ${breakpoint.down('tablet')} {
    background: rgba(255, 255, 255, 1);

    a.clickArea {
      display: none;
    }

    a.closeButton {
      display: block;
    }
  }
`
