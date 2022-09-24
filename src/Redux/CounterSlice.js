import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    value : 1
}

export const CounterSlice = createSlice({
    name: 'vijay',
    initialState,
    reducers: {
        incrementby1: (state) => {
            state.value = state.value + 1;
        },
        decrementby1: (state) => {
            state.value = state.value - 1;
        },
        incrementby5 : (state, action)=> {
            state.value = state.value + action.payload;
        }

    }
})

export default CounterSlice.reducer;
export const {incrementby1,decrementby1, incrementby5} = CounterSlice.actions;