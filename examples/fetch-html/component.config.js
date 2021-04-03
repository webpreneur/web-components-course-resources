import { ValidationUtils } from './validation-utils.js';

export class ComponentConfig {
    constructor(...params) {
      if (params.length !== 1) {
        throw new Error("Only one configuration object is accepted!");
      }
      const config = params[0];
  
      if ( !ValidationUtils.isObject(config) ) {
        throw new TypeError("Component config must be an object!");
      }
      for (let [key, value] of Object.entries(config)) {
        if ( !this.configInterfaceMap.has(key) ) {
          throw new Error(`
            '${key}' is not a valid component config key!
          `)
        }
        this[key] = value;
      }

    }
    get configInterfaceMap() {
      return new Map([
        ['templateUrl', String],
        ['styleUrls', Array],
        ['template', String],
        ['styles', String],
      ]);
    }
}