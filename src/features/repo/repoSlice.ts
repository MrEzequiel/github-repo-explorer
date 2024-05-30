import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositorySearched } from "../../domain/model/Repository.model";
import { IPaginationResponse } from "../../domain/model/Pagination";
import { fetchRepositories } from "./thunks";

interface RepoState {
  repositories: null | IRepositorySearched[];
  loading: boolean;
  error: string | null;
  pageInfo: IPaginationResponse['pagination'];
}


const initialState: RepoState = {
  repositories: null,
  loading: false,
  error: null,
  pageInfo: {
    size: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  },
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    resetRepositories(state) {
      state.repositories = null;
      state.pageInfo = {
        hasNextPage: false,
        hasPreviousPage: false,
        size: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<IPaginationResponse<IRepositorySearched[]>>) => {
        state.loading = false;
        state.repositories = [...(state.repositories ?? []), ...action.payload.data];
        state.pageInfo = action.payload.pagination;
      })
      .addCase(fetchRepositories.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectRepositoriesState = (state: { repo: RepoState }) => state.repo;

export const { resetRepositories } = repoSlice.actions;
export const repoReducer = repoSlice.reducer;
