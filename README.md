# Project: E-Card for Mr. T

## **[Start Contribution Now](#repo-setup)**

## Contribution
Hey y'all! We made it. Also, wanted to say thanks you to each one of ya for being you & coding!

Now onto this e-card app. This is the best way for us all to make a thank you card & send appreciation for the man, the myth, the legend: `Thomas W. Smith`. In return, we can have a chance to demonstrate our newly found skills as Full-Stack Developers!

For this e-card app, the goal is to have us ~20 students (all) contribute to this GitHub repository & create your react component. Then finally, get it deployed. If/Once I get all of ya to get the MVP done, then it will be time to show Thomas this gift. From all of us to him. Yeeet! 🔥🔥🔥

the deadline is to finish this by **APRIL 30**

---

## Repo Setup
1. **open `terminal/git-bash` to a folder**
    - git clone `HTTPS/SSH`
    - `npm install` → `npm start`
2. **demo the app**
    - click the search button
    - click on `michael alvarez`
    - done

## Add Your 'Thank You' Component Setup
1. **check if you name is there (optional)**
    - go to `./src/index.js`
        - check `import _[YourName]_ from ...`
        - check `<Route exact path="_[your-name]_" component={_[YourName]_} />`
    - go to `./src/students.json`
        - check `{ "name" : "_[your name]_" }`
    - go to `./src/views/StudentPage/`
        - check `./StudentPage/_[YourName]_/`
2. **add your profile pic**
    - go to `./public/assets/images/profile-pic/`
        - you can skip step this step to add for later
    - add your image here `./profile-pic/_[your-profile-pic.img]_`
        - (optional) rename image file to your first & last name
    - (tip) to use the image into your component
        - `<img src="./assets/images/profile-pic/_[your-profile-pic.img]_" alt="student-profile" />`
3. **update your component**
    - go to `./src/views/StudentPage/_[YourName]_/`
        - open `./_[YourName]_.js`
        - this is your component to add & delete stuff
        - so you can edit whatever you want & style up in any additional way you want
    - **minimum requirements**
        - add your name
        - add your image
        - add a message for Thomas
            - a memorable/funny moment with Thomas & the class
            - a personal message for Thomas to read
        - add your social links
            - e.g: email | GitHub | LinkedIn
    - **bonus challenge**
        - style it a bit more with CSS and or Bootstrap
        - add a hidden easter egg (link) in your component
        - add a snippet feature you want to show off
    - read `MVP Component Breakdown` for more info
        - **[Read MVP Component Breakdown Now](#mvp-component-breakdown)**
4. **open terminal & test**
    - `npm start` → open browser
    - click the search button
    - search, then select/type your name
    - done
5. **push to GitHub**
    - `git checkout -b <branch-name>`
    - `git add *`
    - `git commit -m "component update"`
    - `git push origin <branch-name>`
    - optional
        - open branch & merge [pull-request](https://github.com/awwmicky/mr-t--e-card-app/branches)
        - delete GitHub branch → go to vscode
        - `git checkout master`
        - `git pull`
    - done
- read `Git Collab Setup` for a quick process
    -   **[Read Git Collab Setup Now](./docs/git-collab-setup.md)**
- read `Student Component Setup` for creating component
    - **[Read Student Component Setup Now](./docs/create-student-component-setup.md)**

---

## MVP Component Breakdown
- minimum requirements: name | image | message | links
- bonus challenge:
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
    src="./assets/images/profile-pic/_[your-profile-pic.img]_"
    alt="student-portfolio-pic"
  />
  <blockquote className="card-text text-left">
    Thank you Thomas.
    <br/>
    [ add your message here ]
    - a memorable/funny moment with Thomas & the class
    - additional message for Thomas (feedback/question)
  </blockquote>
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

---

## Quick Q & A
- **do I push to the (git) master branch?**
    - NO NO NOOOOOO!!! thank you.
    - create a (git) branch first, then push from your branch
- **what do I need to do?**
    - once you got the invite, read this doc: **[Repo Setup](#repo-setup)**
    - `git clone` this repository
    - edit your react component in `./src/views/StudentPage/`
- **can I use Bootstrap?**
    - yes you can and or React-Bootstrap
- read `Q & A` if setup instructions are confusing
    - **[Read Q & A Now](./docs/q-and-a.md)**
    - send me an open feedback if there are parts in this `README.md` file that is confusing
        - there is always room for improvement for the next reader
        - thanks for reading this and well, helping out

---

Keep on chucking code!~~