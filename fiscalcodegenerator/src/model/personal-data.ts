export type Gender = 'm' | 'f'
export default class PersonalData {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthday: Date,
        public gender: Gender,
        public birthProvince: string,
        public birthCity: string) { }
}

export const initialState: PersonalData = {
    firstName: '', lastName: '', birthProvince: 'RM', birthday: new Date(), gender: 'm', birthCity: 'B496'
}
