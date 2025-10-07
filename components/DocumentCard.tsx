import Link from 'next/link';
import { Document } from '@/types';

interface DocumentCardProps {
  document: Document;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <div className="document-card">
      <div className="document-header">
        <h3 className="document-title">
          <Link href={`/document/${document.id}`}>
            {document.title}
          </Link>
        </h3>
        <span className="case-number">{document.caseNumber}</span>
      </div>
      <div className="document-meta">
        <span className="meta-item">
          <strong>法院：</strong>{document.court}
        </span>
        <span className="meta-item">
          <strong>案件类型：</strong>{document.caseType}
        </span>
        <span className="meta-item">
          <strong>裁判日期：</strong>{document.trialDate}
        </span>
        <span className="meta-item">
          <strong>发布日期：</strong>{document.publishDate}
        </span>
      </div>
      <p className="document-summary">{document.summary}</p>
      <div className="document-actions">
        <Link href={`/document/${document.id}`} className="btn-primary">
          查看详情
        </Link>
      </div>
    </div>
  );
}

