# Country Atlas

With Country Atlas, getting necessary information about all the countries and states around the world is just one click away!

## **Instructions**
- Clone the repository and in a command line terminal navigate to the directory where the project has been cloned.
- Enter `npm install` to install the dependencies.
- To run the project in development mode type `npm run dev` and follow the guide.
- To create a production version of the project, enter `npm run build`.
  
## **Documentation**
- This project is developed using React.js + Vite.
- Api calls are made to the endpoints of [https://restcountries.com/](https://restcountries.com/).
- Axios is used to make Api calls due to its ease of use and robust features.
- Redux Toolkit is utilized for global state management.
- Since the project only includes one UI component (Dropdown), a custom dropdown component was developed instead of using one from UI libraries such as MaterialUI, PrimeReact, etc.
- Base URL of endpoints is stored in .env files for better maintainability.
- Path aliases have been set up in `vite.config.js` file to simplify imports.
- The project has been made responsive with easy to maintain media queries and CSS `clamp` function.
- For styling, `CSS Modules` are implemented to make CSS locally scoped and to prevent naming conflicts.