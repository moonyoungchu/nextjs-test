import {render, screen} from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("예약 페이지 - 가능한 좌석 수가 정확한지 테스트", async() =>{
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const seatCountText = await screen.findByText(/10 seats left/i);
    expect(seatCountText).toBeInTheDocument();
})