export default [
    {
        // 右上导航航条 docs/.vuepress/README.md
        text: '概述',
        link: '/',
    },
    {
        text: '学习网站',
        children: [
            { text: 'Github', link: 'https://github.com' },
            { text: '掘金', link: 'https://juejin.cn/' },
            { text: '前端部署', link: 'https://q.shanyue.tech/deploy/'},
            { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/docs/Web'},
            { text: 'learnku', link: 'https://learnku.com/'}
        ],
    },
    {
        text: '工具',
        children: [
            {
                text: '菜鸟工具',
                link: 'https://c.runoob.com/'
            }
        ]
    },
    // {
    //     text: '其它参考',
    //     children: [
    //         { text: 'API', link: 'https://cn.bing.com/' },
    //         {
    //             text: '学习视频',
    //             children: [
    //                 { text: '慕客', link: 'https://cn.bing.com/' },
    //                 { text: 'B 站', link: 'https://cn.bing.com/' },
    //             ],
    //         }
    //     ],
    // },
]