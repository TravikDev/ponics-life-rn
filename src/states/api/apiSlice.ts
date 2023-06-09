import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../slices/auth/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://192.168.100.2:3333',
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        /* @ts-ignore */
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    // change back to 403 
    if (result?.error?.status === 401) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        
        if(refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
