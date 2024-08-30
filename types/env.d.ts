// types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        BASE_URL: string;
        PAGE_SIZE: number;
        MARKDOWN_IS_ENABLED: boolean;
        // Add other variables here
    }
}
