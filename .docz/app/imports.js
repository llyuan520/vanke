export const imports = {
  'src/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-doc" */ 'src/doc.mdx'),
}
