import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { id: "1", last_four: "1234", is_physical: false, status: "active" },
    { id: "2", last_four: "5678", is_physical: false, status: "inactive" },
    { id: "3", last_four: "9101", is_physical: true, status: "terminated" },
    { id: "4", last_four: "1121", is_physical: false, status: "terminated" },
    { id: "5", last_four: "3141", is_physical: true, status: "inactive" },
    { id: "6", last_four: "2232", is_physical: true, status: "active" },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;
