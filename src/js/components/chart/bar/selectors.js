import { createSelector } from 'reselect'

const getCategories = (state) => {
  return state.bar.categories
}

export const makeCategoriesSelector = createSelector(
  getCategories,
  (value) => {
    return value
  }
)
