import { createSlice } from '@reduxjs/toolkit'

export interface TempState {
    tempValue: string
    count: number
}

const initialState: TempState = {
    tempValue: '',
    count: 0,
}

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        // Action
        setTemp: (state, payload) => {
            // setTemp라는 액션, 액션 발행 후 값 변화 . 단순한 JS 문법 가능, 시간 걸리는 비동기 작업은 안된다는 약간의 제약이 있다.
            state.tempValue = payload.payload
        },
        setCount: (state, payload) => {
            state.count = payload.payload
        },
    },
})

export const { setTemp, setCount } = tempSlice.actions

export default tempSlice.reducer
