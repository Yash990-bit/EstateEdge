# 🔥 React + Vite + Firebase (JavaScript)

This project uses **React** with **Vite** for a fast development experience and integrates **Firebase** for backend services like Authentication, Firestore, and Hosting.

---

## 📦 Tech Stack

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

## 🚀 Getting Started

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

## 🧪 ESLint Setup

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

## 🔐 Firebase Integration

Firebase is used for:

- 🔐 Authentication
- ☁️ Firestore
- 🌐 Hosting
- 📦 Storage (optional)

Create `.env.local` and add your Firebase config:

```env
VITE_API_KEY=AIzaSyDuAplMDF5yCMsEGkY04bIa8NEogYQ1zjs
VITE_AUTH_DOMAIN=auction-house-ccf62.firebaseapp.com
VITE_PROJECT_ID=auction-house-ccf62
VITE_STORAGE_BUCKET=auction-house-ccf62.appspot.com
VITE_MESSAGING_SENDER_ID=296018073339
VITE_APP_ID=1:296018073339:web:3ff13f303b3e45aefd425e
VITE_MEASUREMENT_ID=G-THN0TL1LN7
```

Access these in code:

```js
import.meta.env.VITE_API_KEY;
```

---

## 📁 .gitignore Contents

```gitignore
node_modules/
dist/
.env.local
.firebase/
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
