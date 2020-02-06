import * as types from './mutations-types';
import * as http from '../APICom/index';
import router from '../router';
import store from './index';

export const getSightings = ({ commit }, payload) => {
  http.getPokemonList(payload)
    .then((response) => {
      const list = [];
      response.data.forEach((item) => {
        list.push(item);
      });
      commit(types.POKELIST, list);
    });
};

export const addSighting = ({ commit }, payload) => {
  http.postSighting(payload)
    .then((response) => {
      console.log(response.status);
      if (response.status === 201) {
        updateSnackbar({ commit }, 'Pokemon Added', 'Pokemon added successfully', 'success');
      }
    });
};

export const setPosition = ({ commit }, payload) => {
  commit(types.POSITION, payload);
};

export const setBounds = ({ commit }, payload) => {
  const bounds = {
    north: payload.north,
    east: payload.east,
    south: payload.south,
    west: payload.west,
  };
  if (bounds.north !== bounds.south && bounds.east !== bounds.west) {
    commit(types.BOUNDS, bounds);
    getSightings({ commit }, bounds);
  }
};

export const submitRegister = ({ commit }, payload) => {
  http.userRegister({ name: payload.name, email: payload.email, password: payload.password })
    .then((response) => {
      commit(types.AUTH_TOKEN, response.data['auth-token']);
      commit(types.USERNAME, payload.name);
      commit(types.EMAIL, payload.email);
      router.push('/map');
      updateSnackbar({ commit }, 'Done', 'Registration completed successfully', 'success');
    })
    .catch((error) => {
      updateSnackbar({ commit }, 'Error', error, 'error');
    });
};

export const submitLogin = ({ commit }, payload) => {
  http.postLogin({ email: payload.email, password: payload.password })
    .then((response) => {
      commit(types.AUTH_TOKEN, response.data['auth-token'].toString());
      commit(types.EMAIL, payload.email.toString());
      router.push('/map');
      updateSnackbar({ commit }, 'Done', 'Login completed successfully', 'success');
    })
    .catch((error) => {
      updateSnackbar({ commit }, 'Error', error, 'error');
    });
};

export const retrievePokedex = ({ commit }, payload) => {
  http.getAllPokemon({ language: payload }).then((response) => {
    commit(types.POKEDEX, response.data);
  });
};

export const retrieveUserDetails = ({ commit }, payload) => {
  http.getUserDetail(payload).then((response) => {
    commit(types.EMAIL, response.data.email);
    commit(types.USERNAME, response.data.name);
  });
};

export const updateUserDetails = ({ commit }, payload) => {
  http.patchUserDetail({
    name: payload.name,
    email: payload.email,
    password: payload.password,
    passwordNew: payload.passwordNew,
  }, payload.token)
    .then((response) => {
      commit(types.AUTH_TOKEN, response.data['auth-token']);
      commit(types.USERNAME, payload.name);
      commit(types.EMAIL, payload.email);
      router.push('/map');
      updateSnackbar({ commit }, 'Done', 'User details updated successfully', 'success');
    })
    .catch((error) => {
      updateSnackbar({ commit }, 'Error', error, 'error');
    });
};

export const logUserOut = ({ commit }) => {
  const emptyString = '';
  commit(types.AUTH_TOKEN, emptyString);
  updateSnackbar({ commit }, 'Done', 'Logout completed successfully', 'success');
  router.push('/');
};

export const updateSnackbar = ({ commit }, snackTitle, snackBody, snackType) => {
  const snackbarMessage = {
    title: snackTitle,
    body: snackBody,
    type: snackType,
  };
  commit(types.SNACKBAR, snackbarMessage);
};

export const checkIfItsNight = ({ commit }, payload) => {
  console.log('check if night');
  http.getSunriseSunset(payload).then((response) => {
    const dataResult = response.data.results;
    const sunrise = new Date(dataResult.sunrise);
    const sunset = new Date(dataResult.sunset);
    const deltaRise = sunrise - new Date();
    const deltaSet = sunset - new Date();

    console.log(deltaRise);
    console.log(deltaSet);

    if (deltaRise < 0 && deltaSet > 0) {
      // is Day
      console.log('is day');
      commit(types.ISNIGHT, false);
      setTimeout(commit(types.ISNIGHT, true), deltaSet);
    } else if (deltaSet < 0 && deltaRise < deltaSet) {
      // is Night
      console.log('is night');
      commit(types.ISNIGHT, true);
    } else if (deltaRise < deltaSet && deltaRise < 0) {
      console.log('is still night');
      setTimeout(commit(types.ISNIGHT, true), deltaRise);
    }
  });
};
