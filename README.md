# Project: E-Card for Mr. T

## **[Start Contribution Now](#repo-setup)**

## Contribution
Hey y'all! We made it. Also, wanted to say thanks you to each one of ya for being you & coding!

Now onto this e-card app. This is the best way for us all to make a thank you card & send appreciation for the man, the myth, the legend: `Thomas W. Smith`. In return, we can have a chance to demonstrate our newly found skills as Full-Stack Developers!

For this e-card app, the goal is to have us ~20 students (all) contribute to this GitHub repository & create your react component. Then finally, get it deployed. If/Once I get all of ya to get the MVP done, then it will be time to show Thomas this gift. From all of us to him. Yeeet! 🔥🔥🔥

---

## Repo Setup
1. **open `terminal/git-bash` to a folder**
    - git clone `HTTPS/SSH`
    - `npm install` → `npm start`
2. **demo the app**
    - click the search button
    - click on `michael alvarez`
    - press enter
    - done.

## Create Student Component Setup
1. **go to `./src/students.json`**
    - add your name to the `student.json` file
    - **COPY:** `{ "name" : "<your name>" }`
2. **go to `./public/assets/images/other/`**
    - add your profile image here
        - `/other/<your-profile.img>`
    - (optional) rename image file to your first & last name
    - (tip) to use the image into your component
        - `<img src="./assets/images/other/<your-profile.img>" alt="student-profile" />`
3. **go to `./src/views/StudentPage/`**
    - copy & paste `--COPY-PASTE-RENAME` from & to `/StudentPage/`
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
- read Q & A if setup instructions are confusing
    - **[Read Q & A Now](#repo-setup)**
    - send me open feedback if there are parts in this `README.md` file that is confusing
        - there is always room for improvement for the next reader
        - thanks for reading this and well, helping out

---

## MVP Component Breakdown
- minimum: name, image, message, & links
- add any additional stuff onto your component
    - personal/bonus feature
    - styling/interacting
    - random easter egg?
- go simple or go crazy with it all
    - make it a networking looking app
    - make it a creative looking app
- component template:

```jsx
(
<main>
  <h2>First & Last Name</h2>
  <img 
    src="./assets/images/other/< your-profile.img >"
    alt="student-portfolio"
  />
  <p>
    - a memorable/funny moment with Thomas & the class
    - additional message for Thomas (feedback/question)
  </p>
  <div>
    <a 
      href="/" 
      target="_blank" 
      rel="noopener noreferrer"
      title=""
    >
      links to your GitHub, LinkedIn, etc.
      <i className="fab fa-font-awesome"></i>
    </a>
  </div>
</main>
)
``` 

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

---

## Q & A
- **do I push to the (git) master branch?**
    - NO NO NOOOOOO!!! thank you.
    - create a (git) branch first, then push from your branch
- **can I use Bootstrap?**
    - yes, with `react-bootstrap`
    - you will need to import this
        - `import { < bootstrap > } from "react-bootstrap";`
    - read this for more info
        - `https://react-bootstrap.github.io/`
    - or use regular Bootstrap style
        - `<button className="btn btn-primary">Click</button>`
- **what are the steps for git collaboration?**
    - **[Read Git Collab Setup](./docs/git-collab-setup.md)**
- **what is the url to the GitHub Repository?**
    - GitHub: https://github.com/awwmicky/mr-t--e-card-app
    - Webpage: **TBA**
- **what do I need to do?**
    - once you got the invite, read this doc: **[Repo Setup](#repo-setup)**
    - `git clone` this repository
    - create a react component in `/views/StudentPage/`
- **does syntax matter for this?**
    - YES, VERY! The main pattern to follow is setting up your name
    - `<YourName />` | `/your-name` | `"your name"`
- **how do I push to the repository?**
    - open `./docs/git-collab-setup.md`
    - using `git checkout -b <branch-name>` for branches
    - or ask me any questions, maybe
- **can I approve & merge the pull request?**
    - for no accidental (git) push to the master, there will be a set permission to this GitHub Repository
    - you are able to merge if someone else approves your pull request
    - the admin will try to approve & merge ASAP
- **will there be any merge conflicts?**
    - if you read this `README.md` file, no
    - since react is component based, there should not be any merge conflicts
        - if this is a merge conflict, let me know ASAP to resolve it
        - send me a message via Slack, Discord, or GitHub Issue's
- **how can I track/keep this repository**
    - check to see 3 buttons: Watch, Star, Fork
    - click `Fork` to keep a copy of this repository, and it will be added to your GitHub Account
    - click `Star` to follow-up with this repository
    - click `Watch` to track any new updates from this repository
- **how do I know if I have access to this GitHub Repository?**
    <!-- - this is a private repository -->
    - I (Micky) will send out a link for us to collaborate
    - if you did not receive it, send me a message via Slack or Discord
- **what are you (Micky) doing with this app?**
    - I want to have an app where the whole class collaborate
    - make an app for networking & appreciation
    - maybe try to get the TA's and us all to contribute
- **can I follow you on GitHub?**
    - sure thing! 😨  https://github.com/awwmicky
    - better question! 🤔 can I (Micky) follow you on GitHub? Send me you GitHub page
- **how can we communicate to you (Micky)?**
    - Slack
        - UCB-SF...
        - Trilogy Network
    - Discord
        - a link to Discord
        - https://discord.gg/SbjB4t3
- **what is the next thing you (Micky) are going to do?**
    - write a novel, travel the world, & meditate on a mountain. Well maybe. hmm…
    - the next small project will be re-learning & building an Authentication App
    - still interested in making an open source full-stack app 
        - Dashboard App
        - modular components & menu setting
        - https://momentumdash.com/
        - https://bit.ly/momentum-chrome-app
    - let me know if anyone is down!

---

Keep on chucking code!~~