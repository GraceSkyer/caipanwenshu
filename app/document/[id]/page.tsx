import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import { mockDocuments } from '@/data/mockData';

interface PageProps {
  params: { id: string };
}

export default function DocumentDetail({ params }: PageProps) {
  const document = mockDocuments.find(doc => doc.id === params.id);

  if (!document) {
    notFound();
  }

  return (
    <Layout>
      <div className="container">
        <div className="document-detail">
          <div className="detail-header">
            <h1 className="detail-title">{document.title}</h1>
            <div className="detail-meta">
              <div className="meta-row">
                <span className="meta-label">案号：</span>
                <span className="meta-value">{document.caseNumber}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">审理法院：</span>
                <span className="meta-value">{document.court}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">案件类型：</span>
                <span className="meta-value">{document.caseType}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">裁判日期：</span>
                <span className="meta-value">{document.trialDate}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">发布日期：</span>
                <span className="meta-value">{document.publishDate}</span>
              </div>
            </div>
          </div>

          <div className="detail-content">
            <h2>才判文书正文</h2>
            <div className="full-text">
              {document.fullText.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <button className="btn-secondary" onClick={() => window.print()}>
              打印文书
            </button>
            <button className="btn-secondary" onClick={() => window.history.back()}>
              返回列表
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
