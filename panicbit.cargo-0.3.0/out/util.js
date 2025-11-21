"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCwd = exports.exec = exports.logAndShowError = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const process = __importStar(require("child_process"));
function logAndShowError(error) {
    console.error(error);
    vscode.window.showErrorMessage(error.message);
    throw error;
}
exports.logAndShowError = logAndShowError;
function exec(cmd, args, options) {
    return new Promise((resolve, reject) => {
        let stdout = "";
        let stderr = "";
        const proc = process.spawn(cmd, args, options);
        proc.stdout?.on('data', (data) => stdout += data);
        proc.stderr?.on('data', (data) => stderr += data);
        proc.on('close', (code) => resolve({ stdout, stderr, code }));
        proc.on('error', (err) => reject(err));
    });
}
exports.exec = exec;
function getCwd() {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
        vscode.window.showErrorMessage("No open files");
        throw Error("No open files");
    }
    const cwd = path.dirname(editor.document.uri.fsPath);
    return cwd;
}
exports.getCwd = getCwd;
//# sourceMappingURL=util.js.map