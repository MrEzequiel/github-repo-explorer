import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchRepository } from "../../domain/useCases/searchRepositories";

interface FetchRepositoriesArgs {
  repositoryName: string;
  first: number;
  after?: string;
}

export const fetchRepositories = createAsyncThunk(
  'repo/fetchRepositories',
  async ({ repositoryName, first, after }: FetchRepositoriesArgs, { rejectWithValue }) => {
    try {
      const response = await searchRepository(repositoryName, first, after);
      return response;
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  }
);
