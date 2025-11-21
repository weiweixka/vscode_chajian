# Cargo.toml Snippets for VSCode

This extension contains code snippets for Cargo.toml files for Rust projects.
It is based on [manifest format spec of Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html).

## Supported languages (file extensions)

+ TOML (.toml)

## Usage

![demo](https://github.com/kevinkassimo/cargo-toml-snippets/raw/master/images/demo.gif)

## Snippets

Below is an **INCOMPLETE** list of supported snippets.

|      Example Trigger | Content                           |
| -------------------: | --------------------------------- |
|            `package` | basic package table               |
|       `package-full` | full package table                |
|              `PKG_*` | package entry related snippets    |
|       `dependencies` | dependency table                  |
|   `dev-dependencies` | dev dependency table              |
| `build-dependencies` | build dependency table            |
|              `DEP_*` | dependency entry related snippets |
|            `profile` | basic profile table               |
|       `profile-full` | full profile table                |
|          `profile.*` | common profile presets            |
|           `features` | features table                    |
|              `patch` | patch table                       |
|           `TARGET_*` | target specific tables            |
|          `workspace` | basic workspace table             |
|     `workspace-full` | full workspace table              |
|            `replace` | replace table                     |
|            `example` | example table array               |
|                `bin` | binary table array                |
|                `lib` | library table                     |