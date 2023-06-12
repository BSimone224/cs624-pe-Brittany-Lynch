The following folder will showcasee understanding of creating an application
By using the Expo Client via Codespaces
The input has two parts: initializing the web application and settingup the App.js file

-- Initializing Web Application
The input is:
1. mkdir "PE06-CitiesAppNavigation"
2. cd "PE06-CitiesAppNavigation"
3. Download the GitHub repository onto your computer
4. Copy the Cities App HOS folder into PE05-Cities App, push changes to GitHub
5. Open CodeSpace in GitHub repository
6. npm install -g expo-cli
7. yarn add ios (since node_modules are not in the folder)
8. cd PE05-CitiesApp/CitiesApp
9. expo start -tunnel

-- Setting up Currency Name and Info Page
1. Make two directories: Currency Name and Currency Info
2. cd each directory then use command: touch Currency_Name.js and Currency_Info.js
3. Copy Button information from PE04 exercise to both files

-- Setting up AddCurrencyInfo.js
1. cd .. out of the Countries folder
2. touch AddCurrentInfo.js
3. import the React packages, createStackNavigator, Currency_Name.js, and Currency_Info.js
4. Use the same process as creating the tab variable as in the App.js file

-- Setting up the App.js
1. Import the StackNavigator file
2. Insert <StackNavigator /> into the NavigationContainer where the Tab Navigation is