import { createSelector } from 'reselect'

const getCategories = (state) => {
  return state.bar.categories
}

const getBarData = (state) => {
  return state.bar
}



export const makeCategoriesSelector = createSelector(
  getCategories,
  (value) => {
    return value
  }
)

export const makeBarDataSelector = createSelector(
  getBarData,
  (value) => {
    return value
  }
)

