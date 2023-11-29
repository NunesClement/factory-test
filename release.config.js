const config = {
    branches: ['release'],
    // plugins: [
    //     '@semantic-release/commit-analyzer',
    //     ['@semantic-release/git', {
    //         "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
    //         "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    //     }],
    //     '@semantic-release/github'
    // ]
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
          "@semantic-release/git",
          {
            "assets": [
              "docs/CHANGELOG.md",
              "package.json",
              "package-lock.json"
            ],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
          }
        ],
        "@semantic-release/github"
      ]
};

module.exports = config;
