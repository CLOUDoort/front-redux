import { createSlice } from '@reduxjs/toolkit'

export interface TempState {
    tempValue: string
    count: number
}

const initialState: TempState = {
    tempValue: '',
    count: 0,
}

//action과 reducer를 한번에 작성
export const tempSlice = createSlice({
    name: 'temp', // slice의 이름
    initialState, // 초기화
    reducers: {
        // 객체로 반환, 모두 함수로 구성
        // Action
        setTemp: (state, action) => {
            // setTemp라는 액션, 액션 발행 후 값 변화 . 단순한 JS 문법 가능, 시간 걸리는 비동기 작업은 안된다는 약간의 제약이 있다.
            state.tempValue = action.payload
        },
        setCount: (state, action) => {
            state.count = action.payload
        },
    },
})

export const { setTemp, setCount } = tempSlice.actions

export default tempSlice.reducer
// store에 전달
