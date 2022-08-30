/// <reference types="webpack/module" />

declare module '*.less'
declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}
