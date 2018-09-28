export const imports = {
  'src/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-doc" */ 'src/doc.mdx'),
  'src/components/ButtonTest/Buttos.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-test-buttos" */ 'src/components/ButtonTest/Buttos.mdx'),
}
