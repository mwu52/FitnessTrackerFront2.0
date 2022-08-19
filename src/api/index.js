const APIURL = `https://fitnesstrac-kr.herokuapp.com/`;

export async function getToken(token){
    try {
        const response = await fetch(`${APIURL}/api/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await reponse.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export async function registerUser(username, password){
    try {
        const response = await fetch(`${APIURL}/api/users/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const result = await response.json();
        if (result.error){
            throw result;
        }
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        return SpeechRecognitionResultList;
    } catch (error) {
        throw error;
    }
}

export async function userLogin(username, password){
    try {
        const response = await fetch(`${APIURL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const result = await response.json();
        if(result.error){
            throw result;
        }
        const token = result.token;
        const Id = result.user.id;
        if (token){
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            localStorage.setItem("id", Id);
            return result;
        }
    } catch (error) {
        throw error;
    }
}

