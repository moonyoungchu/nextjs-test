import {render, screen} from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("예약 페이지 - 가능한 좌석 수가 정확한지 테스트", async() =>{
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const seatCountText = await screen.findByText(/10 seats left/i);
    expect(seatCountText).toBeInTheDocument();
})

test("예약페이지는 솔드아웃 메시지를 보여준다. 자리가 없을 때 ", async()=>{
    render(<Reservation showId={1} submitPurchase={jest.fn()} />);

    const soldOutMessage = await screen.findByRole('heading',{
        name: /sold out/i,
    });
    expect(soldOutMessage).toBeInTheDocument();

    const purchaseButton = screen.queryByRole('button',{name: /purchase/i });
    expect(purchaseButton).not.toBeInTheDocument();


})