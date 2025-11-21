module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
