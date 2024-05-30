import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepository } from "../../domain/useCases/getRepository";

interface GetRepositoryArgs {
  ownerLogin: string;
  repositoryName: string;
}

export const fetchRepositoryDetail = createAsyncThunk(
  'repoDetail/fetchRepositoryDetail',
  async ({ ownerLogin, repositoryName }: GetRepositoryArgs, { rejectWithValue }) => {
    try {
      const response = await getRepository(ownerLogin, repositoryName);
      return response;
    } catch (error) {
      const errorResponse = error as Error;
      return rejectWithValue(errorResponse.message);
    }
  }
);
