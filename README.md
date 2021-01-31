# GuideCX: Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology

- React
- TypeScript
- GraphQL (Apollo Client)
- Tailwind CSS

## Setup

- install dependencies

```
npm install
```

- setup environment variables

```
cp .env.example .env
```

- [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and save it to your `.env` file. The scopes you require depends on the type of data you're wanting to fetch. The following list is a good start:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

- **Explore the Github GraphQL API**: If you're new to the Github GraphQL API, you may consider spending a few minutes exploring the public schema to get an idea of what data is available. See [Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer).

## Problem
