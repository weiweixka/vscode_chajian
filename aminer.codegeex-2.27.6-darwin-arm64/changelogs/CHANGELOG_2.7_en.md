## CHANGELOG v2.7

### v2.7.2
- feat: @repo functionality optimization
    - Search algorithm optimization, retrieval effect improvement
    - Based on user feedback, added support for the following repositories (click on the @repo icon and enter the repository name to find it)
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

- feat: The user interface for model selection has been optimized, making it more aesthetically pleasing and more intuitive and convenient to operate
- feat: The update log now pops up automatically, so users can more easily learn about our updates and improvements without having to manually search for them
- fix: Fixed the issue of the @repo label in the sidebar frequently disappearing, now it can display stably
- fix: Fixed the issue of additional requests being generated after the user cleared the history
- feat: Now you can get help with error diagnosis just by hovering over a problem, and there’s a new quick fix menu to make solving issues a breeze.
- feat: There’s a nifty new right-click menu in the terminal that lets you select a log and ask CodeGeeX for help. Super useful for when you’re stumped!
- fix: We’ve made the code completion smarter by improving how it recognizes blocks of code. It’s better at giving you the right block of code, especially in Java.


### v2.7.1

- fix: Optimized the logic for generating commit messages, making it more reasonable and intelligent, allowing for smoother code submission.


### v2.7.0

- feat: Automatically generate commit messages.
- feat: Clicking on the icon at the top of the sidebar creates a new smart dialog in the editor tab, allowing flexible dragging of the smart dialog, space adjustments to increase in size, or placing it in a location - that better fits personal usage habits.
- feat: The sidebar supports more intuitive code behaviors and effects, including: inserting into a new file, running in the terminal, comparing with the current file, comparing with the clipboard, and wrapping lines.
- fix: Smart question and answer generation content, with a copy button appearing when partially selected. This solves the issue for Python users where, when writing a notebook, the result inside the “ask” cannot be copied using command c within vscode.