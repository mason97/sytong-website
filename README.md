# 视宇通科技官网项目

## 项目概述

视宇通科技官网是一个基于原生HTML+CSS+JavaScript的企业官网项目，专注于夜视与热成像技术的展示和推广。项目采用响应式设计，支持多设备访问。

## 技术栈

- **前端框架**: 原生HTML5 + CSS3 + JavaScript
- **UI框架**: Bootstrap 5
- **图标库**: Font Awesome
- **轮播组件**: Owl Carousel
- **图片预览**: Venobox
- **动画效果**: jQuery + 自定义动画
- **构建工具**: 无（原生项目）

## 项目结构

```
light/
├── index.html              # 主页
├── about.html              # 关于我们
├── products.html           # 产品中心
├── join-us.html            # 加入我们
├── faq.html                # 常见问题
├── contacts.html           # 联系我们
├── 404.html                # 404错误页面
├── css/                    # 样式文件
│   ├── bootstrap.min.css   # Bootstrap框架
│   ├── custom.css          # 自定义样式
│   ├── responsive.css      # 响应式样式
│   ├── helper.css          # 辅助样式
│   ├── all.min.css         # Font Awesome图标
│   ├── owl.carousel.min.css # 轮播组件样式
│   ├── owl.theme.default.min.css
│   └── venobox.css         # 图片预览样式
├── js/                     # JavaScript文件
│   ├── jquery-3.6.0.min.js # jQuery库
│   ├── bootstrap.bundle.min.js # Bootstrap JS
│   ├── custom.js           # 自定义脚本
│   ├── contact.js          # 联系表单脚本
│   ├── components-loader.js # 组件加载器
│   ├── owl.carousel.min.js # 轮播组件
│   ├── venobox.min.js      # 图片预览
│   ├── waypoints.min.js    # 滚动触发
│   ├── jquery.counterup.min.js # 数字计数动画
│   ├── jquery.mixitup.min.js # 产品筛选
│   ├── classie.js          # CSS类操作
│   └── validator.min.js    # 表单验证
├── img/                    # 图片资源
│   ├── logo.png            # 网站Logo
│   ├── slider/             # 轮播图片
│   ├── products/           # 产品图片
│   ├── about/              # 关于我们图片
│   ├── contact/            # 联系页面图片
│   └── ...
└── components/             # 组件文件（已删除）
    ├── copyright-footer.html
    └── README.md
```

## 页面功能分析

### 1. 主页 (index.html)
**功能特性:**
- 轮播展示区域（6张图片）
- 公司宣传视频播放
- 产品展示网格（6个产品）
- 产品筛选功能（MixItUp.js）
- 响应式布局

**数据需求:**
- 轮播图片数据
- 产品信息数据
- 视频资源链接
- 公司统计数据

**接口需求:**
- 无外部API调用
- 静态数据展示

### 2. 关于我们 (about.html)
**功能特性:**
- 公司概况展示
- 统计数据展示（计数器动画）
- 自研芯片技术介绍
- 团队信息展示

**数据需求:**
- 公司基本信息
- 统计数据（成立时间、员工数、认证数、客户数）
- 技术参数数据
- 团队成员信息

**接口需求:**
- 无外部API调用
- 静态数据展示

### 3. 产品中心 (products.html)
**功能特性:**
- 产品列表展示
- 产品分类筛选
- 产品详情链接

**数据需求:**
- 产品基本信息
- 产品图片
- 产品规格参数
- 产品分类信息

**接口需求:**
- 无外部API调用
- 静态数据展示

### 4. 加入我们 (join-us.html)
**功能特性:**
- 招聘信息展示
- 公司文化介绍
- 联系方式

**数据需求:**
- 招聘职位信息
- 公司文化内容
- 联系方式

**接口需求:**
- 无外部API调用
- 静态数据展示

### 5. 常见问题 (faq.html)
**功能特性:**
- FAQ列表展示
- 问题分类
- 展开/收起功能

**数据需求:**
- 常见问题列表
- 问题分类
- 答案内容

**接口需求:**
- 无外部API调用
- 静态数据展示

### 6. 联系我们 (contacts.html)
**功能特性:**
- 联系信息展示
- 地图展示
- 社交链接

**数据需求:**
- 公司地址
- 联系电话
- 邮箱地址
- 社交账号链接

**接口需求:**
- 无外部API调用
- 静态数据展示

### 7. 404错误页面 (404.html)
**功能特性:**
- 错误提示
- 返回首页链接

**数据需求:**
- 错误提示信息
- 导航链接

**接口需求:**
- 无外部API调用
- 静态数据展示

## 外部资源依赖

### CDN资源
- **Bootstrap 5**: 本地文件
- **Font Awesome**: 本地文件
- **jQuery**: 本地文件

### 第三方服务
- **YouTube**: 用于视频嵌入
  - 链接: `https://www.youtube.com/@SytongOptics`

### 外部链接
- **公司官网**: `https://www.sytongoptics.com`
- **百度地图**: 用于地址展示

## 数据接口需求

### 1. 联系表单接口
**接口地址**: `contact.php`
**请求方法**: POST
**请求参数**:
```json
{
  "name": "string",      // 姓名
  "email": "string",     // 邮箱
  "phone": "string",     // 电话
  "subject": "string",   // 主题
  "message": "string"    // 消息内容
}
```

**响应格式**:
```json
{
  "type": "success|danger",
  "message": "string"
}
```

### 2. 组件加载接口
**功能**: 动态加载HTML组件
**实现**: 通过Fetch API加载本地HTML文件
**支持组件**:
- 版权信息组件
- 其他可复用组件

## 静态数据需求

### 1. 公司信息
```json
{
  "companyName": "深圳市视宇通科技有限公司",
  "establishedYear": "2013",
  "employeeCount": "260",
  "certificationCount": "138",
  "customerCount": "1928",
  "address": "深圳市龙华区大浪街道浪花路8号名牌时尚创意广场3A层",
  "phone": "0755-29681280",
  "email": "support@sytong2013.com",
  "website": "https://www.sytongoptics.com"
}
```

### 2. 产品数据
```json
{
  "products": [
    {
      "id": "fm",
      "name": "FM",
      "category": "热成像",
      "description": "Multispectral 640×512 Lens50mm LRF1000M",
      "image": "img/products/fm.png"
    },
    {
      "id": "gm",
      "name": "GM", 
      "category": "热成像",
      "description": "640×512 Lens50mm LRF1000M",
      "image": "img/products/gm.png"
    }
    // ... 更多产品
  ]
}
```

### 3. 技术参数
```json
{
  "chipTechnology": {
    "name": "自研ThermoHight技术",
    "features": [
      {
        "title": "自主研发传感器",
        "description": "新一代非制冷氧化钒焦平面阵列，核心技术自主掌控，稳定性提升30%。"
      },
      {
        "title": "超高灵敏度检测", 
        "description": "像素级降噪与自适应算法将NETD降至18mK，灵敏度提升38%。"
      }
      // ... 更多特性
    ]
  }
}
```

## 部署要求

### 服务器环境
- **Web服务器**: Apache/Nginx
- **PHP版本**: 7.4+ (用于联系表单处理)
- **文件权限**: 755 (目录) / 644 (文件)

### 必需文件
- `contact.php` - 联系表单处理脚本
- 所有静态资源文件
- 图片资源文件

### 配置要求
- 启用URL重写（用于SEO友好链接）
- 配置MIME类型
- 设置缓存策略

## 浏览器兼容性

- **Chrome**: 70+
- **Firefox**: 65+
- **Safari**: 12+
- **Edge**: 79+
- **IE**: 不支持

## 性能优化

### 已实现优化
- 图片压缩
- CSS/JS文件压缩
- 响应式图片
- 懒加载（部分实现）

### 建议优化
- 启用Gzip压缩
- 设置浏览器缓存
- 使用CDN加速
- 图片格式优化（WebP）

## 维护说明

### 内容更新
- 产品信息更新：修改`products.html`
- 公司信息更新：修改各页面静态内容
- 图片更新：替换`img/`目录下对应文件

### 功能扩展
- 添加新页面：参考现有页面结构
- 添加新功能：在`js/custom.js`中扩展
- 样式调整：修改`css/custom.css`

## 联系信息

- **开发团队**: 视宇通科技
- **技术支持**: support@sytong2013.com
- **项目地址**: 内部项目

---

*最后更新: 2024年*
