export const getDemo = state => `some random number: ${Math.ceil((state.demo * 10) % 5)}`;

export const getPosition = state => state.position;
export const getBounds = state => state.bounds;
export const getPokeList = state => state.pokeList;
export const getPokeDex = state => state.pokeDex;
export const getAuthToken = state => state.authToken;
export const getSnackBar = state => state.snackBar;
export const getUsername = state => state.username;
export const getEmail = state => state.email;
export const getMapStyleDay = state => state.mapStyleDay;
export const getMapStyleNight = state => state.mapStyleNight;
export const getIsNight = state => state.isNight;
