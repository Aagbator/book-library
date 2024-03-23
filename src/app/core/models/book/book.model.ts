export class Book {
  private _isbn: string[];
  private _author_key: string[];
  private _author_name: string[];
  private _edition_count: number;
  private _cover_edition_key: string;
  private _first_publish_year: number;
  private _number_of_pages: number;
  private _title: string;

  constructor(obj: any) {
    this._isbn = obj.isbn;
    this._author_key = obj.author_key;
    this._author_name = obj.author_name;
    this._edition_count = obj.edition_count;
    this._cover_edition_key = obj.cover_edition_key;
    this._first_publish_year = obj.first_publish_year;
    this._number_of_pages = obj.number_of_pages;
    this._title = obj.title;
  }

  get author_key(): string[] {
    return this._author_key;
  }

  set author_key(value: string[]) {
    this._author_key = value;
  }

  get author_name(): string[] {
    return this._author_name;
  }

  set author_name(value: string[]) {
    this._author_name = value;
  }

  get edition_count(): number {
    return this._edition_count;
  }

  set edition_count(value: number) {
    this._edition_count = value;
  }

  get first_publish_year(): number {
    return this._first_publish_year;
  }

  set first_publish_year(value: number) {
    this._first_publish_year = value;
  }

  get cover_edition_key(): string {
    return this._cover_edition_key;
  }

  set cover_edition_key(value: string) {
    if (value === undefined || value === null) {
      throw new Error('Invalid cover_edition_key');
    }
    this._cover_edition_key = value;
  }

  get number_of_pages(): number {
    return this._number_of_pages;
  }

  set number_of_pages(value: number) {
    this._number_of_pages = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get authorImage(): string {
    return `https://covers.openlibrary.org/a/id/${this._author_key[0]}-M.jpg`;
  }

  get bookCover(): string {
    return this.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${this.cover_edition_key}-M.jpg` : '';
  }

  get isbn(): string {
    return this._isbn[0];
  }

  set isbn(value: string[]) {
    this._isbn = value;
  }
}
