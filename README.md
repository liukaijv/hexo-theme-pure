# hexo-theme-pure

偿试用hexo搭建博客，找了好多主题，要不太花哨了要不简洁的又不合我意；于是自己写了一个，保证够简洁够轻量级。

## 使用

clone项目下来，放在themes目录

```bash
git clone git@github.com:liukaijv/hexo-theme-pure.git
```

进入目录，把`_config.example.yml`文件改名为`_config.yml`

```bash
cd hexo-theme-pure
mv _config.example.yml config.yml
```

设置当前主题为`hexo-theme-pure`


## 额外依赖

站内搜索需要生成xml的数据文件，用的是`hexo-generator-searchdb`

```bash
npm install hexo-generator-searchdb --save
```

样式用的是sass写的，需要安装`hexo-renderer-scss`

```bash
npm install hexo-renderer-scss --save
```

## 主题配置

配置项也没多少，要配置的`menu`顶部的主菜单；`widgets`显示哪个看个人爱好；`logo_text`logo名称；需要评论`allow_comment`改为`true`，设置`gittalk`相关的；`links`是设置友情链接。

```yml
# Header
menu:
  首页: /
  JAVA: /categories/java/
  PHP: /categories/php
  归档: /archives
rss: /atom.xml

# Content
excerpt_link: true

# Sidebar
sidebar: right
widgets:
- recent_posts
- category
#- tag
#- link
- tagcloud
#- archive

# widget behavior
archive_type: 'monthy'
archive_format: 'YYYY/MM'
show_count: false

# Miscellaneous
favicon:
logo_text: Blog
show_logo: true
show_author: false
allow_search: true

# comments
allow_comment: false
gitalk:
  cdnCssUrl: https://unpkg.com/gitalk/dist/gitalk.css
  cdnJsUrl: https://unpkg.com/gitalk@latest/dist/gitalk.min.js
  clientID:
  clientSecret:
  repo:
  owner:
  admin:
  distractionFreeMode: false
  language: en
  perPage: 10

# links
links:
  Baidu: http://www.baidu.com/

```

评论用的是gittalk，参数和官网差不多,[https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)，唯一差别是`admin: githubUser`不是这样`admin: ['githubUser']`

## Demo

[我现在用的](https://liukaijv.github.io/)


