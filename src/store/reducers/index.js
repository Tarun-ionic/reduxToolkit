import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { testApi } from "../apiconstant/test.api";
import {withOutTokenGet} from '../services/common.services'


export const getTestAPIData = createAsyncThunk("GET_TEST_API_DATA",
    () => withOutTokenGet(testApi.GET_TEST_WITH_PAGINATION));
// export const FILTER_API = createAsyncThunk("FILTER_API",
//     (food) => withOutTokenGet(beerApi.GET_TEST_WITH_FILTER + `food=${food}`));

    const initialState = {
        status: null,
        data: null,
        favorites: [],
        filterData: []
    };

    export const rootReducer = createSlice({
        name:  "rootReducer",
        initialState,
        reducers: {
            addFavorite: (state, action) => {
                let Arr = state.data;
                let getObj = Arr.find((item) => item.id === action.payload.id);
                if(getObj.like){
                    getObj.like = false;
                } else {
                    getObj.like = true;
                }
                let findInd = Arr.findIndex(item => item.id == action.payload.id);
                Arr[findInd] = getObj;
                state.data = Arr;
            },

            addCart: (state, action) => {
                let Arr = state.data;
                let getObj = Arr.find((item) => item.id === action.payload.id);
                if(getObj.cart){
                    getObj.cart = false;
                } else {
                    getObj.cart = true;
                }
                let findInd = Arr.findIndex(item => item.id == action.payload.id);
                Arr[findInd] = getObj;
                state.data = Arr;
            },

            removeFavorite: (state, action) => {
                let favorites = state.favorites;
                favorites = favorites.filter((item) => item.id !== action.payload)
                state.favorites = favorites;
            },
            clearFavorites: (state, action) => {
                state.favorites = [];
            },
            setFilterData: (state) => {
                state.filterData = [];
            },
    
            addRank: (state, action) => {
                let favorites = state.favorites;
                let index = favorites.findIndex(item => item.id == action.payload.id);
                let data = favorites[index];
                data = { ...data, rank: action.payload.value };
                favorites[index] = data;
                state.favorites = favorites;
            }
        },
        extraReducers: {
            [getTestAPIData.pending]: (state, action) => {
                state.status = "pending";
            },
            [getTestAPIData.fulfilled]: (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
            },
            [getTestAPIData.rejected]: (state, action) => {
                state.status = "rejected";
            },
        },
    });
    
    
export const { addFavorite, addCart, removeFavorite, clearFavorites, setFilterData, addRank } = rootReducer.actions;
export default rootReducer.reducer;