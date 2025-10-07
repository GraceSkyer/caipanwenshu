'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import DocumentCard from '@/components/DocumentCard';
import SearchBar from '@/components/SearchBar';
import { mockDocuments } from '@/data/mockData';

export default function SearchPage() {
  const [filteredDocuments, setFilteredDocuments] = useState(mockDocuments);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (query: string) => {
    setSearchPerformed(true);
    
    if (!query.trim()) {
      setFilteredDocuments(mockDocuments);
      return;
    }

    const filtered = mockDocuments.filter(doc => 
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.caseNumber.toLowerCase().includes(query.toLowerCase()) ||
      doc.court.toLowerCase().includes(query.toLowerCase()) ||
      doc.caseType.toLowerCase().includes(query.toLowerCase()) ||
      doc.summary.toLowerCase().includes(query.toLowerCase()) ||
      doc.fullText.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  return (
    <Layout>
      <div className="container">
        <div className="search-page">
          <h1 className="page-title">文书检索</h1>
          <SearchBar onSearch={handleSearch} />
          
          {searchPerformed && (
            <>
              <div className="search-results-header">
                <p className="results-count">共找到 {filteredDocuments.length} 篇相关文书</p>
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
            </>
          )}

          {!searchPerformed && (
            <div className="search-tips">
              <h2>搜索提示</h2>
              <ul>
                <li>可以通过案号、案由、当事人姓名、法院名称等关键词进行搜索</li>
                <li>支持模糊搜索，输入部分关键词即可</li>
                <li>搜索不区分大小写</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

