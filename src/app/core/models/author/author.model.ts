export class Author {
  private _key: string;
  private _top_subjects: string[];
  private _birth_date: string;
  private _work_count: number;
  private _name: string;

  constructor(obj: any) {
    this._key = obj.key;
    this._top_subjects = obj.top_subjects;
    this._birth_date = obj.birth_date;
    this._work_count = obj.work_count;
    this._name = obj.name;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get top_subjects(): string[] {
    return this._top_subjects.slice(0, 5);
  }

  set top_subjects(value: string[]) {
    this._top_subjects = value;
  }

  get birth_date(): string {
    return this._birth_date;
  }

  set birth_date(value: string) {
    this._birth_date = value;
  }

  get work_count(): number {
    return this._work_count;
  }

  set work_count(value: number) {
    this._work_count = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get authorImage(): string {
    return `https://covers.openlibrary.org/a/id/${this._key}-M.jpg`;
  }
}
