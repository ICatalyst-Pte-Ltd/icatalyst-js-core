"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const rxjs_1 = require("rxjs");
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
    // TODO: Need to be able to cancel axios
    findOne(id) {
        return new rxjs_1.Observable((observer) => {
            this.axios
                .get(`${this.getBasePath()}/${id}`)
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                observer.error(err);
            });
        });
    }
    // TODO: Need to be able to cancel axios
    findAll(pagination, filter) {
        const path = this.getBasePath();
        // TODO: DataApi must be able to form url to cater for filters, ordering, and pagination
        // This transform should be configurable
        let url = pagination
            ? `${path}?offset=${pagination.offset}&limit=${pagination.limit}`
            : path;
        const queryFilter = filter
            ? Object.keys(filter)
                .map((key) => `${key}=${filter[key]}`)
                .join('&')
            : '';
        if (queryFilter) {
            url = `${url}${url.includes('?') ? '&' : '?'}${queryFilter}`;
        }
        return (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.axios.get(url)));
    }
    findByIDs(ids) {
        const url = `${this.getBasePath()}/${ids.join(',')}`;
        return (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.axios.get(url)));
    }
    create(data) {
        const url = `${this.getBasePath()}`;
        return (0, rxjs_1.defer)(() => this.axios.post(url, data));
    }
    update(id, data) {
        const url = `${this.getBasePath()}/${id}`;
        return (0, rxjs_1.defer)(() => this.axios.put(url, data));
    }
    updatePartial(id, data) {
        const url = `${this.getBasePath()}/${id}`;
        return (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.axios.patch(url, data)));
    }
    remove(id) {
        const url = `${this.getBasePath()}/${id}`;
        return (0, rxjs_1.defer)(() => (0, rxjs_1.from)(this.axios.delete(url)));
    }
}
exports.default = DataApi;
//# sourceMappingURL=DataApi.js.map