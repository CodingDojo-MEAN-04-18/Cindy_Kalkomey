
export class Quote {
  content: string;
  author: string;
  votes: number;
  created_at: Date;
  updated_at: Date;


  constructor() {
    this.content = '';
    this.author = '';
    this.votes = 0;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
