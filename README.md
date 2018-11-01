# Trivia-Game

## How It Works
For this Trivia assignment I kept the Star Wars theme from the last project and made a simple quiz about Star Wars. 
It opens by displaying a siple Start button which starts the quiz by first removing the Start button and dynamically adding the quiz. 
The Start button launches the start functions, this funciton is built inside of the game object as well as other fucntions which I will detail. 

## Start Function
The Start function begins the moment the Start button is pressed and its first task is to set the timer for the game by running our countdown fuctions which will put 20 seconds on the page and have it go down by 1 second. It will then prepend the timer to the page dynamically by adding it to by #subwrapper ID. Next it removes the Start button and begins my for loop which calls my array of questions and answers. The for loop will then run through the questionArray and append the question for each loop it will also run a second for loop nested inside the first for loop to add the radio buttons with my answers adding the value of the correct answer from our answer array. This will be refenrenced later when we use the result function. The last thing the start function does is append an Done button with my "end" ID to the page which will also launch my done function.

## Done Function
The done function is a simple one in truth its just one function that runs the same thing for every question. It checks what input the radio button was selected and checks to see if it is the correct answer based on our Array, it then will either increase the correct answer counter by one or raise the incorrect answer counter by one. Once it completes that routine it will then run the results funtion. 

## Results Funtion
The results funciton is another simple one, first it stops the timer and removes it, It then removes all the questions from the page and prints the results of the quiz based on our results from the done function. 

### Link to Project
https://erithr.github.io/Star-Wars-Quiz/

