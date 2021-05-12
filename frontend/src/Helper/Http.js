import Axios from 'axios';

export class Http {
    get header() {
        return {
            'X-Refresh': 'refreshToken',
            'Authorization': 'authToken',
            'x-userId': 'userId',
            'Access-Control-Allow-Origin': '*',
        }
    }

    constructor() {
        
    }

    static get = (endPoint, params) => {
        const options = {
            header: this.header,
        }
        if (params && Object.keys(params).length) {
            options.params = params;
        }
        return Axios.get(endPoint, options);
    }

    static post = (endPoint, payload) => {
        return Axios.post(endPoint, payload, {
            header: this.header,
        })
    }

    static put = (endPoint, payload) => {
        return Axios.put(endPoint, payload, {
            header: this.header,
        })
    }

    static patch = (endPoint, payload) => {
        return Axios.patch(endPoint, payload, {
            header: this.header,
        })
    }

    static delete = (endPoint, id) => {
        return Axios.delete(endPoint + '/' + id, {
            header: this.header,
        });
    }
}
