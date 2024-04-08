export default function homeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>Sub Header</nav>

      {children}
    </section>
  );
}
