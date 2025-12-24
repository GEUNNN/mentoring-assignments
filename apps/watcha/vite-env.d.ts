interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_S3_API: string;
  readonly VITE_ACCESS_TOKEN: string;
  readonly VITE_API_KEY: string;
  readonly VITE_ACCOUNT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>> | string;
  export default content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
