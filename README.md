![image](assets/Title.png)

_____________________________![Simulator Screen Recording - iPhone 14 Pro Max - 2023-08-06 at 21 34 21](https://github.com/Dexter-s-Laboratory/Superbox/assets/104655832/61dbf020-a35c-40f5-bedc-4fef3d41cde6) ___________________________________________

![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![React-Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

# Overview
**An all-in-one mobile app (ios, android) for a comic book retail storefront where users can buy and sell items.**
This project is an MVP for a feature-rich mobile application. The scale and necessary features were dictated by our client - effective and intuitive UI for finding and purchasing products, managing listings and personal information, rating sellers, messaging other users, dark mode, and admin priveleges for banning users.


## Meet The Team
* [Patrick Nilan](https://github.com/pnilan) - Product Manager
* [Ahu Su](https://github.com/ahusu) - Architect Owner
* [Aaron Brandenberger](https://github.com/trilly-con-queso) - UI Owner
* [Joseph Camarena Castro](https://github.com/mexicanpepe) - Full Stack Software Engineer
* [Oscar Carvente](https://github.com/ocarvente) - Full Stack Software Engineer
* [Tim DeCillis](https://github.com/timdecillis) - Full Stack Software Engineer
* [Holly Stefan](https://github.com/HollyB-collab) - Full Stack Software Engineer
* [Muzammil Waheed](https://github.com/muzammilwaheedisme) - Full Stack Software Engineer

> # Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [API Documentation](#api-documentation)

## Features
* Sign In / Sign Up
* Market Place
* Profile
* Add / Delete Items
* Chat
* Checkout Cart

## Profile
The app offers two distinct profile screens -

User Profile, wherein the user can update their personal information, adjust settings, contact Superbox, and quickly navigate to their Messages, Listings, Purchases, or Public Profile.

Public Profile, which displays the user's profile as it will be seen by other users, including the options to message the displayed user, find other users, or ban the displayed user (when the current user is logged in as admin).

Under the hood, the user information (once it is retrieved from the API after a successful login or profile creation) is held in state in App.js, and distibuted to other components via useContext. When a new user's public profile is called for, an additional API call is made.

Navigation to the logged in user's messages, listings, and other screens, as well as edits to their personal information and settings, will make additional request to the API in order to update and retrieve information from the database.


## Getting Started

1. From terminal, clone repo
```
https://github.com/Dexter-s-Laboratory/Superbox.git
```

2. Install xcode via app store, and have application open.

https://apps.apple.com/us/app/xcode/id497799835?mt=12

3. Install dependencies
```
npm install
```
5. Start Simulator
```
npx expo start

tap i to open ios view
tap a to open android view

```

## API Documentation
