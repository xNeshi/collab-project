<h1 align="center">Collab Project</h1>

<p align="center">
  A web application used for finding or searching projects wherein you could collab with people with the same interests or hobbies.
</p>

<div align="center">

[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]
[![Next.JS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
[![Sanity](https://img.shields.io/badge/sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://img.shields.io/badge/sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
[![Sentry](https://img.shields.io/badge/Sentry-black?style=for-the-badge&logo=Sentry&logoColor=#362D59)](https://img.shields.io/badge/Sentry-black?style=for-the-badge&logo=Sentry&logoColor=#362D59)

</div>

# Disclaimer

This project gives full credit to JavaScript Mastery for the tutorial or guide used in this application. Check the full video on ["Next.js 15 Crash Course"](https://www.youtube.com/watch?v=Zq5fmkH0T78&t=17564s)

# Quick Start / Setup

Follow these steps for quick start of using the app

### Pre-requisites

Make sure that these are installed in your local machine

- ["git"](https://git-scm.com/)
- ["Node.js"](https://nodejs.org/en)
- ["npm"](https://www.npmjs.com/) / ["pnpm"](https://pnpm.io/)

### Installation on Local Machine

Clone the repository

```shell
git clone https://github.com/xNeshi/collab-project.git
```

Install the packages

```shell
npm install # for npm only
pnpm install # for pnpm only, add --force if needed
```

Setup the environmental variables

Replace the values with the actual credentials that you will get from Next Auth, Google Provider, Sanity, and Sentry. `SENTRY_SUPPRESS_TURBOPACK_WARNING` is optional and could be excluded depending on use cases.

```dotenv
AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_WRITE_TOKEN=

SENTRY_AUTH_TOKEN=
SENTRY_SUPPRESS_TURBOPACK_WARNING=
```

Run the project

```shell
npm run dev # for npm only
pnpm run dev # for pnpm only
```

Project should be running on http://localhost:3000
