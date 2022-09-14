declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STORAGE_KEY: string;
    }
  }
}

export {};
