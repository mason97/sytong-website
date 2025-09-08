# 组件化底部版权信息使用说明

## 概述

这个组件化解决方案允许您将底部版权信息抽取成独立的HTML组件，并在多个页面中复用，避免重复代码。

## 文件结构

```
light/
├── components/
│   ├── copyright-footer.html    # 底部版权信息组件
│   └── README.md               # 使用说明
├── js/
│   └── components-loader.js    # 组件加载器
└── example-with-component.html # 使用示例页面
```

## 使用方法

### 方法一：自动加载（推荐）

1. **引入组件加载器脚本**
   在页面的 `</body>` 标签前添加：
   ```html
   <script src="js/components-loader.js"></script>
   ```

2. **在需要插入底部版权信息的地方添加占位元素**
   ```html
   <div data-copyright-footer="components/copyright-footer.html"></div>
   ```

3. **页面加载时会自动插入组件**

### 方法二：手动加载

```javascript
// 在指定位置插入组件
loadComponent('#footer', 'components/copyright-footer.html', 'beforeend');

// 替换指定元素的内容为组件
replaceWithComponent('#copyright-placeholder', 'components/copyright-footer.html');
```

## 示例代码

### 完整的页面示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>示例页面</title>
    <!-- 引入必要的CSS文件 -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link href="css/custom.css" rel="stylesheet">
</head>
<body>
    <!-- 页面内容 -->
    <div class="container">
        <h1>页面内容</h1>
    </div>

    <!-- Footer区域 -->
    <footer class="footer pt-50">
        <div class="container">
            <!-- Footer内容 -->
        </div>
        
        <!-- 使用组件化的底部版权信息 -->
        <div data-copyright-footer="components/copyright-footer.html"></div>
    </footer>

    <!-- 引入脚本 -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/components-loader.js"></script>
    <script src="js/custom.js"></script>
</body>
</html>
```

## 自定义组件路径

您可以通过 `data-copyright-footer` 属性指定自定义的组件路径：

```html
<!-- 使用默认路径 -->
<div data-copyright-footer></div>

<!-- 使用自定义路径 -->
<div data-copyright-footer="custom/path/to/footer.html"></div>
```

## 组件内容自定义

要修改底部版权信息的内容，只需编辑 `components/copyright-footer.html` 文件：

```html
<!-- 修改前 -->
<div class="copyright-footer text-center mt-20">
  <div class="container">
    <p class="mb-0">© <span class="current-year"></span> All Rights Reserved. <a target="_blank" href="https://www.mobanwang.com/" title="网站模板" class="text-white">网站模板</a></p>
  </div>
</div>

<!-- 修改后 -->
<div class="copyright-footer text-center mt-20">
  <div class="container">
    <p class="mb-0">© <span class="current-year"></span> 视宇通科技 版权所有</p>
  </div>
</div>
```

## 优势

1. **代码复用**：避免在每个页面重复相同的HTML代码
2. **易于维护**：只需修改一个文件即可更新所有页面的底部版权信息
3. **灵活性**：支持自定义组件路径和内容
4. **兼容性**：适用于原生HTML+CSS+JS项目，无需额外的构建工具
5. **性能优化**：组件会被缓存，避免重复加载

## 注意事项

1. 确保组件文件路径正确
2. 组件加载器需要在页面DOM加载完成后运行
3. 如果使用相对路径，请确保路径相对于当前页面正确
4. 组件内容中的CSS类名需要与现有样式兼容

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

对于不支持ES6的旧浏览器，可以使用Babel转译或使用传统JavaScript语法重写组件加载器。
