import { combineReducers, createStore } from 'redux';
import { favouriteReducer } from './reducers/favourites';
import { loginReducer } from './reducers/login';
import { movieReducer } from './reducers/movies';
import { configureStore, createSlice } from '@reduxjs/toolkit'
const store = createStore(combineReducers({
    login: loginReducer,
    movies: movieReducer,
    favourites: favouriteReducer
}
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: []
    },
    reducers: {
        addMovie: (state, movie) => {
            state.movies.push(movie)
        },
        removeMovie: (state, id) => {
            state.movies=state.movies.filter(movie => movie.id !== id)
        }
    }
})
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        isLoggedIn: false
    },
    reducers: {
        login: (state, user) => {
            state.user=user;
            state.isLoggedIn = true
        },
        logout: (state) => {
            
        },
        addProduct : (state, user) => {}
    }

})
export const {addMovie, removeMovie} = movieSlice.actions
export const {login,logout} = loginSlice.actions
const rootReducer = {
    movie: movieSlice.reducer,
    login: loginSlice.reducer
}
const store2 = configureStore({
    reducer: rootReducer,
})
export { store, store2 };
