# 一物一世界博客后端简介

> **项目介绍:**

- 使用 Nest + TS + Mysql + Docker/CICD 技术栈
- 项目服务于博客的前端(网站地址: www.flyfrag.cn github 地址: https://github.com/one-thing-one-world/nest-end)
- 服务提供前端文章的增删改查以及登录鉴权等接口

> **依赖:**

- 推荐: node: 16.14.1

## 启动说明:

1. 连接 Nest 需要的 Mysql 数据库

```docker
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

2. 然后进入数据库

```docker
docker exec -it mysql bash
```

4. 然后创建数据库

```mysql
database create book;
```

5. 启动 Nest 项目

```bash

$ yarn install
$ yarn dev
$ yarn start:dev
```

## 最后：

> 如果您有建议或者觉得博客哪里有问题，欢迎联系作者（liujuncai6666@gmail.com）。
