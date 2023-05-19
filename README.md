# Avoider Game
A browser-based game implemented with HTML, CSS, and JavaScript.

## Game Intro
The Avoider game is a vertical flight game where the player controls a warplane to dodge enemy aircrafts ✈️ . You cannot touch each other. If your plane has a collision with enemy flights, your player dies and you have to start over.

![Aircrafts!](https://pixeljoint.com/files/icons/full/wwii_airplanes_1to1.png)

## How to Play
Players use arrow keys ◀️🔼▶️ to control their flights. The game will start whenever the player press a key on the keyboard.  
Enemy aircrafts will be released from the top of the game frame to the space at regular intervals, and they will move towards the player's plane. Players must move their planes to different directions to avoid collide with enemies otherwise the game is over.

## Credits
Each time the player's plane passes an enemy aircraft, the score will plus the number of the player's current level. Player's level is based on the score, and higher the level, enemy flights will appear with shorter invervals and faster speed. Once the game is over, Your score will be displayed in an alert box and ask you if you want to start again.

## Feasibility Study
CSS grid and flexbox could be used to build the game canvas. While CSS animation and fillRect() method can render the elements.  
The alternative project is the Snake game.

## Trello
[Project Management](https://trello.com/invite/b/NKV5hiBD/ATTIbe72e0f9fd6b2febe1fcb0f58104f3907267ABD0/unit-1-project)
