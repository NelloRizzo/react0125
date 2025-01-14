var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const CITIES_URL = "https://raw.githubusercontent.com/matteocontrini/comuni-json/refs/heads/master/comuni.json";
export class CityService {
    getJsonCities() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(CITIES_URL);
            return yield response.json();
        });
    }
    getAllCities() {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield this.getJsonCities();
            return cities.map(c => ({
                code: c.codice,
                name: c.nome,
                cadastralCode: c.codiceCatastale,
                zips: c.cap,
                people: c.popolazione,
                province: {
                    code: c.provincia.codice,
                    name: c.provincia.nome,
                    acronym: c.sigla,
                    region: {
                        code: c.regione.codice,
                        name: c.regione.nome,
                        area: {
                            code: c.zona.codice,
                            name: c.zona.nome
                        }
                    }
                }
            }));
        });
    }
    getCities(acronym) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getAllCities()).filter(c => c.province.acronym === acronym);
        });
    }
    getProvinces() {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield this.getAllCities();
            return Array.from(new Map(cities.map(c => [c.province.code, c.province])).values()).sort((p1, p2) => p1.name < p2.name ? -1 : 1);
        });
    }
    getCityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getAllCities()).filter(c => c.code === id).shift();
        });
    }
}
