import React from 'react'
import {MIN_PRICE, MAX_PRICE, MIN_AREA, MAX_AREA} from './constants'
import ButtonGroupFilter from './ButtonGroupFilter'
import ButtonRangeFilter from './ButtonRangeFilter'
import SliderRangeFilter from './SliderRangeFilter'
import FilterButton from './FilterButton'

const PriceFilter = ({...props}) => (
  <SliderRangeFilter formatValue={Math.round} {...props} />
)

PriceFilter.initialValue = {min: MIN_PRICE, max: MAX_PRICE}

PriceFilter.defaultProps = {
  name: 'price',
  label: 'Preço',
  title: 'Preço',
  range: [PriceFilter.initialValue.min, PriceFilter.initialValue.max]
}

const AreaFilter = ({...props}) => (
  <SliderRangeFilter formatValue={Math.round} {...props} />
)

AreaFilter.initialValue = {min: MIN_AREA, max: MAX_AREA}

AreaFilter.defaultProps = {
  name: 'area',
  label: 'Área',
  title: 'Área',
  range: [AreaFilter.initialValue.min, AreaFilter.initialValue.max]
}

const RoomsFilter = ({...props}) => (
  <ButtonRangeFilter
    formatEmpty={() => 'Sem quartos'}
    formatLast={({value}) => value + '+'}
    {...props}
  />
)

RoomsFilter.defaultProps = {
  name: 'rooms',
  label: 'Quartos',
  title: 'Quartos',
  range: [0, 5]
}

const GarageSpotsFilter = ({...props}) => (
  <ButtonRangeFilter
    formatEmpty={() => 'Sem vagas'}
    formatLast={({value}) => value + '+'}
    {...props}
  />
)

GarageSpotsFilter.defaultProps = {
  name: 'garageSpots',
  label: 'Vagas',
  title: 'Vagas de garagem',
  range: [0, 5]
}

const TypesFilter = ({buttonProps, ...props}) => (
  <ButtonGroupFilter {...props}>
    <FilterButton {...buttonProps} value="Casa">
      Casa
    </FilterButton>
    <FilterButton {...buttonProps} value="Apartamento">
      Apartamento
    </FilterButton>
    <FilterButton {...buttonProps} value="Cobertura">
      Cobertura
    </FilterButton>
  </ButtonGroupFilter>
)

TypesFilter.defaultProps = {
  name: 'types',
  label: 'Tipos de imóveis',
  title: 'Tipos de imóveis',
  buttonProps: {}
}

export {PriceFilter, AreaFilter, RoomsFilter, GarageSpotsFilter, TypesFilter}
