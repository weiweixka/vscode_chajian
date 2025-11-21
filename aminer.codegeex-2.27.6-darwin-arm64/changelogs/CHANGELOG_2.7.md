## CHANGELOG v2.7

### v2.7.2
- feat: `@repo` 功能优化
  - 搜索算法优化，检索效果提升
  - 根据用户反馈，增加对以下仓库的支持 (点击 `@repo` 图标后，输入仓库名即可找到)
    - FFmpeg/FFmpeg
    - THUDM/CodeGeeX2
    - alibaba-damo-academy/FunASR
    - element-plus/element-plus
    - gradio-app/gradio
    - huggingface/trl
    - nestjs/nest
    - nginx/nginx
    - pandas-dev/pandas
    - pmndrs/zustand
    - run-llama/llama_index
    - tiangolo/fastapi
    - vercel/next.js
    - vitejs/vite
- feat：对模型选择的用户界面进行了优化，更加美观，操作上也更加直观和便捷
- feat：更新日志现在会自动弹出，这样用户就可以更轻松地了解到我们做了哪些更新和改进，不再需要手动去查找
- fix：修复了侧边栏中的 `@repo` 标签经常消失的问题，现在它可以稳定地显示在那里
- fix：修复了用户清空历史记录后产生额外请求的问题
- feat: 现在你可以通过简单地将鼠标悬停在问题上来获取错误诊断的帮助，而且还新增了一个快速修复菜单，让解决问题变得更加轻松。
- feat: 终端里新增了一个便捷的右键菜单功能，你可以选择日志并向CodeGeeX提问，当你遇到难题时，这个功能超级有用！
- fix: 我们通过改进代码补全的代码块识别机制，使其更加智能。它在提供正确的代码块方面做得更好，尤其是在Java语言中。


### v2.7.1
- fix：优化了生成commit message的逻辑，现在它更加合理和智能，可以更加顺畅地进行代码提交


### v2.7.0
- feat: 自动生成commit message
- feat: 点击侧边栏顶部icon，可新建智能对话框到编辑器标签页，可以灵活拖动智能对话框，空间调整变大，或放在更符合个人使用习惯的位置
- feat: 侧边栏支持更多直观的代码行为和效果，包括：插入到新文件、终端中运行、与当前文件对比、与剪贴板对比、折行显示
- fix: 智能问答生成内容，部分选中浮现复制按钮。解决Python 用户，写 notebook 的时候，vscode 内无法使用 command c 复制ask 内结果的问题