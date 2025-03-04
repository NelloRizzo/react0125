import { Province } from "./Province";

export interface City {
    id: number;
    name: string;
    cadastralCode:string;
    zips: string;
    people: number;
    province: Province
}