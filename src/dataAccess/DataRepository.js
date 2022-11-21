"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRepository = void 0;
const tslib_1 = require("tslib");
const DataApi_1 = require("./DataApi");
const handleAxiosApi_1 = require("./handleAxiosApi");
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
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Check repository first, if not then get from api
            try {
                this.observableService.getting(true);
                let result = this.observableService.getFromStateByID(id);
                if (!result) {
                    result = yield (0, handleAxiosApi_1.default)(this.dataApi.findOne(id));
                }
                this.observableService.get(result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.getting(false);
            }
        });
    }
    // TODO: Implement properly
    findByIDs(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Check repository first, if not then get from api
            try {
                this.observableService.getting(true);
                let result = this.observableService.getFromStateByIDs(ids);
                // TODO: Retrieve the ones that couldn't be found
                if (!result) {
                    result = yield (0, handleAxiosApi_1.default)(this.dataApi.findByIDs(ids));
                }
                this.observableService.get(result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.getting(false);
            }
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // If we are already getting data, don't get again
                if (this.getObservable().getValue().listing) {
                    return;
                }
                this.observableService.listing(true);
                const result = yield (0, handleAxiosApi_1.default)(this.dataApi.findAll());
                this.observableService.list(result);
                this.observableService.listing(false);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
                this.observableService.listing(false);
            }
            // Note when using finally it is being called multiple times so moved finally into try catch
        });
    }
    // TODO: Implement correctly
    findPage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.observableService.listing(true);
                const result = yield (0, handleAxiosApi_1.default)(this.dataApi.findPage());
                this.observableService.list(result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.listing(false);
            }
        });
    }
    create(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.observableService.creating(true);
                const result = yield (0, handleAxiosApi_1.default)(this.dataApi.create(data));
                this.observableService.create(result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.creating(false);
            }
        });
    }
    update(id, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.observableService.updating(true);
                const result = yield (0, handleAxiosApi_1.default)(this.dataApi.update(id, data));
                this.observableService.update(id, result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.updating(false);
            }
        });
    }
    updatePartial(id, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.observableService.updating(true);
                const result = yield (0, handleAxiosApi_1.default)(this.dataApi.updatePartial(id, data));
                this.observableService.update(id, result);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.updating(false);
            }
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.observableService.removing(true);
                // In this case we are discarding the result
                yield (0, handleAxiosApi_1.default)(this.dataApi.remove(id));
                this.observableService.remove(id);
            }
            catch (error) {
                this.observableService.error((0, handleAxiosError_1.handleAxiosError)(error));
            }
            finally {
                this.observableService.removing(false);
            }
        });
    }
    getObservable() {
        return this.observableService.getObservable();
    }
}
exports.DataRepository = DataRepository;
//# sourceMappingURL=DataRepository.js.map