import axios from 'axios';

const root = "https://music-quiz-server.herokuapp.com/";

const path = {
    get: root + "/get",
    post: root + "/post",
    put: root + "/put",
    delete: root + "/delete",
};

class Request {
    static async get() {
        const res = await axios
            .get(path.get)
            .catch((err) => {
                console.log(err);
            })
        console.log("\nGet\nResponse:\n\n");
        console.log(res.data);
        return res.data;
    }

    static async post(data) {
        await axios
            .post(path.post, data)
            .then(() => {
                console.log("\nPOST\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async put(data) {
        await axios
            .put(path.put, data)
            .then(() => {
                console.log("\nPUT\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async delete(data) {
        await axios
            .delete(path.delete, { data: data })
            .then( () => {
                console.log("\nDELETE\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export default Request;