"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRepository = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const DataApi_1 = tslib_1.__importDefault(require("./DataApi"));
const handleAxiosError_1 = require("./handleAxiosError");
const ObservableData_1 = require("./ObservableData");
class DataRepository {
    constructor(args) {
        if (args.apiService) {
            this.dataApi = args.apiService;
        }
        else {
            this.dataApi = new DataApi_1.default(args);
        }
        const name = this.dataApi.getBasePath();
        if (args.observableService) {
            this.observableService = args.observableService;
        }
        else {
            this.observableService = new ObservableData_1.ObservableData({
                // Global by default
                global: args.global === false ? false : true,
                name: name,
                transforms: args.transforms,
                idField: args.idField || 'id',
            });
        }
    }
    getBaseURL() {
        return this.dataApi.getBasePath();
    }
    getState() {
        return this.observableService.getState();
    }
    setToken(token) {
        this.dataApi.setToken('Bearer', token);
    }
    findAll(pagination, filter) {
        return (0, rxjs_1.of)({
            pagination,
        }).pipe((0, rxjs_1.tap)(() => this.observableService.listing(true)), 
        // TODO: Retrieve from cache before attempting URI
        (0, rxjs_1.switchMap)(({ pagination }) => {
            return this.dataApi
                .findAll(pagination, filter)
                .pipe((0, rxjs_1.map)((response) => response.data));
            // TODO: Cache response here
        }), (0, rxjs_1.tap)((result) => this.observableService.list(result)), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.listing(false);
        }));
    }
    findOne(id) {
        return (0, rxjs_1.of)(id).pipe((0, rxjs_1.tap)(() => this.observableService.getting(true)), 
        // Check local state first, if not available go to api
        (0, rxjs_1.map)((id) => this.observableService.getFromStateByID(id)), (0, rxjs_1.switchMap)((cachedData) => {
            return cachedData
                ? (0, rxjs_1.of)(cachedData)
                : this.dataApi.findOne(id).pipe((0, rxjs_1.map)((response) => response === null || response === void 0 ? void 0 : response.data));
        }), (0, rxjs_1.tap)((result) => {
            this.observableService.get(result);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.getting(false);
        }));
    }
    findByIDs(ids) {
        return (0, rxjs_1.of)(ids).pipe((0, rxjs_1.tap)(() => this.observableService.listing(true)), 
        // TODO: Retrieve from cache before attempting URI
        (0, rxjs_1.switchMap)((ids) => {
            return this.dataApi
                .findByIDs(ids)
                .pipe((0, rxjs_1.map)((response) => response.data));
            // TODO: Cache response here
        }), (0, rxjs_1.tap)((result) => {
            this.observableService.list(result);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.listing(false);
        }));
    }
    create(data) {
        return (0, rxjs_1.of)(data).pipe((0, rxjs_1.tap)(() => this.observableService.creating(true)), (0, rxjs_1.switchMap)((data) => {
            return this.dataApi.create(data).pipe((0, rxjs_1.map)((response) => response.data));
        }), (0, rxjs_1.tap)((result) => {
            this.observableService.create(result);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.creating(false);
        }));
    }
    update(id, data) {
        return (0, rxjs_1.of)({
            id,
            data,
        }).pipe((0, rxjs_1.tap)(() => this.observableService.updating(true)), (0, rxjs_1.switchMap)(({ id, data }) => {
            return this.dataApi
                .update(id, data)
                .pipe((0, rxjs_1.map)((response) => response.data));
        }), (0, rxjs_1.tap)((result) => {
            // here id refers to the id passed in to the function not
            // the id in the observable
            this.observableService.update(id, result);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.updating(false);
        }));
    }
    updatePartial(id, data) {
        return (0, rxjs_1.of)({
            id,
            data,
        }).pipe((0, rxjs_1.tap)(() => this.observableService.updating(true)), (0, rxjs_1.switchMap)(({ id, data }) => {
            return this.dataApi
                .updatePartial(id, data)
                .pipe((0, rxjs_1.map)((response) => response.data));
        }), (0, rxjs_1.tap)((result) => {
            // here id refers to the id passed in to the function not
            // the id in the observable
            this.observableService.update(id, result);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.updating(false);
        }));
    }
    remove(id) {
        return (0, rxjs_1.of)(id).pipe((0, rxjs_1.tap)(() => this.observableService.removing(true)), (0, rxjs_1.switchMap)((id) => {
            return this.dataApi.remove(id).pipe((0, rxjs_1.map)((response) => response.data));
        }), (0, rxjs_1.tap)(() => {
            // here id refers to the id passed in to the function not
            // the id in the observable
            this.observableService.remove(id);
        }), (0, rxjs_1.catchError)((err) => {
            this.observableService.error((0, handleAxiosError_1.handleAxiosError)(err));
            throw err;
        }), (0, rxjs_1.finalize)(() => {
            this.observableService.removing(false);
        }));
    }
    getObservable() {
        return this.observableService.getObservable();
    }
}
exports.DataRepository = DataRepository;
//# sourceMappingURL=DataRepository.js.map