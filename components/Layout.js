export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="font-bold">Sports Desk</a>
          <div className="space-x-4">
            <a href="/blog" className="text-sm text-gray-700">Articles</a>
            <a href="/about" className="text-sm text-gray-700">About</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">© Sports Desk — Editorial Team</div>
      </footer>
    </div>
  )
}
