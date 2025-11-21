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
exports.cargo_rm = exports.cargo_add = void 0;
const vscode = __importStar(require("vscode"));
const util = __importStar(require("./util"));
const util_1 = require("./util");
const cargo = __importStar(require("./cargo"));
async function cargo_add() {
    let cwd = util.getCwd();
    let input = await vscode.window.showInputBox();
    if (input === undefined) {
        return;
    }
    let packages = await cargo.search(input);
    let items = packages.map((pkg) => ({
        label: pkg.name,
        detail: `All-time DLs: ${pkg.downloads} Recent DLs: ${pkg.recent_downloads}`,
        description: `(${pkg.max_version}) ${pkg.description}`,
    }));
    let selection = await vscode.window.showQuickPick(items);
    if (selection === undefined) {
        return;
    }
    let name = selection.label;
    console.log(`Adding dependency '${name}'`);
    await cargo.add(cwd, name).catch(util_1.logAndShowError);
    vscode.window.showInformationMessage(`Successfully added dependency '${name}'`);
}
exports.cargo_add = cargo_add;
async function cargo_rm() {
    let cwd = util.getCwd();
    let name = await vscode.window.showInputBox();
    if (name === undefined) {
        return;
    }
    console.log(`Removing dependency '${name}'`);
    await cargo.rm(cwd, name).catch(util_1.logAndShowError);
    vscode.window.showInformationMessage(`Successfully removed dependency '${name}'`);
}
exports.cargo_rm = cargo_rm;
//# sourceMappingURL=commands.js.map