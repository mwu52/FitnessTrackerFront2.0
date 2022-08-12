const APIURL = `https://fitnesstrac-kr.herokuapp.com/`;

export async function registerUser(username, password){
    try {
        const response = await fetch (`${APIURL}/api/users/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
        return results;
    } catch (error) {
        throw error;
    }
}