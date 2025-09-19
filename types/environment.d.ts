declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE_URL: string;
      // เพิ่ม environment variables อื่นๆ ตามต้องการ
    }
  }
}

export {};
