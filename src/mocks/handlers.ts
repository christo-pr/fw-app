import { http, HttpResponse } from "msw";

const BASE_API_URL = import.meta.env.VITE_BASE_URL_API;

export const handlers = [
  http.post(`${BASE_API_URL}/organizations`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        id: "e0ada41d-0d1a-44dd-aa39-5389f7fddefb",
        organizationName: "Testing org",
        email: "test@org.com",
        phone: "555555555",
        firstName: "Testing",
        lastName: "Test",
      },
      { status: 200 }
    );
  }),
  http.get(`${BASE_API_URL}/organizations/:id`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        id: "e0ada41d-0d1a-44dd-aa39-5389f7fddefb",
        organizationName: "Testing org",
        email: "test@org.com",
        phone: "555555555",
        firstName: "Testing",
        lastName: "Test",
      },
      { status: 200 }
    );
  }),
  http.put(`${BASE_API_URL}/organizations/:id`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }),
  http.post(`${BASE_API_URL}/users/invite`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }),
  http.put(`${BASE_API_URL}/users/:id`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }),
];
