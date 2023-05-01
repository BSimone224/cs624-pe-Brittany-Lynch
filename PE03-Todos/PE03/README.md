The following folder will showcasee understanding of creating an application
By using the Expo Client via Codespaces
The input has two parts: initializing the web application and settingup the App.js file

-- Initializing Web Application
The input is:
1. mkdir "PE03-Todos"
2. cd "PE02-Todos"
3. mkdir PE03
4. cd PE03
5. npm install -g expo-cli
6. npx expo start
7. expo init todos
8. cd todos
9. npm run ios (I used ios because I have an iPhone)

-- Setting up the App.js
1. Import the required packages (React, TextInput, ScrollView, Text, and Image)
2. Import the image that you will be using from the assets folder
3. In the Image component, use source = {Icon} as that is what we defined the image's pathway to be
4. Use View + each component along with the style function to help create the application
5. Ensure that each of the changes are occurring in the Expo application 

-- Setting up the Todos.js
1. Use Todo as a constant that will be used in the App.js file
2. This sets the foundation for the TodoList and the Button file

-- Setting up the TodoList.js
1. Import the required packages (View)
2. Import the Todo file so that it can be referenced later in the App.js file
3. Use the functions of deleteTodo and toggleComplete so that when we use the Submit button in the next section of this assignment

-- Setting up the Button.js
1. Import the required packages (Text, StyleSheet, Pressable)
2. Use StyleSheet to create the button that we are looking to have in the application
3. We also use the Pressable function to make the Submit button act when pressed

-- Output
A screenshot of the output can be efound in the PE03-Todos