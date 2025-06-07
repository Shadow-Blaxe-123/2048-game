# Dev Journal
  
This is my very first time using Zustand. The only reason I am using it is, because Redux Toolkit would be very overkill.
I don't know how it will go. Let's see how it goes.

So I have many things whilst I am building this project.

I have learnt how to use Zustand. Its a relief that I am using it. I still remember the nightmare that my Tic Tac Toe game was when it came to the state management. Multiple components needed access to both display and change the state. Finally I had just passed the states and setStates entirely to a class object as parameters and used the object to change the state, across the entire codebase.

Therefore, this is much better. I have easy access to both state and setState functions. Also they are all centralised in a single file. Plus I don't have to deal with the extraness of Redux Toolkit, which was my original plan, as I had some experience with it. But I am liking Zustand so far.

***

I also learnt that AI always makes stuff too overcomplicated. I had used ChatGPT to vibe code me the Board and Tile UI. It for some reason decided to put both components in a single file and made it by importing "React.FC". I told it to not add any logic but it still did it anyway. I had to spend a good amount of time fixing the slop it generated. But at least the UI looked good, even though I could have made it just by copying a Youtuber because the board UI is as generic as it gets.

***
So durinng adding the dark mode part, I forgot how template literals work or should I say I forgot how JSX and Javascript work. I kept forgetting to add {} to make the JS/TS code to work. And I kept getting errors without knowing why. I should have actually opened the terminal to see the error, but I just googled how JS "f-strings" works.

In my defense, I was working with Python for the last 3 hrs. Thats why I used the term "f-strings."

***

## React is such a pain in the back

So when implementing the random tiles generation, I had just called the **addRandomTile** function just once. Despite that the board was generating two tiles. I could have just left it that especially as I used AI to make the function, its probabily smarter than me but a hunch kept making me want to investigate. I spent **hours** trying to isolate the reason. I was starting to doubt myself even though I implemented all the changes AI said to fix the issue. I had to change the entire codebase multiple times.

Then AI tried to gaslit me into thinking I was calling the function multiple times. But NO.Then finally when doing old-fashioned console.log did I find that my **App** component was being mounted > unmounted > mounted, this where the bug was.

After checking with ChatGPT, I learnt its something that **ReactStrictMode** does during development. Its suppossed to be a helpful feature. But it was ruining my project. During production, there would be only one tile generated, so I just had to deal with the game generating 4 tiles during deveelopment whilst trusting the production would work.

I tried to get AI to solve the bug but nooo, the best it could come up was to disable **StrictMode**. I was ready to give up.

FInally, I had an epiphany and just called the **resetBoard** function during unmounting. This fixed the bug on dev end while also making sure that it would not happen in prod either.

So, I learned to trust my own Dev instincts over AI from this debacle. The AI insisted multiple times that the code was perfect. i went even as far as to paste the entire codebase to ChatGPT to debug it. It told me the real reason only when I stood my ground and commanded it to accept that there was only two calls to the randomGenerator, once when an arrow key is pressed, while the other is in the **constructor**.

## Todos

### Completed

- Fix the scroll bug.
- Make reset Board function.
- Make New Game Button reset the score.
- Add dark mode.
- Add random generator for 2 & 4 tile when site loads.
- Add merging Function.
- Make the moving function in both UI and the board state 2D array.
- Make the newButton generate board with two random tiles instead of blank board.

### Uncompleted

- Add Scoring Function.
- Make BestScore keeping function.
- Make BestScore persist.
- Add CheckMoves function.
- More to Come ...
