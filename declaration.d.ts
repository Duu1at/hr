declare module "*.module.css";
declare module "*.module.scss";
declare module '*.svg?react';
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.jpg';
declare module '*.png';

