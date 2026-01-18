#  EstateEdge

This project uses **React** with **Vite** for a fast development experience and integrates **Firebase** for backend services like Authentication, Firestore, and Hosting.

---

##  Tech Stack

- **Frontend:** React + Vite
- **Backend:** Firebase
- **Language:** JavaScript

---

## Link Preview
--

```
**[Netlify]([https://benevolent-madeleine-e6ac6d.netlify.app/])
```

--

##  Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Dev Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

##  ESLint Setup

Basic ESLint rules are included. You can expand them using:

```bash
npm install eslint eslint-plugin-react --save-dev
```

Then create or edit `.eslintrc`:

```json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["react"],
  "env": {
    "browser": true,
    "es2021": true
  }
}
```

---

##  Firebase Integration

Firebase is used for:

-  Authentication
-  Firestore
- Hosting
- Storage (optional)


##  .gitignore Contents

```gitignore
node_modules/
dist/
.env.local
.firebase/
```

---

## License

This project is licensed under the [MIT License](LICENSE).
