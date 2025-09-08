/**
 * 组件加载器 - 用于动态加载HTML组件
 * 适用于原生HTML+CSS+JS项目
 */

class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    /**
     * 加载组件HTML内容
     * @param {string} componentPath - 组件文件路径
     * @returns {Promise<string>} 组件HTML内容
     */
    async loadComponent(componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`加载组件失败: ${componentPath}`, error);
            return '';
        }
    }

    /**
     * 将组件插入到指定元素中
     * @param {string} selector - 目标元素选择器
     * @param {string} componentPath - 组件文件路径
     * @param {string} position - 插入位置: 'beforeend', 'afterbegin', 'beforebegin', 'afterend'
     */
    async insertComponent(selector, componentPath, position = 'beforeend') {
        const targetElement = document.querySelector(selector);
        if (!targetElement) {
            console.error(`未找到目标元素: ${selector}`);
            return;
        }

        // 检查是否已经缓存了组件
        if (!this.components.has(componentPath)) {
            const componentHTML = await this.loadComponent(componentPath);
            this.components.set(componentPath, componentHTML);
        }

        const componentHTML = this.components.get(componentPath);
        if (componentHTML) {
            targetElement.insertAdjacentHTML(position, componentHTML);
        }
    }

    /**
     * 替换指定元素的内容为组件
     * @param {string} selector - 目标元素选择器
     * @param {string} componentPath - 组件文件路径
     */
    async replaceWithComponent(selector, componentPath) {
        const targetElement = document.querySelector(selector);
        if (!targetElement) {
            console.error(`未找到目标元素: ${selector}`);
            return;
        }

        // 检查是否已经缓存了组件
        if (!this.components.has(componentPath)) {
            const componentHTML = await this.loadComponent(componentPath);
            this.components.set(componentPath, componentHTML);
        }

        const componentHTML = this.components.get(componentPath);
        if (componentHTML) {
            targetElement.innerHTML = componentHTML;
        }
    }
}

// 创建全局实例
window.componentLoader = new ComponentLoader();

// 便捷方法
window.loadComponent = (selector, componentPath, position) => {
    return window.componentLoader.insertComponent(selector, componentPath, position);
};

window.replaceWithComponent = (selector, componentPath) => {
    return window.componentLoader.replaceWithComponent(selector, componentPath);
};

// 自动加载底部版权信息组件
document.addEventListener('DOMContentLoaded', function() {
    // 查找所有带有 data-copyright-footer 属性的元素
    const copyrightElements = document.querySelectorAll('[data-copyright-footer]');
    
    copyrightElements.forEach(element => {
        const componentPath = element.getAttribute('data-copyright-footer') || 'components/copyright-footer.html';
        window.componentLoader.insertComponent(element, componentPath, 'beforeend');
    });
});
