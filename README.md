# Project to practice a lot of stuff

The tech used:

* React + Vite
* Typescript
* Zustand
* Tailwindcss
  
This is my very first tie using Zustand. The only reasonn I am using it because Redux Toolkit would be very overkill.
I don't know how it will go. Let's see how it goes.

## Todos

### Completed

* Fix the scroll bug -- Done.
* Make reset Board function -- Done

### Uncompleted

* Add random generator for 2 & 4 tile when site loads
* Make the rsetBoard FUnction on the store generate the board with two random tiles instead of setting them all two zeros.
* More to Come ...

## Everything I learned

1. So I have many things whilst I am building this project.

i have learnt how to use Zustand. Its a relief that I am using it. I still remember the nightmare that my Tic Tac Toe game was when it came to the state management. Multiple components needed access to both display and change it. Finally I had just passed the states entirely to a class object as parameters and used the object to change the state.

This is much better. I have easy acceess to both state and setState functions. Also they are all centralised in a single file. Plus I don't have to deal with the extraness of Redux Toolkit, which was my original plan, as i had some experience with it
