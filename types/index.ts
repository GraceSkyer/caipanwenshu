export interface Document {
  id: string;
  caseNumber: string;
  title: string;
  court: string;
  caseType: string;
  trialDate: string;
  publishDate: string;
  summary: string;
  fullText: string;
}

export interface FriendLink {
  name: string;
  url: string;
}

