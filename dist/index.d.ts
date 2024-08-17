import continents from './data/continents.js';
import * as regions from './data/regions.js';
export namespace countries {
    export { countriesAll as all };
}
export namespace currencies {
    export { currenciesAll as all };
}
export namespace languages {
    export { languagesAll as all };
}
export const lookup: {
    countries: any;
    currencies: any;
    languages: any;
};
export namespace callingCountries {
    let all: any[];
}
export namespace callingCodes {
    export { callingCodesAll as all };
}
import countriesAll from './data/countries.js';
import currenciesAll from './data/currencies.js';
import languagesAll from './data/languages.js';
declare const callingCodesAll: any[];
export { continents, regions };
//# sourceMappingURL=index.d.ts.map