export default function Shell({ children, page }) {
  return <main className={`page-shell page-shell--${page}`}>{children}</main>
}
