import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const dogsSlice = createSlice({
  name: "dog",
  initialState: {
    data: [],
  },
  reducers: {
    create: (state,action) => {
      let dog = action.payload;
      dog.id = uuidv4();
      state.data.push(dog);
    },
    remove: (state,action) => {
      let id = action.payload;
      let clonedData = [...state.data];
      let filteredDogs = clonedData.filter((dog)=>{
        return dog.id != id;
      });
      state.date = filteredDogs;
    },
    update: (state,action) =>{
      let {id,updatedDog} = action;

      let clonedData = [...state.data];
      let filteredDogs = clonedData.map((dog)=>{
        if (dog.id === id) {
          dog = updatedDog;
        }
      });
      state.date = filteredDogs;

    }
  },
});

export const {create,remove,update}  = dogsSlice.actions;

export default dogsSlice.reducer;
