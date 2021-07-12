import supertest from "supertest";
import app from '../app';

const request = supertest(app);

describe('Test endpoint responses', () => {
  describe('Test the / endpoint', () => {
    it('gets the / endpoint', async () => {
      const response = await request.get('/');
      expect(response.status).toEqual(200);
    });
  });

  describe('Test a wrong endpoint', () => {
    it('send message to browser for endpoint "/404"', async () => {
      const response = await request.get('/404');
      expect(response).withContext(
        'Wrong route, please enter a valid route, such as: http://localhost:3000/main'
      );
    });
  });
});
