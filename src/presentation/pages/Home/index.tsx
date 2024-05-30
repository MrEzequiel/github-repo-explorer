import { useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../store"

import { fetchRepositories } from "../../../features/repo/thunks"
import { resetRepositories, selectRepositoriesState } from "../../../features/repo/repoSlice"

import { Repositories } from "./repositories"
import { DEFAULT_PAGE_SIZE } from "./config"

export function Home() {
  const dispatch = useAppDispatch()
  const { pageInfo, loading: repositoriesLoading } = useAppSelector(selectRepositoriesState)

  const search = useRef<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  function validateSearch() {
    return !!searchValue && !repositoriesLoading && searchValue !== search.current
  }

  function dispatchSearch() {
    dispatch(resetRepositories())
    dispatch(fetchRepositories({ repositoryName: search.current, first: DEFAULT_PAGE_SIZE }))
  }

  function handleLoadMore() {
    dispatch(
      fetchRepositories({ repositoryName: search.current, first: DEFAULT_PAGE_SIZE, after: pageInfo.endCursor })
    )
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateSearch()) return
    search.current = searchValue
    dispatchSearch()
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event
    if (!validateSearch()) return
    if ((key === "Enter" || key === "NumpadEnter") && event.ctrlKey) {
      search.current = searchValue
      dispatchSearch()
    }
  }

  return (
    <main>
      <header className="flex-1 max-w-screen-2xl px-9 mx-auto mt-12 mb-6">
        <p className="font-bold uppercase text-gray-500">Github Repositories</p>
        <h1 className="font-bold text-5xl mb-6 mt-2 text-purple-500">Github Explorer</h1>
      </header>

      <form className="flex items-center border-y border-gray-200/10 group focus-within:border-gray-100 transition-colors" onSubmit={handleSubmit}>
        <p className="flex items-center sm:py-4 py-3 sm:pl-24 sm:px-8 px-3 gap-3 border-r border-gray-200/10 group-focus-within:border-gray-100 transition-colors text-gray-500">Search for a repository</p>
        <input
          className="sm:px-8 px-4 sm:py-4 py-3 flex-1 bg-transparent outline-none border-none peer"
          value={searchValue}
          onChange={handleSearch}
          onKeyUp={handleKeyUp}
          autoFocus
        />
        <button
          className="sm:px-8 px-4 sm:py-4 py-3 h-full bg-purple-500 text-white transition-opacity disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={!searchValue || repositoriesLoading}
          type="submit"
        >
          Search
        </button>
      </form>

      <Repositories onLoadMore={handleLoadMore} />
    </main>
  )
}
