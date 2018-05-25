export class Place {
  constructor(
    public id: number = null,
    public name: string =  '',
    public apiname: string =  '',
    public rtname: string =  '',
    public image: string =  '',
    public humidity: number = 0,
    public temp_avg: number = 0,
    public temp_high: number = 0,
    public temp_low: number = 0,
    public status: string = '',
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) { }
}
