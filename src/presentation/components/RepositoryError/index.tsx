interface IRepositoryErrorProps {
  message: string
}

export function RepositoryError({ message }: IRepositoryErrorProps) {
  return (
    <div className="flex gap-1 flex-col items-center">
      <p className="text-5xl font-bold text-red-500">Error</p>
      <p className="text-lg">{message}</p>
    </div>
  )
}
