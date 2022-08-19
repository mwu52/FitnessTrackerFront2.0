const APIURL = `https://fitnesstrac-kr.herokuapp.com/api/`;

export async function getToken(token){
    try {
        const response = await fetch(`${APIURL}/users/me`, {
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
        const response = await fetch(`${APIURL}/users/register`,{
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
        const response = await fetch(`${APIURL}/users/login`, {
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

export async function Routines(){
    try {
        const response = await fetch (`${APIURL}/routines`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function Activities(){
    try {
        const response = await fetch(`${APIURL}/activities`, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        let result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function myRoutines(token){
    try {
        const response = await fetch(`${APIURL}/users/${localStorage.getItem("username")}/routines`,{
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function newRoutine(name, goal, token){
    try {
        const response = await fetch(`${APIURL}/routines`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: true,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export async function newActivity(name, description, token){
    try {
        const response = await fetch(`${APIURL}/activities`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function routineUpdate(name, goal, id, token){
    try {
        const response = await fetch(`${APIURL}/routines/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: true,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function activityUpdate(name, description, token, id){
    try {
        const response = await fetch(`${APIURL}/activities/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}