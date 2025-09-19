export interface NEWS {
  id: number;
  cover_image: string;
  title_la: string;
  title_en: string;
  content_la: string;
  content_en: string;
  publish: boolean;
  publish_on: Date;
  created_at: Date;
  updated_at: Date;
}
export interface Protal {
  id: number;
  client_count: string;
  service_count: string;
  online_support: string;
  created_at: Date;
  updated_at: Date;
}
