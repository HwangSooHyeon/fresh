import Link from "next/link";

export default function Home() {
  let name: string = "Hwang";
  return (
    <div>
      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
