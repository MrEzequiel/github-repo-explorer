# Github Repo Explorer
Application developed to search for repositories and display their information, including pull requests, issues, releases, and more, integrating with the GitHub GraphQL API. The main goal is to showcase skills with GraphQL and state management using Redux.

## Installation

### Step 1: Clone the repository
Clone the repository and install the dependencies:
```bash
git clone https://github.com/MrEzequiel/github-repo-explorer.git
cd github-repo-explorer
yarn
```

### Step 2: Configure environment variables
Create the `.env.local` file in the project root and add the following environment variables:
```
VITE_GITHUB_GRAPHQL_URL=https://api.github.com/graphql
VITE_GITHUB_AUTHORIZATION_TOKEN=YOUR_GITHUB_TOKEN
```
Access [this github documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) to create your token to access API resources.

### Step 3: Run the project
Start the project with the command:
```bash
yarn dev
```

## Technologies Used

- **Vite**
- **React.js** (Framework)
- **Tailwindcss** (Styles)
- **Axios** (HTTP request service)
- **GraphQL**
- **Redux** (State Management)

## Application Features

- **Repository Search with Infinite Scrolling**:
  - Enables continuous search of repositories without manual pagination.
  
- **Repository Information Modal**:
  - Clicking on a repository opens a modal with detailed information, including:
    - Number of stars
    - Number of forks
    - Owner information
    - Pull requests
    - Issues
  
- **User-Friendly Interface**:
  - Visual feedback for loading and errors to enhance the user experience.
  - Smooth animations for a more pleasant navigation.
  - Accessibility features to ensure all users can efficiently use the application.

These features aim to provide an intuitive and rich experience, facilitating interaction with the application and efficient retrieval of detailed repository information.

---

## Contact

- Github: <a href="https://github.com/MrEzequiel">MrEzequiel</a>
- Linkedin: <a href="https://www.linkedin.com/in/ezequiel-soares-da-silva-b64a64207">Ezequiel Soares</a>
- Portfolio: https://www.mrezequiel.com/

<br>

