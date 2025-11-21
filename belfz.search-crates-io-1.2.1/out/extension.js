'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const axios_1 = require("axios");
const dropRightWhile = require('lodash.droprightwhile');
const range = require('lodash.range');
const DEPENDENCIES_MARKER = '[dependencies]';
const mapCrateToCompletionItem = (currentLineReplaceRange) => (crate) => {
    const { description, max_version, name } = crate;
    const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Text);
    item.additionalTextEdits = [vscode.TextEdit.delete(currentLineReplaceRange)];
    item.insertText = `${name} = "${max_version}"`;
    item.detail = `${max_version}`;
    item.documentation = `${description}`;
    return item;
};
const isInDependenciesSection = (document, activeLineIndex) => {
    const lines = dropRightWhile(range(0, activeLineIndex).map(i => document.lineAt(i).text), (line) => !line.startsWith('['));
    return (lines[lines.length - 1] || '') === DEPENDENCIES_MARKER;
};
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "search-crates-io" is now active!');
    vscode.languages.registerCompletionItemProvider({ language: 'toml', pattern: '**/Cargo.toml' }, {
        provideCompletionItems(document, position, token, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const lineIndex = position.line;
                const { text } = document.lineAt(lineIndex);
                if (!isInDependenciesSection(document, lineIndex)) {
                    return;
                }
                const currentLineReplaceRange = new vscode.Range(new vscode.Position(lineIndex, 0), new vscode.Position(lineIndex, text.length));
                try {
                    const { data } = yield axios_1.default.get(`https://crates.io/api/v1/crates?page=1&per_page=20&q=${text}&sort=`);
                    const crates = data.crates;
                    return crates.map(mapCrateToCompletionItem(currentLineReplaceRange));
                }
                catch (err) {
                    console.error(err);
                }
            });
        },
        resolveCompletionItem(item, token) {
            return item;
        }
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map