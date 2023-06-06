The following folder will showcasee understanding of creating an application
By using the Expo Client via Codespaces
The input has two parts: initializing the web application and settingup the App.js file

-- Initializing Web Application
The input is:
1. mkdir "PE05-CitiesApp"
2. cd "PE05-CitiesApp"
3. Download the GitHub repository onto your computer
4. Copy the Cities App HOS folder into PE05-Cities App, push changes to GitHub
5. Open CodeSpace in GitHub repository
6. npm install -g expo-cli
7. yarn add ios (since node_modules are not in the folder)
8. cd PE05-CitiesApp/CitiesApp
9. expo start -tunnel

-- Setting up Countries Page
1. Make two directories: Countries and AddCountry
2. cd each directory then use command: touch Countries.js and AddCountry.js
3. Copy information from Cities.js to Countries.js and AddCity.js to AddCountry.js
4. Replace every instance of "cities" or "city" to "country" or "countries"
5. Replace every instance of "countries" or "country" to "currency"

-- Setting up the App.js
1. Import the required packages (React, NavigationContainer, createBottomTabNavigator, LogBox)
2. Add two additional import statements that point to Countries and AddCountry
3. Add two additional lines for TabNavigation with this.state.addcountries
4. Rename the buttons AddCountry and Countries
