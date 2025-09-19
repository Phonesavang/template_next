export interface FormStep2 {
  gender: number;
  name_la: string | null;
  last_name_la: string | null;
  name_en: string | null;
  last_name_en: string | null;
  code_tel_pk: string | null;
  tel_pk: string | null;
  code_tel: string | null;
  tel: string | null;
  email: string | null;
  passworld: string | null;
  doc_type: number;
  national_no: string | null;
  expired_day: Date | null;
}

export interface FileCamera {
  url: string;
  file: File;
}
export interface ListTypeUser {
  icon: string;
  title: string;
  value: string;
  detail: string;
}
