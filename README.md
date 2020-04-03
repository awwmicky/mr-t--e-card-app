# Project: E-Card for Mr. T

## Contribution
Hey y'all! We made it. Also, wanted to say thanks you to each one of ya for being you & coding!

Now onto this e-card app. This is the best way for us all to make a thank you card & send appreciation for the man, the myth, the legend: `Thomas W. Smith`. In return, we can have a chance to demonstrate our newly found skills as Full-Stack Developers!

For this e-card app, the goal is to have us ~20 students (all) contribute to this GitHub repository & create your react component. Then finally, get it deployed. If/Once I get all of ya to get the MVP done, then it will be time to show Thomas this gift. From all of us to him. Yeeet! 🔥🔥🔥

## Q & A
- **can I use Bootstrap?**
    - yes, with `react-bootstrap`
    - you will need to import this
        - `import { < bootstrap > } from "react-bootstrap";`
    - read this for more info
        - `https://react-bootstrap.github.io/`
    - or use regular Bootstrap style
        - `<button className="btn btn-primary">Click</button>`
- **what is the url to the GitHub Repository?**
    - https://github.com/awwmicky/mr-t--e-card-app
- **what do I need to do?**
    - read this doc.
    - `git clone` this repository
    - create a react component
    - once you got the invite, read this doc.
- **does syntax matter for this?**
    - yes, very! The main pattern to follow is setting up your name
    - `<YourName />` | `/your-name` | `"your name"`
- **how do I push to the repository?**
    - open `./docs/git-collab-setup.md`
    - using `git checkout -b <branch-name>` for branches
    - or ask me any questions, maybe
- **will there be any merge conflicts?**
    - if you read this `README.md` file, no
    - since react is component based, there should not be any merge conflicts
        - if this is a merge conflict, let me know ASAP to resolve it
- **how can I track/keep this repository**
    - check to see 3 buttons: Watch, Star, Fork
    - click `Fork` to keep a copy of this repository, and it will be added to your GitHub Account
    - click `Star` to follow-up with this repository
    - click `Watch` to track any new updates from this repository
- **how do I know if I have access to this GitHub Repository?**
    - this is a private repository
    - I (Micky) will sent out a link for us to collaborate
- **what are you (Micky) doing with this app?**
    - I want to have an app where the whole class collaborated
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

## Repo Setup
- `create folder` for project
- open `terminal/git-bash` to folder path
    - git clone `HTTPS/SSH`
    - `npm install` → `npm start`

## MVP Component
- minimum: name, image, message, & links
- add any additional stuff onto your component
    - personal/bonus feature
    - styling/interacting
    - random easter egg?
- go simple or go crazy with it all
    - make it a networking looking app
    - make it a creative looking app

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
      href="" 
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

## React Setup
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

Tip: to highlight & select the same word in different lines in VS Code

Windows: `CTRL + D`

Macs: `CMD + D`