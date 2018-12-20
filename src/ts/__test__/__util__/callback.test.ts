import { fetchData } from '../../util/callback';

test('callback test', done => {
  const callback = (data: string) => {
    expect(data).toBe('callback');
    done();
  };
  fetchData(callback);
});
