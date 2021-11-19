let myApi = "http://localhost:5000";

export const URL_API = myApi;

//מבצע פעולות GET של שליפת מידע
export const doApiGet = async (_url) => {
    try {
        let resp = await fetch(_url);
        let data = resp.json();
        return data
    }
    catch (err) {
        console.log(err);
        return err;
    }

}

//מבצע פעולות GET,POST,PUT,DELETE
//שולחים באדי וסוג של מתודה ויואראל ושולחים/מקבלים מידע
export const doApiMethod = async (_url, _method, _body) => {
    try {
        let resp = await fetch(_url, {
            method: _method,
            body: JSON.stringify(_body),
            headers: {
                'auth-token':localStorage["user_token"],
                'content-type': "application/json"
            }
        });
        let data = resp.json();
        return data
    }
    catch (err) {
        console.log(err);
        return err;
    }

}

