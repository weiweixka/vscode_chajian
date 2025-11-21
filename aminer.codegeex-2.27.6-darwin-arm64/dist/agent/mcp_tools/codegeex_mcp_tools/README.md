# CodeGeeX MCP Tools

这是CodeGeeX Model Control Protocol (MCP)的工具包，提供了一系列用于模型控制的工具和接口。

## 安装

```bash
pip install -e .
```

## 主要功能

- 前端工具：提供文件操作、目录创建等基础功能
- 后端工具：提供代码修复、注释添加等高级功能
- 服务器组件：提供基于FastAPI的服务器实现

## 目录结构

```
codegeex_mcp_tools/
├── src/
│   ├── frontend/     # 前端工具实现
│   ├── backend/      # 后端工具实现
│   └── server.py     # 服务器实现
├── setup.py          # 包安装配置
└── README.md         # 本文档
```

## 依赖要求

- Python >= 3.7
- FastAPI >= 0.68.0
- uvicorn >= 0.15.0
- 其他依赖见setup.py
