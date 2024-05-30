export function RepositoryLoading() {
  return (
    <div className="p-4 flex gap-4 border-y border-x border-gray-400 max-w-sm">
      <div className="w-24 h-24 bg-gray-400 animate-pulse"></div>
      <div className="flex-1 w-full flex flex-col gap-2">
        <div className="text-sm font-bold bg-gray-400 animate-pulse h-10"></div>
        <div className="text-sm bg-gray-400 animate-pulse h-24"></div>
      </div>
    </div>
  )
}
