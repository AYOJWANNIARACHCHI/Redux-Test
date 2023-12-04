import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [
            { id: 1, title: 'LEO' },
            { id: 2, title: 'Master' }
        ]
    },
    reducers: {
        addMovie: (state, actions) => {
            console.log(actions.payload);
            //const newMovie = { id: 3, title: 'Jailer' };
            state.list = [...state.list, actions.payload]
        }
    }
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;