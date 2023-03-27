import { NgxSearchPipe } from './ngx-search-pipe.pipe';

const DATA = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: { id: 1, name: 'Developer' } },
  { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', role: { id: 2, name: 'Architect' } },
  { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com', role: { id: 3, name: 'Admin' } }
];

describe('NgxSearchPipe', () => {
  let pipe: NgxSearchPipe;

  beforeEach(() => {
    pipe = new NgxSearchPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter the array based on the search text', () => {
    const searchText = 'doe';
    const filteredItems = pipe.transform(DATA, searchText);

    expect(filteredItems.length).toBe(2);
    expect(filteredItems[0]).toEqual(DATA[0]);
    expect(filteredItems[1]).toEqual(DATA[1]);
  });

  it('should filter the array based on the search text for nested objects', () => {
    const searchText = 'developer';
    const filteredItems = pipe.transform(DATA, searchText);

    expect(filteredItems.length).toBe(1);
    expect(filteredItems[0]).toEqual(DATA[0]);
  });

  it('should return the original array if the search text is not provided', () => {
    const filteredItems = pipe.transform(DATA, '');
    expect(filteredItems).toEqual(DATA);
  });

  it('should return an empty array if the input array is null or undefined', () => {
    const filteredItems1 = pipe.transform(null, 'doe');
    expect(filteredItems1).toEqual([]);

    const filteredItems2 = pipe.transform(undefined, 'doe');
    expect(filteredItems2).toEqual([]);
  });
});
