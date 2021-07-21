import { configureStore } from '@reduxjs/toolkit';

import shoppingReduce from '../reducer/shopping/shoppingSlice'

export default configureStore({
  reducer: {
    shopping: shoppingReduce
  }
})