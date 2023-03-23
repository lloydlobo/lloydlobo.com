---
title: "Dictionary Web App"
excerpt: "Real-world dictionary web app using the Dictionary API. The app allows users to search for words using an input field, view the Free Dictionary API's response for the searched word, play the audio file for a word when available, switch between serif, sans serif, and monospace fonts, and switch between light and dark themes. The project also aims to provide a seamless user experience across different screen sizes and devices."
coverImage: "/assets/projects/dictionary-web-app/cover.png"
date: "2023-01-01T05:35:07.322Z"
ogImage:
  url: "/assets/projects/dictionary/cover.png"
repository: "https://github.com/lloydlobo/dictionary-web-app"
live: "https://dictionary-web-app-vert.vercel.app"
projectType: "personal"
stack: "ReactJS NextJS TailwindCSS"
---

## Project Overview

In this project, I built a real-world dictionary web app using the Dictionary API.
The app allows users to search for words using an input field, view the Free
Dictionary API's response for the searched word, play the audio file for a word
when available, switch between serif, sans serif, and monospace fonts,
and switch between light and dark themes.

The project also aims to provide a seamless user experience across different
screen sizes and devices.

![Mobile views of dictionary web app](/assets/projects/dictionary-web-app/mobile-dark-light.jpg)

![JSON api output of dictionary api](/assets/projects/dictionary-web-app/json.png)

## Tools and Technologies Used

- HTML, CSS, and JavaScript
- Visual Studio Code as the code editor
- Sass for CSS pre-processing
- Gulp for automating tasks, such as compiling Sass and optimizing images
- Git and GitHub for version control and project management

## Challenges

The main challenge I faced was integrating the Dictionary API and retrieving
data for the searched words. The API provided a lot of data, and I had to
figure out how to display the data in a user-friendly way while also ensuring
that the app was accessible and responsive.

I also had to implement audio playback functionality for words that had
audio files available.

Another challenge was implementing the theme and font switcher functionality
while ensuring that the app's design remained consistent and visually appealing.

![Dictionary web app with light theme and font switched to sans-serif](/assets/projects/dictionary-web-app/light-theme-sans-serif.png)

## Approach

I began by setting up the project's file structure and creating the HTML markup.
I used the pre-written content provided and added my own HTML elements to
structure the content and create a layout that was responsive and accessible.
Next, I used Sass to create the app's styles and implemented the theme and
font switcher functionality. I also created hover and focus states for
interactive elements to improve the app's user experience.

To integrate the Dictionary API, I used JavaScript to handle the API request
and retrieve the data for the searched word. I then created a function to
display the data in a formatted way on the app's interface. I also implemented
audio playback functionality using the HTML5 audio element.

To optimize the app's performance, I used Gulp to automate tasks such as
compiling Sass, optimizing images, and minifying CSS and JavaScript files.
I also used Git and GitHub for version control and project management.

## Results

The final result was a real-world dictionary web app that integrated the
Dictionary API and provided a user-friendly interface for searching
and viewing word definitions.
