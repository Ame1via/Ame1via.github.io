# Study Component 同步指南

这份文档用于把当前网站里的学习组件同步到另一个网站项目中。目标是做到结构清楚、步骤可复现，后续内容也能继续扩展。

## 1. 当前实现目标

当前版本是一个可以放在个人网站里的静态学习组件：

- 不依赖后端
- 不依赖数据库
- 不需要安装前端框架
- 进度使用浏览器 `localStorage` 本地保存

推荐作为独立页面存在：

```text
/study/
```

## 2. 当前项目位置

原项目路径：

```text
E:\github\Ame1via.github.io
```

新增页面：

```text
E:\github\Ame1via.github.io\study\index.html
```

首页入口：

```text
E:\github\Ame1via.github.io\index.html
```

本地预览脚本：

```text
E:\github\Ame1via.github.io\scripts\preview.mjs
```

系统说明：

```text
E:\github\Ame1via.github.io\SYSTEM.md
```

## 3. 最小同步文件

最小同步方案只需要复制：

```text
study/index.html
```

如果目标项目也有首页入口，在首页合适位置加入：

```html
<a href="/study/">Study</a>
```

如果目标项目是相对路径部署，也可以使用：

```html
<a href="./study/">Study</a>
```

## 4. 推荐目录结构

第一版：

```text
your-site/
  index.html
  study/
    index.html
```

后续扩展版：

```text
your-site/
  index.html
  study/
    index.html
  assets/
    study.css
    study.js
    study-data.js
```

第一版把 HTML、CSS、内容数据和 JS 都放在 `study/index.html` 里，适合快速迁移。内容变多以后，再拆成独立样式、脚本和数据文件。

## 5. 内容结构

页面数据分为四个大类：

```text
法律
JLPT N1
English
经济
```

法律目前包含：

```text
刑法总论
民法总则
日本国宪法
罪刑法定
结果与因果关系
故意与过失
未遂与共犯
```

JLPT N1 目前包含：

```text
文字词汇
文法
阅读
```

英语目前包含：

```text
学术阅读
语法表达
法律英语
```

经济目前包含：

```text
国民收入
货币与通胀
财政与货币政策
消费与储蓄
投资与资产市场
长期与短期模型
开放经济
```

当前题量：

```text
法律：36 题
JLPT N1：30 题
English：14 题
经济：22 题
合计：102 题
```

每个主题包含：

```text
title
label
terms
copy
questions
```

其中 `copy` 按难度分为：

```text
intro
standard
advanced
exam
```

## 6. 难度规则

当前页面有四档难度：

```text
入门
标准
高级
考试
```

设计规则：

- 入门：中文解释为主，概念短，题目直接
- 标准：中日或中英关键词并行，加入基础辨析
- 高级：强调案例、定义、相近概念与判断步骤
- 考试：隐藏多余提示，更接近限时自测和混合题型

以后新增内容时，每个主题都应尽量补齐四档说明。

## 7. 学习模式规则

当前页面有三种学习模式：

```text
知识卡片
刷题
复习
```

第一版中三种模式共用同一套内容展示，但文案和进度行为已经预留。后续可以扩展为：

- 知识卡片：只显示概念和解释
- 刷题：强调题目和选项
- 复习：优先显示错题和低掌握度主题

## 8. 进度记录方式

当前使用浏览器 `localStorage`：

```js
localStorage.setItem("ame-study-progress", JSON.stringify(progress));
```

特点：

- 不需要登录
- 不需要数据库
- 只保存在当前浏览器

如果以后需要跨设备同步，需要改成数据库或云端存储。

## 9. 本地验证

如果目标项目支持本地服务，访问：

```text
http://localhost:端口/study/
```

当前项目已验证：

```text
http://localhost:4173/study/
```

预期返回：

```text
200
```

并且页面中应能看到：

```text
Study
法律、JLPT N1、英语
刑法总论
```

## 10. 迁移到其他技术栈

### 纯 HTML 网站

直接复制：

```text
study/index.html
```

再加首页链接即可。

### React / Next / Vue 项目

推荐先保留逻辑，再拆成组件：

```text
StudyPage
SubjectRail
TopicList
DifficultyControl
LessonPanel
PracticePanel
ProgressPanel
```

数据可以放到：

```text
studyData.ts
```

或：

```text
study-data.js
```

### Jekyll / GitHub Pages

可以直接使用：

```text
study/index.html
```

GitHub Pages 会发布为：

```text
/study/
```

## 11. 给另一个 Codex 的提示词

可以把下面这段发给另一个 Codex：

```text
请把这个学习组件同步到当前网站项目中。

目标：
- 新增 /study/ 页面
- 页面内容包括法律、JLPT N1、英语
- 法律内容先使用刑法总论、民法总则、日本国宪法
- JLPT N1 和英语先使用通用学习体系
- 所有内容支持四档难度：入门、标准、高级、考试
- 支持知识卡片、刷题、复习模式
- 第一版使用纯前端静态页面，不接后端
- 进度可以用 localStorage 保存

请优先保持项目现有视觉风格，不要做成普通后台 dashboard。
如果项目是静态站，优先创建 study/index.html。
如果项目有首页，请添加进入 /study/ 的入口。
```

## 12. 后续升级顺序

当电子书资源准备好后，推荐按这个顺序升级：

1. 把 `study/index.html` 里的内容数据拆成 `assets/study-data.js`
2. 把交互逻辑拆成 `assets/study.js`
3. 把样式拆成 `assets/study.css`
4. 给法律内容增加章节、原文、关键词、题库
5. 给 JLPT N1 增加词汇、文法、阅读题库
6. 给英语增加学术阅读、法律英语、写作表达
7. 给经济增加宏观经济学章节、概念卡和计算题
8. 增加错题本和复习队列

OCR 工作流：

```text
PDF -> 页面图片 -> Tesseract OCR -> 目录/主题结构 -> 原创概念卡和练习题
```

当前 OCR 工具：

```text
C:\Program Files\Tesseract-OCR\tesseract.exe
E:\github\tools\tessdata
E:\github\tools\pydeps
```

注意：OCR 只用于抽取章节结构和知识点线索。不要把电子书原文或原题直接搬进公开网页。

## 13. 注意事项

- 不要把学习内容直接混进首页
- 不要把 `/study/` 做成密集后台面板
- 保持网站原本的暗色、安静、文字感风格
- 每个新增主题都要考虑四档难度
- 电子书资源进入后，优先做结构化整理，不要一次性塞成长文本
- 如果长期维护，建议加入 `AGENTS.md`，说明 Codex 如何维护这个组件
