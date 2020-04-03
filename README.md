# Project: E-Card for Mr. T

## Contribution
Hey y'all! We made it. Also, wanted to say thanks you to each one of ya for being you & coding!

Now onto this e-card app. This is the best way for us all to make a thank you card for the man, the myth, the legend: `Thomas W. Smith`. In return, we can have a chance to demonstrate our newly found skills as Full-Stack Developers!

For this e-card app, the goal is the have all 20~ students contribute to this GitHub repository & create your react component. Finally, get it deployed. If/Once I get all of ya to get the MVP done, then it will be time to show Thomas this gift. From all of us to him. Yeeet! 🔥🔥🔥

## Q & A
- what do I need to do?
    - read this doc., create a react component
- how do I add my component to the repository?
    - once you got the invite, read the doc.
    - also, `git clone` this repository
- how do I push to the repository?
    - open `./docs/git-collab-setup.md`
    - or ask me any questions, maybe
- will there be any merge conflicts?
    - if you read this `README.md` file, no
    - since react is component based, there should not be any merge conflicts
        - if this is a merge conflict, let me know ASAP to resolve it
- what are you (Micky) doing with this app?
    - I want to have an app where the whole class collaborated
    - maybe try to get the TA's and us all to contribute
- how can I track/keep this repository
    - check to see 3 buttons: Watch, Star, Fork
    - click `Fork` to keep a copy of this repository, and it will be added to your GitHub Account
    - click `Star` to follow-up with this repository
- how can we communicate to you (Micky)?
    - Slack
        - UCB-SF...
        - Trilogy Network
    - Discord
        - a link to Discord
        - https://discord.gg/SbjB4t3

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

```jsx
(
<main>
  <h2>First & Last Name</h2>
  <img 
    src="" 
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
        - replace `+++` with `<your-name>`
        - `import ___ from './views/StudentPage/___/___';`
        - `<Route exact path="/+++>" component={ ___ } />`
- setup image
    - add your image in `/public/assets/images/other` path
        - `/<your-profile.img>`
    - use image in your component
        - `<img src="./assets/images/other/<your-profile.img>" alt="student-profile" />`

---

Tip: to highlight & select the same word in different lines in VS Code

Windows: `CTRL + D`

Macs: `CMD + D`