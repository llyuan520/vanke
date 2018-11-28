# Upload

## API

### props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|-------|
| accept | 上传的文件类型 | string | null |
| action | 上传的地址 | string | null |
| directory | 是否支持上传文件夹 | boolean | false |
| data | 上传所需参数或返回上传参数的方法 | object or function(file) {return object} | null |
| defaultFileList | 默认已经上传的文件列表 | [object] | null |
| disabled | 是否禁用 | boolean | false |
| fileList | 已经上传的文件列表（受控） | [object] | null |
| headers | 设置上传的请求头部 | object | null |
| listType | 上传列表的内建样式 | ["text", "picture", "picture-card"] | "text" |
| multiple | 是否支持多选文件，开启后按住 ctrl 可选择多个文件 | boolean | false |
| name | 发到后台的文件参数名	| string | "file" |
| showUploadList | 是否展示uploadList，可设为一个对象，用于单独设定showPreviewIcon和showRemoveIcon | boolean or {showPreviewIcon:boolean, showRemoveIcon:boolean} | true |
| supportServerRender | 服务端渲染时需要打开这个 | boolean | false |
| withCredentials | 上传请求时是否携带cookie | boolean | false |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |

### methods
| 方法 | 说明 | 类型 |
|------|------|------|
| beforeUpload | 上传文件之前的钩子，若返回false则停止上传 | function(file, fileList) {return boolean} |
| onChange | 上传文件改变时的状态，上传中、完成、失败都会调用这个函数 | function(file, fileList, event) |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) |
| onRemove | 点击移除文件时的回调，返回值为false时不移除 | function(file) {return boolean} |

[参考文档链接](https://ant.design/components/upload-cn/)