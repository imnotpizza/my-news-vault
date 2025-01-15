import { HttpResponse, http } from 'msw';

export const reqHandler = http.get(`msw-sample`, ({ params }) => {
  return HttpResponse.json({
    message: 'Hello world!',
  });
});
