declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_S3_API: string;
    readonly NEXT_PUBLIC_ACCESS_TOKEN: string;
    readonly NEXT_PUBLIC_API_KEY: string;
    readonly NEXT_PUBLIC_ACCOUNT_ID: string;
  }
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
