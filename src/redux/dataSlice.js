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
        photoSrc =
          "https://instagram.faep6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?efg=eyJybWQiOiJpZ19hbmRyb2lkX21vYmlsZV9uZXR3b3JrX3N0YWNrX3F1aWNfaGFwcHlfZXllYmFsbHM6dGlnb25fbW5zIn0&_nc_ad=z-m&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=fvI0qZTT6G4AX8Xgrhc&edm=AL4D0a4BAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfBEzBXU2f9pDrLe2A58OH0OQHWf0ndZxLWJOSCYnsuQoA&oe=6382C80F&_nc_sid=712cc3";
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
