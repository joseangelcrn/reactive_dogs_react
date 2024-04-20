import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const dogsSlice = createSlice({
  name: "dog",
  initialState: {
    data: [
      {
        id: uuidv4(),
        name: "Sasha",
        description:
          "Such a clever dog, now a day I wonder how you understood everything we told you. I miss you Sashilla.",
        url: "sasha.png",
      },
      {
        id: uuidv4(),
        name: "Marcos",
        description:
          "A very lazy labrador. I am sure your objective in this world was the human food. I miss you Marquillo.",
        url: "marcos.png",
      },
    ],
  },
  reducers: {
    create: (state, action) => {
      let dog = action.payload;
      dog.id = uuidv4();
      state.data.push(dog);
    },
    remove: (state, action) => {
      let id = action.payload;
      let clonedData = [...state.data];
      let filteredDogs = clonedData.filter((dog) => {
        return dog.id != id;
      });
      state.data = filteredDogs;
    },
    update: (state, action) => {
      let { id, updatedDog } = action;

      let clonedData = [...state.data];
      let filteredDogs = clonedData.map((dog) => {
        if (dog.id === id) {
          dog = updatedDog;
        }
      });
      state.data = filteredDogs;
    },

    generateFakeDogs: (state) => {
      let fakeDgos = [];

      for (let i = 1; i <= 15; i++) {
        let url = "sasha.png";
        if (i % 2 == 0) {
          url = "marcos.png";
        }
        fakeDgos.push({
          id: uuidv4(),
          name: "Dog " + i,
          description: "Fake Dog number " + i,
          url,
        });
      }

      state.data = fakeDgos;
    },
  },
});

export const { create, remove, update, generateFakeDogs } = dogsSlice.actions;

export default dogsSlice.reducer;
