import { render, screen } from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("reservations 가 존재할 때 예약내역과 purchase more 버튼 보여주기", async () => {
  render(<UserReservations userId={1} />);

  const purchaseButton = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });

  expect(purchaseButton).toBeInTheDocument();
});
