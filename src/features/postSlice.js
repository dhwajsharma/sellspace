import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        selectPost: null,
        postIsOpen: false,

    },
    reducers: {
        selectPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        openPost: (state) => {
            state.postIsOpen = true;
        },
    },
});

export const { selectPost, openPost } = postSlice.actions;
export const selectpostIsOpen = (state) => state.post.selectedPost;


export default postSlice.reducer;