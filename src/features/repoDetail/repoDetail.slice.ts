import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepositoryDetail } from './thunks';
import { IRepository } from '../../domain/model/Repository.model';

interface RepoDetailState {
  repository: IRepository | null;
  loading: boolean;
  error: string | null;
}

const initialState: RepoDetailState = {
  repository: null,
  loading: false,
  error: null,
};

const repoDetailSlice = createSlice({
  name: 'repoDetail',
  initialState,
  reducers: {
    resetRepositoryDetail(state) {
      state.repository = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositoryDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositoryDetail.fulfilled, (state, action: PayloadAction<IRepository>) => {
        state.loading = false;
        state.repository = action.payload;
      })
      .addCase(fetchRepositoryDetail.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectRepoDetailState = (state: { repoDetail: RepoDetailState }) => state.repoDetail;

export const { resetRepositoryDetail } = repoDetailSlice.actions;
export const repoDetailReducer = repoDetailSlice.reducer;
