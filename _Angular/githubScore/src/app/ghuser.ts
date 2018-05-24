
export class User {
  constructor(
    public id: number,
    public followers: number,
    public name: string,
    public public_repos: number,
    public url: string
  ) {
  }
}
