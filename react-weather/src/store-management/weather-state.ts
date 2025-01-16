export interface WeatherState {
    data: any
    status: 'idle' | 'loading' | 'failed'
}

export const initialState: WeatherState = { data: null, status: 'idle' }