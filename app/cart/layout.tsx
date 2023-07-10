export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div className="event">
        <p>현대카드 무이자 이벤트 중</p>
      </div>
    </div>
  );
}
