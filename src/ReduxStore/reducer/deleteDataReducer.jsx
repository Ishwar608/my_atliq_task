const initialState = {

  items: {},
  isloadding: false,
  error: {}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'START':
      return { ...state, isloadding: true }

    case 'DELETE':
      console.log(payload);
      return { ...state, items: payload, isloadding: false }

    case 'FAIL':
      return { ...state, error: payload, isloadding: false }

    default:
      return state
  }
}