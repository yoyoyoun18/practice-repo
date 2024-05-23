import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // 슬라이스의 이름
  initialState: {
    value: 0, // 초기 상태
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// 액션 생성자는 자동으로 생성됩니다.
export const { increment, decrement } = counterSlice.actions;

// 리듀서를 내보냅니다.
export default counterSlice.reducer;
