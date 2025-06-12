# GitHub Pages 部署指南

## 目录

1. [简介](#简介)
2. [前提条件](#前提条件)
3. [创建GitHub账号](#创建github账号)
4. [创建GitHub仓库](#创建github仓库)
5. [安装Git](#安装git)
6. [配置Git](#配置git)
7. [克隆仓库到本地](#克隆仓库到本地)
8. [准备网站文件](#准备网站文件)
9. [提交和推送代码](#提交和推送代码)
10. [配置GitHub Pages](#配置github-pages)
11. [自定义域名（可选）](#自定义域名可选)
12. [维护和更新网站](#维护和更新网站)
13. [常见问题解答](#常见问题解答)
14. [参考资源](#参考资源)

## 简介

GitHub Pages 是 GitHub 提供的一项免费服务，允许用户直接从 GitHub 仓库托管静态网站。本指南将详细介绍如何将「对对队小组官网」部署到 GitHub Pages 上，使其可以通过互联网访问。

## 前提条件

在开始部署之前，请确保您已准备好以下内容：

- 一台可以连接互联网的计算机
- 基本的命令行操作知识
- 网站的所有文件（HTML、CSS、JavaScript、图片等）

## 创建GitHub账号

1. 访问 [GitHub官网](https://github.com/)
2. 点击右上角的「Sign up」按钮
3. 按照提示填写用户名、电子邮件地址和密码
4. 完成验证步骤
5. 选择免费计划
6. 完成账号设置

## 创建GitHub仓库

1. 登录您的GitHub账号
2. 点击右上角的「+」图标，选择「New repository」
3. 在「Repository name」字段中输入仓库名称，建议使用：`username.github.io`（将username替换为您的GitHub用户名）
4. 添加描述（可选）：「对对队小组官网」
5. 选择「Public」（公开）
6. 勾选「Initialize this repository with a README」
7. 点击「Create repository」按钮

## 安装Git

### Windows系统

1. 访问 [Git官网](https://git-scm.com/downloads)
2. 下载Windows版本的Git安装程序
3. 运行安装程序，按照默认设置进行安装
4. 安装完成后，打开「Git Bash」或「命令提示符」验证安装：
   ```
   git --version
   ```

### macOS系统

1. 打开终端
2. 安装Homebrew（如果尚未安装）：
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. 使用Homebrew安装Git：
   ```
   brew install git
   ```
4. 验证安装：
   ```
   git --version
   ```

### Linux系统

对于Ubuntu/Debian：
```
sudo apt-get update
sudo apt-get install git
```

对于Fedora：
```
sudo dnf install git
```

验证安装：
```
git --version
```

## 配置Git

1. 打开终端或命令提示符
2. 设置您的用户名和电子邮件地址（使用您在GitHub注册的邮箱）：
   ```
   git config --global user.name "您的GitHub用户名"
   git config --global user.email "您的GitHub邮箱"
   ```

## 克隆仓库到本地

1. 打开终端或命令提示符
2. 导航到您想要存储项目的目录：
   ```
   cd 目标目录路径
   ```
3. 克隆您的GitHub仓库：
   ```
   git clone https://github.com/username/username.github.io.git
   ```
   （将username替换为您的GitHub用户名）
4. 进入克隆的仓库目录：
   ```
   cd username.github.io
   ```

## 准备网站文件

1. 将您的网站文件复制到克隆的仓库目录中
2. 确保根目录包含以下文件：
   - `index.html`（网站首页）
   - `styles.css`（样式表）
   - `script.js`（JavaScript脚本）
   - `images/`目录（包含所有图片）
   - `fonts/`目录（如果使用自定义字体）
   - `favicon.ico`（网站图标）

## 提交和推送代码

1. 在仓库目录中，添加所有文件到Git：
   ```
   git add .
   ```
2. 提交更改，添加描述信息：
   ```
   git commit -m "初始网站文件上传"
   ```
3. 推送到GitHub：
   ```
   git push origin main
   ```
   注意：如果您的默认分支是master而不是main，请使用：
   ```
   git push origin master
   ```

## 配置GitHub Pages

1. 在GitHub网站上，导航到您的仓库
2. 点击「Settings」选项卡
3. 在左侧菜单中，点击「Pages」
4. 在「Source」部分，选择「Deploy from a branch」
5. 在「Branch」下拉菜单中，选择「main」或「master」分支，然后选择「/(root)」文件夹
6. 点击「Save」按钮
7. 等待几分钟，GitHub会自动构建和部署您的网站
8. 部署完成后，您将看到一条消息，显示您的网站URL（通常是https://username.github.io）

## 自定义域名（可选）

如果您想使用自己的域名而不是默认的github.io域名，请按照以下步骤操作：

1. 购买域名（如通过阿里云、腾讯云、GoDaddy等服务商）
2. 在您的域名注册商控制面板中，添加以下DNS记录：
   - 如果使用apex域名（如example.com）：
     添加4个A记录，指向GitHub Pages的IP地址：
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - 如果使用www子域名（如www.example.com）：
     添加一个CNAME记录，指向您的GitHub Pages网站：username.github.io
3. 在您的GitHub仓库中，创建一个名为CNAME的文件（无扩展名）
4. 在CNAME文件中，添加您的自定义域名（如example.com或www.example.com）
5. 提交并推送CNAME文件到GitHub：
   ```
   git add CNAME
   git commit -m "添加自定义域名"
   git push origin main
   ```
6. 在GitHub仓库的「Settings」>「Pages」中，您可以在「Custom domain」部分看到您的自定义域名
7. 勾选「Enforce HTTPS」选项，启用HTTPS（可能需要等待24小时才能生效）

## 维护和更新网站

当您需要更新网站内容时，请按照以下步骤操作：

1. 在本地仓库中修改相应的文件
2. 添加修改的文件到Git：
   ```
   git add .
   ```
3. 提交更改，添加描述信息：
   ```
   git commit -m "更新网站内容：具体描述"
   ```
4. 推送到GitHub：
   ```
   git push origin main
   ```
5. GitHub会自动重新构建和部署您的网站，通常在几分钟内完成

## 常见问题解答

### Q: 我的网站没有显示最新内容

A: GitHub Pages可能需要几分钟时间来更新。如果等待10分钟后仍未更新，请检查以下几点：
- 确认您已成功推送更改到正确的分支
- 检查GitHub Actions选项卡中是否有构建错误
- 尝试清除浏览器缓存或使用隐私模式访问

### Q: 我的自定义域名不工作

A: 请检查以下几点：
- DNS记录是否正确设置（可能需要24-48小时才能生效）
- CNAME文件是否正确创建并包含您的域名
- 在GitHub仓库设置中是否正确配置了自定义域名

### Q: 我的网站样式或图片无法加载

A: 请检查以下几点：
- 确保所有文件路径正确（区分大小写）
- 检查是否使用了相对路径而不是绝对路径
- 验证所有资源文件（CSS、图片等）是否已推送到GitHub

## 参考资源

- [GitHub Pages 官方文档](https://docs.github.com/cn/pages)
- [Git 基础教程](https://git-scm.com/book/zh/v2)
- [Markdown 基础语法](https://www.markdownguide.org/basic-syntax/)
- [HTML5 W3School 教程](https://www.w3school.com.cn/html5/index.asp)
- [CSS3 W3School 教程](https://www.w3school.com.cn/css3/index.asp)
- [JavaScript W3School 教程](https://www.w3school.com.cn/js/index.asp)

---

祝您部署顺利！如有任何问题，请随时查阅上述参考资源或在GitHub社区寻求帮助。