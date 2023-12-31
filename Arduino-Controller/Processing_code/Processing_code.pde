import processing.serial.*;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import javax.swing.KeyStroke;
Serial MyPort;
String KeyString = "";
void setup() {
       System.out.println("Hi");
       size(700, 500);
       MyPort = new Serial(this, "COM3", 9600);// My Arduino is on COM3. Enter the COM on which your Arduino is on.
       MyPort.bufferUntil('\n');
}

void draw() {
       background(0, 0, 0);
       fill(255, 0, 0);
       text("Press any key", 100, 175);
}

void serialEvent(Serial MyPort) throws Exception {
       KeyString = MyPort.readStringUntil('\n');
       KeyString = KeyString.substring(0, KeyString.indexOf(':'));
       System.out.println(KeyString);//prints the serial string for debugging purpose
       Robot Arduino = new Robot();//Constructor of robot class
       switch(KeyString){
case "Up" :
       Arduino.keyPress(KeyEvent.VK_UP);//presses up key.
       Arduino.keyRelease(KeyEvent.VK_UP);//releases up key
       break;
case "Down" :
       Arduino.keyPress(KeyEvent.VK_DOWN);
       Arduino.keyRelease(KeyEvent.VK_DOWN);
       break;
case "Right" :
       Arduino.keyPress(KeyEvent.VK_RIGHT);
       Arduino.keyRelease(KeyEvent.VK_RIGHT);
       break;
case "Left" :
       Arduino.keyPress(KeyEvent.VK_LEFT);
       Arduino.keyRelease(KeyEvent.VK_LEFT);      
       break;
}
}
