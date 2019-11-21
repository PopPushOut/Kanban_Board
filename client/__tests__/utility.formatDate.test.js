import { formatDate } from '../utils/utility';

describe('formatDate Function', () => {
  it('returns JS Date in local time YYYY-MM-DD hh:mm:ss string format', () => {
    const date = new Date('2015-03-27T09:32:54.427Z');
    expect(formatDate(date)).toEqual('2015-03-27 11:32:54');
  });
});
