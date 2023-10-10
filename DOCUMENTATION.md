
# Pre-read Documentation

Please read this documentation before starting the project. This documentation will help you understand the project requirements and how to navigate the website.

## Project Requirements
- [ ] `Navigation Bar` or other Navigation Scheme (Can be Unique)
- [x] `Custom Logo` for Website
- [ ] `Home Page` with **3 Unique Sections** (and Mission Statement)
- [ ] `About Me Page` with Legal Name, Picture, Short Biography and Downloadable Resume
- [ ] `Projects Page` with at least **3 Projects**
- [ ] `Services Page` with Short List of Services You Offer (Can be a Downloadable PDF)
- [ ] `Contact Page` with Contact Information and Fully Functional Contact Form
- [ ] `Footer` with Contact Information, Social Media Links, and **3 Unique Sections**


## Hosting Requirements & Github
- [ ] Provide Link to Github Repository in Documentation
  - [x] Repository Must Be Well Structured
  - [x] Repository Must Contain README.md File 
  - [x] Repository Must Contain .gitignore File
  - [x] Repository Must Contain LICENSE File
  - [ ] Repository Must Include Commits & Changes
- [ ] Provide a Zip Archive of Website Files
- [ ] Website Must be Hosted on Heroku or other Hosting Platform

**NOTE**: DO NOT use Github Pages.

# Documentation 

THis documentation is used to understand the various configurations done for this project.
As of now, package.json is configured with the following packages:
1. @tailwindcss/forms `v0.5.6`
2. @tailwindcss/typography `v0.5.10`
3. @material-tailwind/html `v2.0.0`
4. animejs `v3.2.1`
5. baffle `v0.3.6`
6. colors `v1.4.0`
7. dotenv `v16.3.1`
8. ejs `v3.1.9`
9. express `v4.18.2`
10. http `v0.0.1`
11. nodemon `v3.0.1`
12. path `v0.12.7`
13. postcss-cli `v10.1.0`
14. three `v0.156.1`

### Navigating the Website

The website contains 5 different pages that can be navigated.
They include but are not limited to the following:
1. Home - *Home Page for the Website*
2. About Me - *About Me Page for the Website*
3. Projects - *Projects Page for the website*
4. Contact - *Contact Page for the website with form validation*
5. Services - *Services Page for the website*

### Understanding Configurations

Configurations were essential to creating the website, each
configuration played specific role such as tailwindcss and 
its utilities being tailwindcss/forms and tailwindcss/typography.

1. **@tailwindcss/forms** - Responsible for creating forms and validation logic.
2. **@tailwindcss/typography** - Responsible for creating typography and fonts configurations.
3. **@material-tailwind/html** - UI for creating layouts, styles, and designs faster.


### Process & Understanding the Environment

Under `config/config.js` you will find all the routes to each ejs page. This is also where
most of the express route logic is handled alongside `app.js` which is used to listen to a 
specific port and display the corresponding routes.

`tailwind.config.js` contains most of the tailwind configurations required. Although there are more
pre-set configurations under `public/css/tailwind.css` but those are only for specific styles that
should be available by default.
