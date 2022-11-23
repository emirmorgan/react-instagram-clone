import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    user: null,
  },
  reducers: {
    setTheUser: (state, action) => {
      state.user = action.payload;
    },
    updateTheUser: (state, action) => {
      let photoSrc = action.payload.photoSrc;
      let fullName = action.payload.fullName;
      const bio = action.payload.bio;

      if (photoSrc === "") {
        photoSrc = "/src/assets/defaultPhoto.jpg";
      }

      if (fullName === "") {
        fullName = state.user.fullName;
      }

      state.user = { ...state.user, photoSrc, fullName, bio };
    },
    addPost: (state, action) => {
      const posts = [
        ...state.user.posts,
        {
          imgSrc: action.payload.postImage,
          desc: action.payload.postDesc,
          likes: action.payload.postLikes,
        },
      ];

      state.user = { ...state.user, posts };
    },
  },
});

export const { setTheUser, updateTheUser, addPost } = dataSlice.actions;
export default dataSlice.reducer;
