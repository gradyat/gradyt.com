# Grady Thompson

This is Grady Thompson's website. Built with Eleventy, hosted by GitHub Pages. [gradyt.com](https://www.gradyt.com/)

![Eleventy](https://img.shields.io/badge/Eleventy-000?logo=eleventy&logoColor=fff&style=flat)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=githubpages&logoColor=fff&style=flat)

## Status

[![GitHub package.json version](https://img.shields.io/github/package-json/v/gradyat/gradyat.github.io?color=%23BE5718)](package.json)
[![Website](https://img.shields.io/website?up_message=online&down_message=offline&down_color=darkred&up_color=darkgreen&url=https%3A%2F%2Fwww.gradyt.com%2F)](https://www.gradyt.com/)
[![Deployment GitHub Action Status](https://img.shields.io/github/actions/workflow/status/gradyat/gradyat.github.io/deploy.yml?color=%236912BF&label=deployment%20%28GitHub%20Actions%29)](https://github.com/gradyat/gradyat.github.io/actions/workflows/deploy.yml)
[![Deployment GitHub Pages Status](https://img.shields.io/github/deployments/gradyat/gradyat.github.io/github-pages?color=%236912BF&label=deployment%20%28GitHub%20Pages%29)](https://github.com/gradyat/gradyat.github.io/deployments/activity_log?environment=github-pages)

## Building

- Prerequisite: Node.js v18 and npm
- Install dependencies: `npm install`
- Run development: `npm start`

## Deploying

This site is deployed via a GitHub Actions [deploy workflow](https://github.com/gradyat/gradyat.github.io/actions/workflows/deploy.yml) that is manually ran on GitHub.com. This workflow bumps the verison in [`package.json`](package.json), builds the site with Eleventy, and publishes it to GitHub Pages.
