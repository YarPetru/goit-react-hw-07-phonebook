import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createSlice } from '@reduxjs/toolkit';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d669ed15ad24cbf2d6b26d.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    getFilteredContacts: builder.query({
      query: name => `/contacts?search=${name}`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

// const initialState = '';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     changeFilter: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

export const {
  useGetContactsQuery,
  useGetFilteredContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;

// export const { changeFilter } = filterSlice.actions;
// export default filterSlice.reducer;
