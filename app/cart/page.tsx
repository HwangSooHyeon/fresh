import { age, Hello } from "./data";

export default function Cart() {
  let cart: Array<string> = ["Tomatoes", "Pasta"];
  return (
    <div>
      <Hello></Hello>
      <h4 className="title">Cart</h4>
      {cart.map((label) => CartItem(label))}
      {RedButton("blue")}
    </div>
  );
}

function Banner() {
  return <h5>현대카드 결제 행사 중</h5>;
}

function CartItem(label: string) {
  return (
    <div>
      <div className="cart-item">
        <p>{label}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}

function RedButton(color: string) {
  return <button style={{ background: color }}>빨간색 버튼</button>;
}
