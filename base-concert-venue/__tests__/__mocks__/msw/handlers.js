import { rest } from "msw";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const {showId} = req.params;

    return res(ctx.json({ show: fakeShows[showId] }));
  }),
  rest.get("http://localhost:3000/api/users/:userId/reservations", async (req, res, ctx) => {
    const { fakeReservations } = await readFakeData();
    return res(ctx.json({ userReservations: fakeReservations }));
  }),
];



