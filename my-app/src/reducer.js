export const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNTRY_1':
      return {
        ...state,
        country1: action.payload,
      }
    case 'COUNTRY_2':
      return { ...state, country2: action.payload }
    default:
      return state
  }
}
