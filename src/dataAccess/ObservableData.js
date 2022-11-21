"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableData = void 0;
const rxjs_1 = require("rxjs");
const _lodash_1 = require("../libs/@lodash");
const globalObservables = {};
class ObservableData {
    constructor(args) {
        this.name = args.name;
        this.transforms = _lodash_1.default.merge({
            pagedResult(data) {
                const rawData = Array.isArray(data) ? data : [data];
                return {
                    data: rawData,
                    totalCount: rawData.length,
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
            page: this.transforms.pagedResult(data),
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
            if (item.id === data.id) {
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
            if (item.id === data.id) {
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
            return item.id !== id;
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
        return this.subject.getValue().page.data.find((item) => item.id === id);
    }
    getFromStateByIDs(ids) {
        return this.subject
            .getValue()
            .page.data.find((item) => ids.includes(item.id));
    }
}
exports.ObservableData = ObservableData;
//# sourceMappingURL=ObservableData.js.map