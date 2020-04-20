# Create Student Component Setup

1. **go to `./src/students.json`**
    - add your name to the `student.json` file
        - make you name all lowercase
    - **COPY:** `{ "name" : "<your name>" }`
2. **go to `./public/assets/images/profile-pic/`**
    - you can skip step this step to add for later
    - add your profile image here
        - `/profile-pic/_[your-profile-pic.img]_`
    - (optional) rename image file to your first & last name
    - (tip) to use the image into your component
        - `<img src="./assets/images/profile-pic/_[your-profile-pic.img]_" alt="student-profile" />`
3. **go to `./src/views/StudentPage/`**
    - follow these steps
        - copy the `--COPY-PASTE-RENAME` template folder
        - paste it on the `/StudentPage/` folder
        - rename the new `--COPY-PASTE-RENAME copy` folder & files with your first & last name
    - rename folder & file to your first & last name
        - `/StudentPage/FirstNameLastName/` & `FirstNameLastName.css FirstNameLastName.js`
        - e.g: `/StudentPage/MichaelAlvarez/` & `MichaelAlvarez.css MichaelAlvarez.js`
    - open `<YourName>.js`, then replace `FirstNameLastName` with your first & last name
        - e.g: `import './MichaelAlvarez.css'` & `export default function MichaelAlvarez () {}`
4. **go to `./src/index.js`**
    - import & route your component
        - proper syntax setup
            - component === YourName
            - route path === your-name
    - replace `first-name-last-name` / `FirstNameLastName` with your first & last name
        - **COPY:** `import FirstNameLastName from './views/StudentPage/FirstNameLastName/FirstNameLastName';`
        - e.g: `import MichaelAlvarez from './views/StudentPage/MichaelAlvarez/MichaelAlvarez';`
        - **COPY:** `<Route exact path="/first-name-last-name>" component={ FirstNameLastName } />`
        - e.g: `<Route exact path="/michael-alvarez>" component={ MichaelAlvarez } />`

---

## Quick Read Setup (...if readable)
- setup student DB (json)
    - add your name to the `student.json` file
        - `{ "name" : "<your-name>" }`
- setup component
    - create a component in `/src/views/StudentPage` path
        - `/YourName → YourName.css YourName.js`
    - import & route your component
        - replace `___` with `<YourName>`
        - replace `~~~` with `<your-name>`
        - `import ___ from './views/StudentPage/___/___';`
        - `<Route exact path="/~~~>" component={ ___ } />`
- setup image
    - add your image in `/public/assets/images/other` path
        - `/<your-profile.img>`
    - use image in your component
        - `<img src="./assets/images/other/<your-profile.img>" alt="student-profile" />`