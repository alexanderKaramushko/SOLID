// Dependency Inversion Principle

/**
 * @class Database
 * @classdesc this class doesn't change its implementation
 */
export class Database {
  private readonly client: any;

  constructor(client: any) {
    this.client = client;
  }

  clientGet(): any {
    return this.client.clientGet();
  }

  clientPost(value: any): void {
    return this.client.clientPost(value);
  }
}

/**
 * @class HttpClient
 * @classdesc this class is used for the control inversion
 */
export class HttpClient {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async clientGet(): Promise<unknown> {
    const response = await window.fetch(this.url);

    return response.json();
  }

  clientPost(): void {}
}

/**
 * @class LocalStorage
 * @classdesc this class is used for the control inversion
 */
export class LocalStorage {
  private readonly localeStorage: Storage;
  private readonly key: string;

  constructor(key: string) {
    this.localeStorage = window.localStorage;
    this.key = key;
  }

  clientGet(): string | null {
    return this.localeStorage.getItem(this.key);
  }

  clientPost(value: string): void {
    return this.localeStorage.setItem(this.key, value);
  }
}

// const db = new Database(new HttpClient('https://jsonplaceholder.typicode.com/users'));
// const savedDb = new Database(new LocalStorage('users'));

// savedDb.clientPost(db.clientGet());
