import { constants } from '../../config';

const { reduxConst } = constants;
const {
  APP_DATA_LOADING,
  APP_DATA_SUCCESS,
  APP_DATA_ERROR
} = reduxConst;

const INITIAL_DATA = {
  loading: false,
  error: false,
  data: {}
};

const appDataReducer = (state = INITIAL_DATA, action = {}) => {
  switch (action.type) {
    case APP_DATA_LOADING:
      return {
        ...state,
        loading: true
      };

    case APP_DATA_SUCCESS:
      return {
        loading: false,
        error: false,
        data: { ...state.data, ...action.appData }
      };

    case APP_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default appDataReducer;