# Props Lab

## Learning Goals

- Design and organize React components to display recipes, ingredients, and cooking steps.
- Use props to pass and manage data between components.
- Implement interactive UI elements, such as ingredient checklists, to enhance user experience.
- Apply styling to components using CSS imports.

## Lab Deliverables

## 1. Create a React App Using Vite

1. Open your terminal and run: **npm create vite@latest my-react-app**
2. When prompted:
   - Choose **React**
   - Choose **JavaScript**
3. Navigate into your project folder: **cd my-react-app**
4. Install dependencies: **npm install**
5. Start the development server: **npm run dev**
6. Open your browser and go to **http://localhost:5173/** to view your app

---

## 2. Create Components

- Create a Higher-Order component called **RecipeContainer**
- Create a presentational component called **Recipe**

---

## 3. Import and Pass Data Through Props

- Move your data file (e.g. `recipes.js`) into the `src` folder
- Import the data into `App.jsx`
- Render the `RecipeContainer` component inside `App`
- Pass the recipe data to `RecipeContainer` using props

---

## 4. Dynamically Render Data

- In `RecipeContainer`, access the recipe data through props
- Use `.map()` to loop through the recipes and render a `Recipe` component for each item
- Pass each individual recipe to the `Recipe` component as a prop
- In `Recipe`, access the data through props and render the content using JSX

5. Style the components

- Style the components however you like, have fun!

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
