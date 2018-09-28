/**
 * Created by liuliyuan on 2018/9/27.
 */
import doczPluginNetlify from "docz-plugin-netlify";

export default {
  plugins: [
    doczPluginNetlify('.docz/dist')
  ],
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.9.3/antd.min.css'
      }]
    },
    body:{},
    footer: {
      scripts: [
        {
          src:'https://cdnjs.cloudflare.com/ajax/libs/antd/3.9.3/antd-with-locales.min.js'
        },
        {
          src:'https://cdnjs.cloudflare.com/ajax/libs/antd/3.9.3/antd.min.js'
        }]
    }
  }
}
