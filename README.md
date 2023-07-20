# Snake Game with Arduino Controller

![gameplay-demo-gif](https://github.com/Antriksh1305/Snake-Game-with-Arduino-Controller/assets/100402656/de8079a3-9796-4b2d-bd4e-b584aa33f4ca)

### [![Netlify Status](https://api.netlify.com/api/v1/badges/57ade833-06ea-4875-a3d3-cf66b4638958/deploy-status)](https://snake-game-antrikshcodes.netlify.app/)

## Description

Snake Game with Arduino Controller is a small and fun project that combines classic Snake gameplay with an Arduino-based controller. The game is built using HTML, CSS, and JavaScript for the front-end, while the Arduino and Processing are used to create a physical controller for playing the game.

In this game, players control the movement of the snake using the Arduino controller, making it an interactive and immersive experience. The objective is to eat as much food as possible and grow the snake without colliding with the boundaries of the game or itself. It's a great way to showcase the integration of hardware and software in a gaming context.

## Tech Stack

The project uses the following technologies:
<p align="left">
<img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" width="40" height="40">
&nbsp
<img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3" width="40" height="40">
&nbsp
<img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="JavaScript" width="40" height="40">
&nbsp
<img src="https://cdn.worldvectorlogo.com/logos/arduino-logo.svg" alt="Arduino" width="45" height="35">
&nbsp
<img src="https://cdn.worldvectorlogo.com/logos/processing-1.svg" alt="Processing" width="40" height="40">
&nbsp
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/768px-ChatGPT_logo.svg.png?20230318122128" alt="ChatGPT" width="40" height="40">
&nbsp
<img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" alt="Netlify" width="40" height="40">
</p>

## Installation and Gameplay Setup

Follow these steps to set up and play the Snake Game with Arduino Controller:

- Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Antriksh1305/Snake-Game-with-Arduino-Controller.git
- Connect the Arduino board to your laptop or desktop using a USB cable.
- Make the controller according to these images:
    <p align="left">
      <img src="https://github.com/Antriksh1305/Snake-Game-with-Arduino-Controller/assets/100402656/89832736-37ed-408b-9330-a4a5489cfa91" width="400" height="330" > 
      <img src="https://github.com/Antriksh1305/Snake-Game-with-Arduino-Controller/assets/100402656/6d45ae84-3dac-4cdf-bbbb-20790f17520e" width="400" height="330" >
    </p>
- Upload the Arduino code to the Arduino board using the Arduino IDE.
- Run the Processing code to initialize the Arduino controller.
- Start a local server or use an extension like "Go Live" in Visual Studio Code to serve the game:
  - If you have the "Go Live" extension in Visual Studio Code, right-click on index.html and select "Open with Live Server."
  - If you prefer using a different local server, start it in the project's root directory.
    Once the server is running, open the game in a web browser.
- Use the Arduino controller to control the snake's movement and enjoy the game!

Note: Make sure your computer has the necessary drivers installed for the Arduino board, and the correct port is selected in the Arduino IDE when uploading the code.
   

## Troubleshooting

### Arduino Controller Not Responding

If the Arduino controller is not responding or behaving unexpectedly, try the following:
- Check the connections between the Arduino board and the controller components (e.g., buttons, joysticks). Ensure that the wires are securely plugged into the correct pins.
- Check the board selection (Arduino UNO in my case) and Port selection (COM3 in my case).
- Verify that the Arduino code for the controller is uploaded correctly to the board. Check for any errors in the code that could be causing issues.
- Test the individual components (buttons, joysticks) separately to see if they are functioning correctly. You can use Arduino's serial monitor to print the input values for debugging.

### Snake Game Not Working Properly

If the Snake Game is not working as expected, consider these solutions:
- Inspect the game code for logical errors or bugs that may be causing unexpected behavior in the game. Review the movement, collision detection, and food spawning logic.
- Ensure that the HTML, CSS, and JavaScript files for the Snake Game are correctly linked and included in the project.
- Check for any JavaScript console errors in the browser's developer tools that might provide clues to the issues.

### Game Controls Unresponsive

If the game controls are not responding or controlling the snake incorrectly, try the following:
- Review the code responsible for mapping the Arduino controller inputs to the game controls. Make sure the correct pins and inputs are being used.
- Test the Arduino controller inputs using the Serial Monitor to ensure that they are sending the correct values to the game.
- Check for any conflicts with the game controls or event handling that might be affecting the responsiveness of the controls.

---
