"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableData = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const _lodash_1 = tslib_1.__importDefault(require("../../libs/@lodash"));
const globalObservables = {};
class ObservableData {
    constructor(args) {
        this.name = args.name;
        this.idField = (args.idField || 'id');
        this.transforms = _lodash_1.default.merge({
            pagedResult(data) {
                var _a;
                const rawData = Array.isArray(data) ? data : [data];
                const dtoTransform = (_a = args.transforms) === null || _a === void 0 ? void 0 : _a.dtoTransforms;
                return {
                    // If there are dtoTransforms, then ensure that each record is transformed
                    data: dtoTransform
                        ? rawData.map((record) => {
                            return dtoTransform.reduce((acc, transform) => {
                                return transform(acc);
                            }, record);
                        })
                        : rawData,
                    totalCount: rawData.length,
                    index: 0,
                    pageSize: rawData.length,
                    pageInfo: {
                        hasNextPage: false,
                        hasPreviousPage: false,
                    },
                };
            },
        }, args.transforms || {});
        const intialState = _lodash_1.default.merge({}, {
            page: {
                data: [],
                totalCount: 0,
                index: 0,
                pageSize: 0,
                pageInfo: {
                    hasNextPage: false,
                    hasPreviousPage: false,
                },
            },
            lastRetrieved: null,
            listing: false,
            creating: false,
            updating: false,
            removing: false,
            getting: false,
            errors: [],
        }, args.initialState || {});
        if (args.global) {
            this.subject = globalObservables[this.name];
            if (!this.subject) {
                globalObservables[this.name] = new rxjs_1.BehaviorSubject(intialState);
                this.subject = globalObservables[this.name];
            }
        }
        else {
            this.subject = new rxjs_1.BehaviorSubject(intialState);
        }
    }
    setNextState(payload) {
        const state = this.subject.getValue();
        this.subject.next(Object.assign(Object.assign({}, state), payload));
    }
    list(data) {
        this.setNextState({
            page: this.transforms.pagedResult
                ? this.transforms.pagedResult(data)
                : // The DataType has provided no paged transform, therefore expect the data in the right format
                    data,
            errors: [],
        });
    }
    listing(flag) {
        this.setNextState({ listing: flag });
    }
    get(data) {
        // If we have received an item that is already in memory, then replace
        // to make sure we are up to date
        const page = this.subject.getValue().page;
        const dataItems = [...page.data].map((item) => {
            if (item[this.idField] === data[this.idField]) {
                return Object.assign({}, data);
            }
            return item;
        });
        this.setNextState({
            page: Object.assign(Object.assign({}, page), { data: [...dataItems] }),
            errors: [],
            lastRetrieved: data,
        });
    }
    getting(flag) {
        this.setNextState({ getting: flag });
    }
    create(data) {
        const page = this.subject.getValue().page;
        this.setNextState({
            page: Object.assign(Object.assign({}, page), { totalCount: page.totalCount + 1, data: [...page.data, data] }),
            errors: [],
            lastRetrieved: data,
        });
    }
    creating(flag) {
        this.setNextState({ creating: flag });
    }
    update(id, data) {
        const page = this.subject.getValue().page;
        const dataItems = [...page.data].map((item) => {
            if (item[this.idField] === data[this.idField]) {
                return Object.assign({}, data);
            }
            return item;
        });
        this.setNextState({
            page: Object.assign(Object.assign({}, page), { data: dataItems }),
            errors: [],
            lastRetrieved: data,
        });
    }
    updating(flag) {
        this.setNextState({ updating: flag });
    }
    remove(id) {
        const page = this.subject.getValue().page;
        const dataItems = [...page.data].filter((item) => {
            return item[this.idField] !== id;
        });
        this.setNextState({
            page: Object.assign(Object.assign({}, page), { data: dataItems }),
            errors: [],
        });
    }
    removing(flag) {
        this.setNextState({ removing: flag });
    }
    error(errors) {
        this.setNextState({
            errors,
        });
    }
    getObservable() {
        return this.subject;
    }
    getState() {
        return this.subject.getValue();
    }
    getFromStateByID(id) {
        return this.subject
            .getValue()
            .page.data.find((item) => item[this.idField] === id);
    }
    getFromStateByIDs(ids) {
        return this.subject
            .getValue()
            .page.data.find((item) => ids.includes(item[this.idField]));
    }
}
exports.ObservableData = ObservableData;
//# sourceMappingURL=ObservableData.js.map