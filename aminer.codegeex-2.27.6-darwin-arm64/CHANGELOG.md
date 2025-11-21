# Change Log

## 2.21.0
  - Add Code lens support for many convinent commands
  - `Inline Chat` Optimization
  - Fix some known issues

## 2.20.0
  - Added automatic mode - Ghost comments now appear automatically when a file is opened.  
  - Added comment adoption feature - Allows ghost comments to be directly added to the code for easy submission with the code.  
  - Added function explanation feature - Provides detailed explanations of functions, including parameters, functionality, and use cases.  
  - Added shortcuts:  
    - `Alt/Option + A`: Quickly add ghost comments.  
    - `Ctrl/Command + →`: Adopt ghost comments for the current line.  
  - Improved ghost comment density - Enhanced distribution for better clarity and relevance.

## 2.19.0
  - Add support for split CodeGeeX to multiple tabs or a new vscode window
  - Fix some known issues

## 2.18.0
  - Add Mermaid language preview support in Chat interface
  - Introduce Interactive Code Map feature:
  - Fix some known issues

## 2.17.1 - 2.17.6
  - Local mode supports the `/` command, displaying the selected code.
  - Fix some known issues

## 2.17.0
  - Improve the `@workspace` feature, it will be more fast and accurate to index the files in the workspace
  - Add a new feature `Ghost Comment` to the context menu in editors
  - Fix some known issues

## 2.16.0
  - Improve the context information above and below to answer questions related to project structure, optimize replies
  - Scheme for sidebar adaptation to different widths
  - Add a new installation and new functionality guide
  - `Code Review` now supports C，C++，Golang，C#，PHP for more professional response.
  - Fix some known issues

## 2.15.0
  - Support using `@workspace` for Q&A based on the current codebase.
  - Fix some known issues

## 2.14.0
  - `New Chat UI`:  We are excited to introduce our newly redesigned UI, which brings a fresh look and enhanced user experience to `Chat`
  - Include a `Feature Guide` page, you can find it in the `Chat` page
  - In the `Chat` page, we’ve added some recommended questions to make things easier
  - `Online chat` now automatically determines if a network search is really required
  - Add support for `Regenerate` answers from `Chat`
  - Fix some known issues


## 2.13.0
  - `Code Review` is enhanced by the services provided by [SOFTWARE SECURITY Inc.](https://www.softsafe-tech.com/)
  - The candidate question feature has been optimized, now you can get more candidate questions
  - Fix some known issues

## 2.12.0
- Add support for local mode
- Fix some known issues

## 2.11.0
- Add support for cross-file completion - Enhanced information complementarity between different files.
- Add completion optimization with line-by-line adoption - using ``⌘ + ↓ / Ctrl + ↓`` to accept a line of the current completion.

## 2.10.1
- Fix Fix some known issues

## 2.10.0
- Now the chat function supports carrying local files. You can use the following command to experience this function:
- We have optimized the function of automatically generating Commit Message, and the generated results are more accurate and elegant.
- Fix some known issues 


## 2.9.0
- The `Chat` feature can search the web in real time. Just select the `web` option to get a more up-to-date answer.”

## 2.8.0
- `Inline Chat` Optimization
- Fix some known issues

## 2.7.2
- @repo functionality optimization
    - Search algorithm optimization, retrieval effect improvement
    - Added support for new repositories
- Model selection UI enhanced for better aesthetics and ease of use.
- Update log now displays automatically for easy access to new features.
- Sidebar's @repo label stability improved.
- Fixed extra requests after clearing history.
- Error diagnosis help available on hover, with a new quick fix menu.
- Terminal's right-click menu now offers log selection and CodeGeeX assistance.
- Code completion refined for improved block recognition, especially in Java.


## 2.7.1

- Fix Optimized the logic for generating commit messages

## 2.7.0

- Add support for generating commit messages automatically.
- Sidebar's new icon adds a customizable smart dialog to the editor.
- Sidebar now offers advanced code manipulation tools.
- Fixed copying for Python notebook Q&A content with a new copy button.


## 2.6.1 - ## 2.6.2

- Fix some known issues 


## 2.6.0

- Add support for ***Remote - SSH***, now you can set `AMiner.codegeex` extensionKind to ui
```json
"remote.extensionKind": {
    "AMiner.codegeex": ["ui"],
}
```
- ***Sidebar panel*** supports almost all VSCode built-in themes!
- Fix some known issues



## 2.4.1

- Upgrage `Translation` panel to the new UI
- Fix the rendering issue when use SSE

## 2.4.0

- Add `block` option in `Generation Preference`, CodeGeeX always generates multiple lines when you need code completion
- Optimize the logic of generating global context
- Fix some known issues 

## 2.3.1 - ## 2.3.4

- Fix some known issues 

## 2.3.0

- Support switching chat/completion models
- Support using `Command + I` (`Ctrl + I` on windows) for inline asking (beta)
- Support asking questions about git repositories (beta)
- Fix some known issues

## 2.2.0

- Deletion of conversations is supported
- Optimize UI issues such as font size spacing to improve User Experience
- Code Block supports inserting into new files, comparing files, and other convenient operations
- Support generating Unit Tests using the `/tests` command.
- Fix some known issues

## 2.1.10

- Fix unsupported internationalization for vscode version between `1.68.0` and `1.73.0`

## 2.1.9

- Fix some known issues
- Add more menu to sidebar
- Add inline completion guide for new users

## 2.1.5 - 2.1.8

- Fix some known issues

## 2.1.4

- Fix some known issues
- Change the layout and styles of sidebar component
- Add support of internationalization
- Add command to focus chat input

## 2.1.0 - 2.1.3
- Fix some known issues
- Improve completions in stealth mode

## 2.0.4

- Fix some known issues

## 2.0.3

- Fix some known issues
- Improve translation command

## 2.0.2

- Fix some known issues

## 2.0.1

- Fix some know issues
- Improve suggestions of inline completion

## 2.0.0

- Add fast commands in chat, type `'/'` to see the list of commands
- Fix issues in authentication
- Fix some known issues

## 1.1.7

- Fix some known issues

## 1.1.6

- Add Chat to sidebar
- Fix some known issues

## 1.1.5

- Fix some known bugs
- Improve suggestions of inline completion

## 1.1.4

- Add Explanation command to explain code in English or Chinese
- Apply configuration changes of model in setting page immediately
- Improve inline completion
- Fix some known issues


## 1.1.1 

- Fix some known issues
- Improve the quality of suggestions
- Change the keybinding of command a new line from ``Alt/option+N`` to ``Alt/option+\``

## 1.1.0

- Fix some known issues
- Add translation component to activity bar
- Add new option Only Key Control, to get suggestions only in need (command: ``Alt/option + N`` to get suggestions in this mode)
- Add conditions to key ``Tab``, if there is some suggestions, press ``Tab`` to accept the current suggestion, otherwise, press to indent

## 1.0.9

- Fix some known issues
- Add survey component and will push the survey to some users
- Add local display support when display language is configured as Chinese
- Add conditions to keybindings to avoid conflict

## 1.0.8

- Fix bugs when using in jupyter notebook
- If current language is disabled but it's globally enabled, the logo will also change color disabled
- Enable or disable stealth mode will be memorized

## 1.0.7

- Add status bar command and user setting to disable specific languages
- Add preference for user to decide generation code line by line or automatic
- Add welcome page, new user will see the welcome page first when activate the extension or you can commmand it in command palette by codegeex.welcome-page
- Fix some known issues

## 1.0.6

- Add new mode Translation mode for user to translate code
- Add three parameters for user to change in order to get better code suggestions
- Add commands of three other modes to the right click menu
- Fix some known issues

## 1.0.5

- Add new command to get new suggestion
- Add more information to the status bar

## v1.0.0 - v1.0.4 

- Initial release
- Fix some known issues