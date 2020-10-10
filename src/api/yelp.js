import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 82A8fMtQiuSJABXkr6bu4afGMJ5BGTeZGA9PVXpyJtwUEP3lMFqGc0hPz8MWhL4G78NhYtLE9bie4vxr58AAr3fLkS8baA-FFPdEG5a4IvlRZvU7jwYIZCD2WY54X3Yx'
  }
});
