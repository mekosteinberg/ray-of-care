import React, { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router'


const MyContext = React.createContext(undefined);
//https://www.freecodecamp.org/news/react-context-for-beginners/#how-do-i-use-react-context
//hook to pull into other components and get roles for other check purposes
export const useUserProfile = () => React.useContext(MyContext);

//https://towardsdev.com/how-to-handle-404-500-and-more-using-fetch-api-in-javascript-f4e301925a51
function manageErrors(response) {
    if (!response.ok) {
        const responseError = {
            statusText: response.statusText,
            status: response.status
        };
        throw (responseError);
    }
    return response;
}
export default function UserProfileProvider({ children }) {

    const { user } = useUser();
    const router = useRouter()
    const [userProfile, setUserProfile] = useState(undefined)

    useEffect(() => {
        if (user) {
            fetch('/api/profile/compact')
                .then(manageErrors)
                .then((res) => res.json())
                .then((data) => {
                    //if they dont have a profile and not on the create page then redirect
                    //to the create a profile page
                    if (!data && router.basePath !== '/profile/create') {
                        router.push('/profile/create')
                    }
                    setUserProfile(data);
                }).catch((error) => {
                    // clear out current profile so the card doesn't because the server failed to get data 
                    setUserProfile(undefined);
                    if (error.status === 404) {
                        //if they dont have a profile and not on the create page then redirect
                        //to the create a profile page
                        if (router.basePath !== '/profile/create') {

                            router.push('/profile/create')
                        }
                    } else {
                        console.log('Error Code   : ' + error.status);
                        console.log('Error Reason : ' + error.statusText);
                    }
                })
        }
    }, [user])

    return (
        // This applies the CreateContext to all the pages
        <MyContext.Provider value={userProfile}>
            {children}
        </MyContext.Provider>

    )
}
