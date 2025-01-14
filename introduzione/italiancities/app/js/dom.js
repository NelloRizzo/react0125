var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CityService } from './services/cities-service.js';
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    // la select di visualizzazione delle province
    const provinces = document.getElementById('provinces');
    // la select di visualizzazione delle città
    const cities = document.getElementById('cities');
    // creo una istanza del servizio di recupero dei dati da remoto
    const service = new CityService();
    // funzione di popolamento delle città
    const selectCity = (acronym) => __awaiter(void 0, void 0, void 0, function* () {
        // ottengo le città
        const citiesList = yield service.getCities(acronym);
        // pulisco la select
        cities.innerHTML = '';
        // aggiungo le options
        citiesList.forEach(c => {
            const opt = document.createElement('option');
            opt.innerText = c.name;
            opt.value = c.cadastralCode;
            cities.appendChild(opt);
        });
    });
    // ottengo le province dal servizio
    const provinceList = yield service.getProvinces();
    // pulisco la select
    provinces.innerHTML = '';
    // aggiungo le options
    provinceList.forEach(p => {
        const opt = document.createElement('option');
        opt.innerText = p.acronym;
        opt.setAttribute('value', p.acronym);
        provinces === null || provinces === void 0 ? void 0 : provinces.appendChild(opt);
    });
    // sull'evento change richiamo il popolamento delle città
    provinces.addEventListener('change', () => __awaiter(void 0, void 0, void 0, function* () { return yield selectCity(provinces.value); }));
    // seleziono la città della provincia selezionata dopo il popolamento delle province
    yield selectCity(provinces.value);
}));
