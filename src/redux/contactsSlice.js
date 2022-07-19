import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reduserPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d669ed15ad24cbf2d6b26d.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
