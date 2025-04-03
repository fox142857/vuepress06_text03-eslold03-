import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base : "/vuepress03_text03-eslold03-/",

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Gardenia',
            description: '应用程序文档网站',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Gardenia',
            description: 'The application documentation website of Gardenia.',
        },
    },

    head: [
        // 站点图标
        ["link", { rel: "icon", href: "/vuepress03_text03-eslold03-/ico/main-logo.svg" }],

        // SEO
        [
            "meta",
            {
                name: "keywords",
                content:
                "程序员, Java, 大学生"
            },
        ],

        // 百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        ],
    ],
    
    plugins: [
        // https://github.com/tolking/vuepress-plugin-img-lazy
        ["img-lazy"],

        // https://github.com/znicholasbrown/vuepress-plugin-code-copy
        [
            "vuepress-plugin-code-copy",
            {
                successText: "代码已复制",
            },
        ],
    ],
    
    bundler: viteBundler(),

    theme: defaultTheme({
        logo: '/ico/main-logo.svg',
        // editLink: false,
        editLinkText: '前往下载',
        docsRepo: 'https://github.com/fox142857/vuepress03_text03-eslold03-',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: '/download.html',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                
                // 导航栏
                navbar: [
                    {
                        text: '快速上手',
                        link: '/getting-started.html',
                    },
                    {
                        text: '项目简介',
                        link: '/introduction.html',
                    },
                    {
                        text: '前往下载',
                        link: '/download.html',
                    },
                ],
                editLinkText: '前往下载',
            },
            '/en/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Languages',
                selectLanguageAriaLabel: 'Select language',
                
                // navbar
                navbar: [
                    {
                        text: 'Get Started',
                        link: '/en/getting-started.html',
                    },
                    {
                        text: 'Introduction',
                        link: '/en/introduction.html',
                    },
                    {
                        text: 'Download',
                        link: '/en/download.html',
                    },
                ],
                editLinkText: 'Go to Download',
            },
        },
        repo: "https://github.com/fox142857",
    }),
})