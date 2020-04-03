# Git Collab Setup

^ NEVER Rules
-- DO NOT push from ( MASTER )

## CHECK GIT (1)

- **git checkout -b [ branch-name ]**
    - set branch name as the task you're assigned
    - create & move to new branch
    - e.g: git checkout -b [ task-name ]
        - use dashes '-'
        - NO white space ' '
- **git add .**
- **git commit -m "[ describe type of work ]"**
- **git push origin [ branch-name ]**
    - stop here & go to GitHub page


## CHECK GITHUB PAGE

- **open repository > select 'branch' tab > select 'new pull request' button**
- **check 'open a pull request' page**
	- (base: master) ← (compare: [ branch-name ])
	- '✓ Able to merge' _(green text)_
	- then click 'create pull request' _(green button)_
- **check '[ branch-name ]' page**
	- '...master from [ branch-name ]' _(blue box)_
	- 'Open' _(green box)_
	- check 'review required' & 'merging...'
	- then click 'merge pull request' _(green button)_
	- then click 'confirm merge' _(green button)_
- **check if complete**
	- 'Merged' _(purple box)_
	- 'pull request successfully merged and closed' _(purple box)_
	- then select 'delete branch' _(gray button)_
		- deletes branch only from GitHub page
		- pull request is a one time tool
    - then stop here & go to git


## CHECK GIT (2)

- **git checkout master**
    - change from ([ branch-name ]) to ( master )
    - get ready to pull updates from master
- **git branch -d [ branch-name ]**
    - delete previous branch name from git
    - deletes branch only from git
- **git pull**
    - ✓ — all new updates & ready
    - NOW create a branch for same/different task
- **git checkout -b [ branch-name ]**
    - [ branch-name ] (task) can be the same/different name
    - later do the next steps
        - then redo 'CHECK GIT (1)' for pull request
        - then 'push' to work on 'CHECK GITHUB PAGE'



### Options Tool
- **git branch -l**
    - view branches available on local PC
- **git checkout [ branch-name ]**
    - select any current available branches

### Safety Tips
- able to work on task under [ master ]
    - remember to 'add' & 'commit' via [ branch-name ]
- able to 'push' [ branch-name ] from [ master ]
    - remember to 'push' with [ branch-name ]
    - e.g: `git push orign [ branch-name ]`
- able to delete the used branch before/after 'pull'
    - better to remeber to delete then maintain
    - can create potential confusion/problems
-