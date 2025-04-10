interface DashboardLayoutProps {
  children?: React.ReactNode;
}
export default async function PublicLayout({ children }: DashboardLayoutProps) {
  return <div className="h-screen mt-20"> {children}</div>;
}
