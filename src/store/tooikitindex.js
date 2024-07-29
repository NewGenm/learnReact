import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
export let chaneNumThunk = createAsyncThunk('numSlice/asyncChangeNum', async (params) => {
    let res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000)
        }, 1000);
    })
    return res
})
let mesSlice = createSlice({
  // 切片名
  name: "mesSlice",
  // 默认值
  initialState: {
    msg: "hello",
  },
  // 修改方法
  reducers: {
    changeMes(state, action) {
      state.msg = action.payload;
    },
  },
});
export let { changeMes } = mesSlice.actions;

let numSlice = createSlice({
  name: "numSlice",
  initialState: {
    num: 123,
  },
  reducers: {
    changeNum(state, action) {
        console.log('action', action)
      state.num += action.payload;
    },
  },
  extraReducers: (chunk) => {
    chunk.addCase(chaneNumThunk.pending, () => {
        console.log('进入pending')
    }).addCase(chaneNumThunk.fulfilled, (state, action) => {
        console.log('action', action)
        state.num = action.payload
    })
  }
});
export let { changeNum } = numSlice.actions;
let store = configureStore({
  reducer: {
    mesReducer: mesSlice.reducer,
    numReducer: numSlice.reducer,
  },
});
export default store;
