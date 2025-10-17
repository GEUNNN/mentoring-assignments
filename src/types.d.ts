declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    GOOGLE_MAP_API: string;
    S3_API: string;
  }
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}
