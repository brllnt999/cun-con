declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URL: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
      PUBLIC_DOMAIN: string
      UPLOADTHING_TOKEN: string
      DATABASE_AUTH_TOKEN: string
      UPLOADTHING_APP_ID: string
      CRON_SECRET: string
      PREVIEW_SECRET: string
      UPLOADTHING_HOST: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
