export class NotFound extends Error {
  constructor(message: string = 'Not found') {
    super(message)
    this.name = 'NotFound'
  }
}
