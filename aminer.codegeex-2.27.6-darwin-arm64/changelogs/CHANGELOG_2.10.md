## CHANGELOG v2.10

### v2.10.0
- feat: 现在聊天功能支持携带本地的文件，你可以使用以下指令体验此功能：
  - `@file` - 选中某个特定的文件
  - `@currentFile` - 选中当前文件
  - `@recentFiles` - 选中最近打开的文件
  - `@openedFiles` - 选中当前打开的文件
  
- feat: 我们对自动生成Commit Message的功能进行了优化，生成结果更加精准和优雅
```bash
  # 示例
  diff --git a/heart.py b/heart.py
  index e69de29..e8e5c76 100644
  --- a/heart.py
  +++ b/heart.py
  @@ -0,0 +1,7 @@
  +print('  ****   ****  ')
  +print(' ****** ****** ')
  +print(' ************* ')
  +print('  ***********  ')
  +print('   *********   ')
  +print('     *****     ')
  +print('       *       ')
  \ No newline at end of file

  # CodeGeeX生成的commit message
  feat: Add ASCII art to Python script
```

- fix: 修复了一些UI问题