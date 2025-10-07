import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <h1>才判文书网</h1>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">首页</Link>
            <Link href="/search" className="nav-link">文书检索</Link>
            <Link href="/about" className="nav-link">关于我们</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

