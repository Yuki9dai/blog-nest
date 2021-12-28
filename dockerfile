# 引用镜像
FROM node:latest
# 作者
MAINTAINER yuki9dai

# 执行命令，创建文件夹
RUN mkdir -p /var/blog-nest
# 将目录拷贝到镜像里，也可用COPY命令
COPY . /var/blog-nest
# 执行镜像的工作目录
WORKDIR /var/blog-nest

# 配置系统变量，指定端口
ENV HOST 0.0.0.0
ENV PORT 3000

# 开放端口
EXPOSE 3000

# 容器启动命令
CMD ["node","dist/main.js"]