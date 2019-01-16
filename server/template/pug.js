module.exports = `
doctype html
html(lang="en")
  head
    meta(chartset="utf-8")
    meta(name="theme-color" content="#000000")
    title Koa server plug
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.css" rel="stylesheet")
    script(src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js")
    script(src="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.bundle.js")
  body
    .container 
      .row 
        .col-md-8
          h1 Hi #{you}
          p I am #{me}
        .col-md-6
          h3 测试静态页面
`