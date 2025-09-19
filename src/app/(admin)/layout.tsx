export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h4 className="text-red-500">Navbar</h4>
      </nav>
      {children}
    </>
  );
}
