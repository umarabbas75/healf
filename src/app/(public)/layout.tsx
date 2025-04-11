interface PublicLayoutProps {
  children?: React.ReactNode;
}
export default async function PublicLayout({ children }: PublicLayoutProps) {
  return <div className="h-screen mt-20"> {children}</div>;
}
