# Project to practice a lot of stuff

The tech used:

* React + Vite
* Typescript
* Zustand
* Tailwindcss
  
This is my very first time using Zustand. The only reason I am using it is, because Redux Toolkit would be very overkill.
I don't know how it will go. Let's see how it goes.

## Todos

### Completed

* Fix the scroll bug -- Done.
* Make reset Board function -- Done
* Make New Game Button reset the score -- Done.
* Add dark mode.

### Uncompleted

* Add random generator for 2 & 4 tile when site loads.
* Make the rsetBoard FUnction on the store generate the board with two random tiles instead of setting them all two zeros.
* Make the moving function in both UI and the board state 2D array.
* Add merging Function.
* Add Scoring Function.
* Make BestScore keeping function
* More to Come ...

## Everything I learned

So I have many things whilst I am building this project.

I have learnt how to use Zustand. Its a relief that I am using it. I still remember the nightmare that my Tic Tac Toe game was when it came to the state management. Multiple components needed access to both display and change the state. Finally I had just passed the states and setStates entirely to a class object as parameters and used the object to change the state, across the entire codebase.

Therefore, this is much better. I have easy access to both state and setState functions. Also they are all centralised in a single file. Plus I don't have to deal with the extraness of Redux Toolkit, which was my original plan, as I had some experience with it. But I am liking Zustand so far.

***

I also learnt that AI always makes stuff too overcomplicated. I had used ChatGPT to vibe code me the Board and Tile UI. It for some reason decided to put both components in a single file and made it by importing "React.FC". I told it to not add any logic but it still did it anyway. I had to spend a good amount of time fixing the slop it generated. But at least the UI looked good, even though I could have made it just by copying a Youtuber because the board UI is as generic as it gets.
