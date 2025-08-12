import {createHttpClient} from './factory';
import {faker} from '@faker-js/faker';
import {HttpClient} from './provider';
describe('src > shared > providers > http > factory', () => {
  it('should do something', () => {
    const instance = createHttpClient(faker.internet.url());

    expect(instance).toBeInstanceOf(HttpClient);
  });
});
