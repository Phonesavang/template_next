// CSS Modules
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Global CSS files (side-effect imports)
declare module "*.css" {
  const css: void;
  export default css;
}

declare module "*.scss" {
  const css: void;
  export default css;
}

declare module "*.sass" {
  const css: void;
  export default css;
}

declare module "*.less" {
  const css: void;
  export default css;
}
