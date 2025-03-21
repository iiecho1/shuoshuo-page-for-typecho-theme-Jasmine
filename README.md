# 仅适配Jasmine主题**V2.5.5**版本/V3暂未适配。
## 新版本（大概是0.22.2）Memos的API发生了变化，所以代码进行了部分修改。如果安装的是较新的memos，请使用`shuoshuo_new.js`。page-shuoshuo.php中的js链接也要更新为新的链接

在某个版本后Memos的api发生了变化。

建议将Memos版本锁定在0.22.2

# photo-page-for-typecho-theme-Jasmine
适配Typecho主题[Jasmine](https://github.com/liaocp666/Jasmine)的说说页面模板。说说数据来自于Memos

代码修改自:<https://immmmm.com/>

删除了部分功能：

+ 回忆
+ 搜索
+ 设置
+ 评论
+ 分类
+ 图片灯箱效果

调整了部分css样式。

如果想用原版的样式和功能，替换php文件中的js链接为原作者链接，并添加相关功能的js和html代码即可。

原作者教程见：<https://immmmm.com/bb-by-memos/>

> 新版本Memos的API发生了变化，所以代码进行了部分修改。如果安装的是较新的memos，请使用`shuoshuo_new.js`。

## 使用方法：

1. [下载](https://github.com/WShuai123/shuoshuo-page-for-typecho-theme-Jasmine/releases/download/1.0/page-shuoshuo.zip)仓库中的php文件，保存到typecho**主题文件夹**的根目录下。比如`/typecho/usr/themes/jasmine`。

2. 打开Typecho后台---管理----独立页面----新增----右侧自定义模板----说说页面

3. 修改php文件中的域名为自己部署的memos的域名。

效果图：

![](https://cdn.jsdelivr.net/gh/WShuai123/shuoshuo-page-for-typecho-theme-Jasmine@main/pic/1.jpg)

参考和修改自：

+ <https://immmmm.com/bb-by-memos/>
