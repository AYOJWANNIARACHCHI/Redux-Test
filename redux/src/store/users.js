import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (obj, { rejectWithValue, fulfillWithValue }) => {
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(testAsyncDispatch())
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/111`);

            console.log(res.data);
            return res.data;
            // return fulfillWithValue('Something else'), res.data;
        } catch (error) {
            return rejectWithValue('Oops, try again later');
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: [],
        loading: false
        //test:false
    },
    reducers: {
        setType: (state, actions) => {
            state.type = actions.payload || 'Guest'
        }
        // testAsyncDispatch: (state) => {
        //     state.test = true;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        }).addCase(fetchUsers.fulfilled, (state, actions) => {
            state.loading = false;
            state.users = actions.payload;
        }).addCase(fetchUsers.rejected, (state, actions) => {
            console.log(actions.payload);
        });
    }
});

export const { setType, testAsyncDispatch } = userSlice.actions;
export default userSlice.reducer;