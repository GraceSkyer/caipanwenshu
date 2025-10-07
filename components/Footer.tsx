import { friendLinks } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>关于我们</h3>
            <p>才判文书网是面向社会公众开放的才判文书查询平台，致力于司法公开，接受社会监督。</p>
          </div>
          <div className="footer-section">
            <h3>友情链接</h3>
            <div className="friend-links">
              {friendLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="friend-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 才判文书网 | 版权所有 | 仅供学习演示使用</p>
        </div>
      </div>
    </footer>
  );
}

