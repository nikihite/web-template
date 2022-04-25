## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**

#h1
<div>
    <div>
      <button></button>
    </div>
    <div>
      <button></button>
    </div>
    <div>
      <button></button>
    </div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>


1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
Wins, Losses, and Total

1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
I need an h1 so the user knows what they are doing
I need a parent div to wrap the child div's in
The child div's will hold the shell image
I need the shell image to hide the ball
I need the buttons bellow the images so the user can guess
I need the unordered list to dislay, Wins, Losses and Total so the user can see if they've won or lost and how many times they've guessed total.

1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
getElementById, to find the html element and grab it.
addEventListener, to listen for the click to change the state of wins, losses and total.
Math.random, picks a random number between 1-3 (for the shells).
Math.ceil, gives the Math.random a maximum number.
classList.add, to add the 'reveal' id so that the ball is shown.
classList.remove, to put the shell back in its position after showing where the ball was.

1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
When the user clicks on the "guess" button the ball is shown if they win, and the wins will increase by 1. If they loose then the losses amount will increase by 1. Either way the total guesses will always increase by one.
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
To validate that my code is working I will console.log() each step in increments.
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
The amount of wins, losses, or total, depends on the user clicking on the button and depends on which button the user clicked.

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)