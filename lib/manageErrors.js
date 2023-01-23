//https://towardsdev.com/how-to-handle-404-500-and-more-using-fetch-api-in-javascript-f4e301925a51
export function manageErrors(response) {
    if (!response.ok) {
        const responseError = {
            statusText: response.statusText,
            status: response.status
        };
        throw (responseError);
    }
    return response;
}