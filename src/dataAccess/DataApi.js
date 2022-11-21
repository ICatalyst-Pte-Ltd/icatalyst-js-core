"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class DataApi {
    constructor(args) {
        if (!args.axios) {
            this.axios = axios_1.default.create({
                headers: {
                    'Content-Type': 'application/json',
                },
                // withCredentials: true,
            });
        }
        else {
            this.axios = args.axios;
        }
        this.baseURL = this.axios.defaults.baseURL || args.baseURL || '';
        if (!this.baseURL) {
            throw new Error('A base url was not correctly configured');
        }
        this.dtoPath = args.dtoPath;
    }
    setToken(tokenType, token) {
        this.axios.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;
    }
    getBasePath() {
        return `${this.baseURL}/${this.dtoPath}`;
    }
    // TODO: if a request is already in progress, just wait for it.
    findOne(id) {
        return this.axios.get(`${this.getBasePath()}/${id}`);
    }
    // TODO: implemente correctly
    findByIDs(ids) {
        return this.axios.get(`${this.getBasePath()}/${ids.join(',')}`);
    }
    findAll() {
        return this.axios.get(`${this.getBasePath()}`);
    }
    // TODO: Implement correctly
    findPage() {
        return this.axios.get(`${this.getBasePath()}`);
    }
    create(data) {
        return this.axios.post(`${this.getBasePath()}`, data);
    }
    update(id, data) {
        return this.axios.put(`${this.getBasePath()}/${id}`, data);
    }
    // TODO: Implement correctly
    updatePartial(id, data) {
        return this.axios.patch(`${this.getBasePath()}/${id}`, data);
    }
    remove(id) {
        return this.axios.delete(`${this.getBasePath()}/${id}`);
    }
}
exports.default = DataApi;
//# sourceMappingURL=DataApi.js.map