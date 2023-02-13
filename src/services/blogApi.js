import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:3000"}),
    tagTypes: ['Blog'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs',
            providesTags: ['Blog']
        }),

        getSingleDetail: builder.query({
            query: (id) => `/blogs/${id}`,
        }),

        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Blog'],
        }),

        addBlog: builder.mutation({
            query: (newBlog) => ({
                url: '/blogs',
                method: 'POST',
                body: newBlog,
            }),
            invalidatesTags: ['Blog'],
        }),

        updateBlog: builder.mutation({
            query: (newBlog) => ({
                url: `/blogs/${newBlog.id}`,
                method: 'PATCH',
                body: newBlog,
            }),
            invalidatesTags: ['Blog'],
        })

    })
})

export const { useGetBlogsQuery, useGetSingleDetailQuery, useDeleteBlogMutation, useAddBlogMutation, useUpdateBlogMutation } = blogApi;