import React, {Component} from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'
import {PanGestureHandler, State} from 'react-native-gesture-handler'
import * as slider from '@emcasa/ui/lib/components/Slider'

import View from '../View'

const Marker = styled(View)`
  ${slider.marker};
`

Marker.displayName = 'SliderMarker'

Marker.defaultProps = slider.marker.defaultProps

export default class MarkerContainer extends Component {
  static defaultProps = {
    zIndex: 100,
    hitSlop: 15,
    useNativeDriver: true
  }

  state = {
    layout: undefined,
    sliderState: State.UNDETERMINED
  }

  position = new Animated.Value(0)

  constructor(props) {
    super(props)
    this.offset = props.position
    this.position.setOffset(this.offset)
    this.position.addListener(({value}) => {
      const {onSlide, bounds} = this.props
      const {sliderState} = this.state
      if (onSlide && sliderState === State.ACTIVE) {
        onSlide(bounds.clamp(value - this.offset))
      }
    })
    this.onGestureEvent = Animated.event(
      [{nativeEvent: {translationX: this.position}}],
      {useNativeDriver: props.useNativeDriver}
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.sliderState !== State.ACTIVE &&
      (nextProps.position !== this.props.position ||
        nextProps.bounds !== this.props.bounds ||
        nextState.layout !== this.state.layout)
    )
  }

  get hitSlop() {
    const {hitSlop, bounds, position} = this.props
    if (isNaN(hitSlop)) return hitSlop
    return {
      top: hitSlop,
      bottom: hitSlop,
      left: Math.min((position - bounds.left) / 2, hitSlop),
      right: Math.min(bounds.right / 2, hitSlop)
    }
  }

  get handlerStyle() {
    const {bounds, zIndex, index} = this.props
    const {layout} = this.state
    if (!layout) return {opacity: 0}
    return {
      position: 'absolute',
      zIndex: index + zIndex,
      opacity: 1,
      transform: [
        {
          translateX: Animated.add(
            Animated.diffClamp(this.position, bounds.left, bounds.right),
            new Animated.Value(-layout.width / 2)
          )
        }
      ]
    }
  }

  onLayout = ({
    nativeEvent: {
      layout: {width, height}
    }
  }) => this.setState({layout: {width, height}})

  onHandlerStateChange = ({nativeEvent}) => {
    const {bounds, onSlide, onSlideStop} = this.props
    if (nativeEvent.oldState === State.ACTIVE) {
      this.offset += nativeEvent.translationX
      const value = bounds.clamp(this.offset)
      if (onSlide) onSlide(value)
      this.setState({sliderState: nativeEvent.state}, () => {
        this.position.setOffset(value)
        this.position.setValue(0)
        if (onSlideStop) onSlideStop()
      })
    } else if (nativeEvent.state !== this.state.sliderState) {
      this.setState({sliderState: nativeEvent.state})
    }
  }

  render() {
    const {children, bounds, useNativeDriver, ...props} = this.props
    delete props.hitSlop
    return (
      <PanGestureHandler
        enabled={bounds.right - bounds.left !== 0}
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}
      >
        <Animated.View
          collapsable={false}
          useNativeDriver={useNativeDriver}
          hitSlop={this.hitSlop}
          onLayout={this.onLayout}
          style={this.handlerStyle}
        >
          {children || <Marker />}
        </Animated.View>
      </PanGestureHandler>
    )
  }
}
