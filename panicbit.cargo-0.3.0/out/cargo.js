"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.rm = exports.add = void 0;
const util_1 = require("./util");
const node_fetch_1 = __importDefault(require("node-fetch"));
async function add(cwd, pkg) {
    let { code, stderr } = await (0, util_1.exec)('cargo', ['add', '--', pkg], { cwd });
    if (code !== 0) {
        console.error(stderr);
        throw Error("`cargo add` returned with non-zero exit code");
    }
}
exports.add = add;
async function rm(cwd, pkg) {
    let { code, stderr } = await (0, util_1.exec)('cargo', ['rm', '--', pkg], { cwd });
    if (code !== 0) {
        console.error(stderr);
        throw Error("`cargo rm` returned with non-zero exit code");
    }
}
exports.rm = rm;
async function search(name) {
    let response = await (0, node_fetch_1.default)(`https://crates.io/api/v1/crates?per_page=20&q=${name}`, {
        headers: {
            "user-agent": "vscode-cargo (github.com/panicbit/vscode-cargo)"
        }
    });
    let json = await response.json();
    return json.crates;
}
exports.search = search;
//# sourceMappingURL=cargo.js.map