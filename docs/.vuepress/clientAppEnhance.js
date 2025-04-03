// .vuepress/clientAppEnhance.js
import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    // 定义常量
    const BASE_DOMAIN = 'https://fox142857.github.io/';
    const LOCAL_DOMAIN = 'http://localhost:8081/';
    const SUB_PATH = 'vuepress05_text03-eslold03-/';
    
    // 创建日志函数和存储
    const logs = [];
    const logEvent = (eventName, data = {}) => {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            event: eventName,
            ...data
        };
        logs.push(logEntry);
        console.log(`[LOG] ${timestamp} - ${eventName}:`, data);
        
        // 如果可能，将日志存储到localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
            try {
                const storedLogs = JSON.parse(localStorage.getItem('vuepress_logs') || '[]');
                storedLogs.push(logEntry);
                // 限制日志数量，避免localStorage溢出
                if (storedLogs.length > 1000) {
                    storedLogs.splice(0, storedLogs.length - 1000);
                }
                localStorage.setItem('vuepress_logs', JSON.stringify(storedLogs));
            } catch (e) {
                console.error('无法存储日志到localStorage:', e);
            }
        }
        return logEntry;
    };

    // 确保在客户端环境
    if (typeof window !== 'undefined') {
        // 在全局对象上定义日志函数，确保可以从控制台访问
        window.GardeniaLogs = {
            showLogs: function() {
                console.table(logs);
                return logs;
            },
            clearLogs: function() {
                logs.length = 0;
                if (window.localStorage) {
                    localStorage.removeItem('vuepress_logs');
                }
                console.log('日志已清空');
                return true;
            },
            logEvent: logEvent
        };
        
        // 向后兼容的别名
        window.__showLogs = window.GardeniaLogs.showLogs;
        window.__clearLogs = window.GardeniaLogs.clearLogs;
        
        // 在document ready时确保日志系统已初始化
        document.addEventListener('DOMContentLoaded', () => {
            logEvent('document.DOMContentLoaded', {});
            console.log('Gardenia日志系统已初始化，可以使用window.GardeniaLogs.showLogs()查看日志');
        });
    }
    
    // 路由守卫: 处理Vue路由系统内的路径
    router.beforeEach((to, from, next) => {
        const fullPath = to.fullPath;
        logEvent('router.beforeEach', { fullPath, from: from.fullPath });
        
        // 处理相对路径，检查是否缺少前缀
        if (fullPath.startsWith('/') && !fullPath.startsWith('/' + SUB_PATH)) {
            const fixedPath = '/' + SUB_PATH + fullPath.substring(1);
            logEvent('path.corrected', { original: fullPath, fixed: fixedPath });
            next(fixedPath);
            return;
        }
        
        next();
    });
    
    // 记录路由变化
    router.afterEach((to) => {
        logEvent('router.afterEach', { path: to.fullPath });
    });
    
    // 创建日志组件
    app.component('LogViewer', {
        template: `
            <div class="log-viewer-container" v-if="isVisible">
                <div class="log-viewer-header">
                    <h3>Gardenia 事件日志</h3>
                    <div class="log-viewer-controls">
                        <button @click="clearLogs" class="log-btn clear-btn">清空日志</button>
                        <button @click="closeLogs" class="log-btn close-btn">关闭</button>
                    </div>
                </div>
                <div class="log-viewer-content">
                    <table>
                        <thead>
                            <tr>
                                <th>时间</th>
                                <th>事件</th>
                                <th>详情</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(log, index) in logs" :key="index">
                                <td>{{ formatTime(log.timestamp) }}</td>
                                <td>{{ log.event }}</td>
                                <td>{{ formatData(log) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        data() {
            return {
                isVisible: false,
                logs: []
            }
        },
        methods: {
            showLogs() {
                this.logs = window.GardeniaLogs ? window.GardeniaLogs.showLogs() : [];
                this.isVisible = true;
            },
            clearLogs() {
                if (window.GardeniaLogs) {
                    window.GardeniaLogs.clearLogs();
                    this.logs = [];
                }
            },
            closeLogs() {
                this.isVisible = false;
            },
            formatTime(timestamp) {
                const date = new Date(timestamp);
                return `${date.toLocaleTimeString()}.${date.getMilliseconds()}`;
            },
            formatData(log) {
                const data = {...log};
                delete data.timestamp;
                delete data.event;
                return JSON.stringify(data);
            }
        }
    });
    
    // 添加日志控制按钮组件
    app.component('LogControls', {
        template: `
            <div class="log-controls">
                <button @click="showLogs" class="log-btn">查看日志</button>
                <button @click="testNavigation" class="log-btn">测试导航</button>
                <button @click="testError" class="log-btn">测试错误</button>
            </div>
        `,
        methods: {
            showLogs() {
                this.$root.$emit('show-logs');
                if (window.GardeniaLogs) {
                    window.GardeniaLogs.logEvent('button.click', { action: 'showLogs' });
                }
            },
            testNavigation() {
                if (window.GardeniaLogs) {
                    window.GardeniaLogs.logEvent('button.click', { action: 'testNavigation' });
                }
                // 测试相对路径导航
                this.$router.push('/getting-started/OBM.html');
            },
            testError() {
                if (window.GardeniaLogs) {
                    window.GardeniaLogs.logEvent('button.click', { action: 'testError' });
                    window.GardeniaLogs.logEvent('system.error', { 
                        message: '测试错误', 
                        stack: new Error('测试错误').stack 
                    });
                }
                console.error('测试错误');
            }
        }
    });
    
    // 在DOM加载完成后执行
    if (typeof window !== 'undefined') {
        // 在window对象上添加处理函数
        window.__fixPath = function(url) {
            if (typeof url === 'string') {
                // 处理相对路径
                if (url.startsWith('/') && !url.includes(SUB_PATH)) {
                    const fixed = '/' + SUB_PATH + url.substring(1);
                    logEvent('path.fix', { original: url, fixed });
                    return fixed;
                }
                // 处理域名但缺少子路径的情况
                if ((url.startsWith(BASE_DOMAIN) || url.startsWith(LOCAL_DOMAIN)) && !url.includes(SUB_PATH)) {
                    let domain = url.startsWith(BASE_DOMAIN) ? BASE_DOMAIN : LOCAL_DOMAIN;
                    const fixed = url.replace(domain, domain + SUB_PATH);
                    logEvent('path.fix', { original: url, fixed });
                    return fixed;
                }
            }
            return url;
        };
        
        // 创建用于拦截点击事件的函数
        const handleDocumentClick = (event) => {
            logEvent('document.click', { 
                target: event.target.tagName, 
                id: event.target.id,
                class: event.target.className
            });
            
            // 找到最近的有onclick属性的元素
            let target = event.target;
            while (target && !target.hasAttribute('onclick')) {
                if (target.parentElement) {
                    target = target.parentElement;
                } else {
                    break;
                }
            }
            
            // 如果找到了带onclick的元素，阻止默认行为并手动处理
            if (target && target.hasAttribute('onclick')) {
                let onclickValue = target.getAttribute('onclick');
                logEvent('onclick.detected', { value: onclickValue });
                
                // 检查是否包含window.location.href赋值
                if (onclickValue.includes('window.location.href=') || 
                    onclickValue.includes('window.location.href =')) {
                    
                    // 阻止默认onclick行为
                    event.preventDefault();
                    event.stopPropagation();
                    
                    // 提取URL
                    let urlMatch = onclickValue.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
                    if (urlMatch && urlMatch[1]) {
                        let originalUrl = urlMatch[1];
                        let fixedUrl = window.__fixPath(originalUrl);
                        
                        logEvent('location.redirect', { 
                            original: originalUrl, 
                            fixed: fixedUrl,
                            element: target.tagName,
                            id: target.id,
                            class: target.className
                        });
                        
                        // 使用正确的路径进行导航
                        if (fixedUrl !== originalUrl) {
                            router.push(fixedUrl);
                        } else {
                            // 如果URL没有变化，执行原始操作
                            window.location.href = fixedUrl;
                        }
                    }
                }
            }
        };
        
        // 在客户端挂载完成后添加事件监听器
        setTimeout(() => {
            document.addEventListener('click', handleDocumentClick, true);
            logEvent('system.init', { message: 'click事件拦截器已安装' });
        }, 100);
        
        // 重写window.location.href的setter (兜底方案)
        try {
            const originalHref = Object.getOwnPropertyDescriptor(window.location, 'href');
            Object.defineProperty(window.location, 'href', {
                set(url) {
                    const fixedUrl = window.__fixPath(url);
                    logEvent('location.href.set', { original: url, fixed: fixedUrl });
                    originalHref.set.call(window.location, fixedUrl);
                },
                get: originalHref.get,
                configurable: true
            });
            logEvent('system.init', { message: '已重写location.href' });
        } catch (e) {
            logEvent('system.error', { message: '重写location.href失败', error: e.toString() });
        }
        
        // 记录页面加载完成
        window.addEventListener('load', () => {
            logEvent('window.load', { 
                url: window.location.href, 
                path: window.location.pathname 
            });
        });
        
        // 记录页面离开
        window.addEventListener('beforeunload', () => {
            logEvent('window.beforeunload', { 
                url: window.location.href 
            });
        });
        
        // 初始化日志
        logEvent('system.init', { 
            message: '日志系统初始化', 
            userAgent: navigator.userAgent,
            url: window.location.href,
            screenSize: `${window.innerWidth}x${window.innerHeight}`
        });
    }
});
