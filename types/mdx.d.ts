// make importing mdx files work
declare module '*.mdx' {
  let MdxComponent: (props: unknown) => JSX.Element
  export default MdxComponent
}
