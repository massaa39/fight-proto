import request from 'supertest';

describe('Search API', () => {
  it('returns status 200', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/search')
      .send({ fighter1: 'A', fighter2: 'B' });
    expect(res.status).toBe(200);
  });
});
