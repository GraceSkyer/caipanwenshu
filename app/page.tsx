'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import DocumentCard from '@/components/DocumentCard';
import SearchBar from '@/components/SearchBar';
import { mockDocuments } from '@/data/mockData';

export default function Home() {
  const [filteredDocuments, setFilteredDocuments] = useState(mockDocuments);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredDocuments(mockDocuments);
      return;
    }

    const filtered = mockDocuments.filter(doc => 
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.caseNumber.toLowerCase().includes(query.toLowerCase()) ||
      doc.court.toLowerCase().includes(query.toLowerCase()) ||
      doc.summary.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <h2 className="hero-title">才判文书公开平台</h2>
          <p className="hero-subtitle">司法公开 · 阳光司法 · 接受监督</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2>最新公开文书</h2>
          <p className="section-subtitle">共找到 {filteredDocuments.length} 篇文书</p>
        </div>
        
        <div className="documents-list">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))
          ) : (
            <div className="no-results">
              <p>未找到相关文书，请尝试其他关键词</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

