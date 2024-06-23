# Upload Blog in README's

## Checklist

- [ ] Make README files viewable in a Vue.js component.
- [ ] Find a way to upload them to GitHub where I will write them.
- [ ] Create my own README file reader and converter.
- [ ] Write a blog about README files.

## Write about:
- Markdown
- difference between WYSIWYG (word)
- How does it work? (https://www.markdownguide.org/getting-started/)
- Other (https://www.markdownguide.org/basic-syntax/)
- How to make your own (https://github.com/markdown/markdown.github.com/wiki/Implementations)
- Githb flavored Markdown (https://github.github.com/gfm/)
  - to convert to github md https://docs.github.com/en/rest/markdown/markdown?apiVersion=2022-11-28
  - 

- to implement gfm https://docs.github.com/en/rest/markdown/markdown?apiVersion=2022-11-28#render-a-markdown-document-in-raw-mode--fine-grained-access-tokens
## Why use octokit for api request?
Octokit and Axios serve different purposes, so let’s compare them:

Octokit:
GitHub-Specific: Octokit is designed specifically for interacting with GitHub’s RESTful API. It provides an easy way to programmatically access GitHub features and data, such as repositories, issues, pull requests, and user profiles.
All-in-One: Octokit integrates three main libraries:
API client: Handles REST API requests, GraphQL API queries, and authentication.
App client: Manages GitHub Apps, installations, webhooks, and OAuth.
Action client: Pre-authenticated API client for single repositories.
GitHub Integration: If you’re building GitHub-related features (like displaying repositories on a portfolio website), Octokit simplifies the process.
Axios:
General HTTP Client: Axios is a versatile HTTP client for making requests to any API, not just GitHub. It’s widely used in web development.
Not GitHub-Specific: Unlike Octokit, Axios doesn’t have built-in GitHub-specific features.
Flexible: You can use Axios for various APIs, not just GitHub.
In summary, choose Octokit when working with GitHub data, and use Axios for general HTTP requests. 😊


# Another blog:
- How to create your own npm package (vuejs)
