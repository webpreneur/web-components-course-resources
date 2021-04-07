class Subject {

    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove );
    }
    next(load) {
        for ( const observer of this.observers ) {
            observer(load);
        }
    }
}

