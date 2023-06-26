import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("band component displays correct band information ", async () => {
  const { fakeBands } = await readFakeData();

  render(<BandComponent error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

test("band error test ", () => {
  render(<BandComponent band={null} error="난에러야" />);
  const error = screen.getByRole("heading", { name: /난에러야/i });

  expect(error).toBeInTheDocument();
});
