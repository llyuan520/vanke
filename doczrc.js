/**
 * Created by liuliyuan on 2018/9/27.
 */

export default {
  plugins: [

  ],
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://cdn.bootcss.com/antd/3.5.4/antd.min.css'
      }]
    },
    body:{},
    footer: {
      scripts: [
        {
          src:'https://cdn.bootcss.com/antd/3.5.4/antd-with-locales.min.js'
        },
        {
          src:'https://cdn.bootcss.com/antd/3.5.4/antd.min.js'
        }]
    }
  }
}
