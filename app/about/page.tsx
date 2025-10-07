import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="container">
        <div className="about-page">
          <h1 className="page-title">关于我们</h1>
          
          <div className="about-content">
            <section className="about-section">
              <h2>平台简介</h2>
              <p>
                才判文书网是面向社会公众开放的才判文书查询平台，致力于推进司法公开，
                接受社会监督，促进司法公正。本平台为学习演示项目，展示了现代化的
                才判文书管理系统设计。
              </p>
            </section>

            <section className="about-section">
              <h2>主要功能</h2>
              <ul>
                <li><strong>文书查询：</strong>提供便捷的才判文书检索功能</li>
                <li><strong>分类浏览：</strong>支持按案件类型、法院等维度浏览</li>
                <li><strong>详细展示：</strong>完整展示才判文书全文内容</li>
                <li><strong>在线阅读：</strong>支持在线阅读和打印功能</li>
              </ul>
            </section>

            <section className="about-section">
              <h2>技术特点</h2>
              <ul>
                <li>基于 Next.js 15 最新版本开发</li>
                <li>采用 TypeScript 提供类型安全</li>
                <li>响应式设计，支持多端访问</li>
                <li>现代化 UI 设计，用户体验优良</li>
              </ul>
            </section>

            <section className="about-section">
              <h2>联系方式</h2>
              <p>
                如有任何问题或建议，欢迎通过以下方式联系我们：
              </p>
              <ul>
                <li>电话：010-12345678</li>
                <li>邮箱：info@caipanwenshu.com</li>
                <li>地址：北京市朝阳区示例路123号</li>
              </ul>
            </section>

            <section className="about-section">
              <h2>免责声明</h2>
              <p className="disclaimer">
                本网站为演示项目，所有数据均为虚构，仅供学习和演示使用。
                如需查询真实才判文书，请访问中国才判文书网官方网站。
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

