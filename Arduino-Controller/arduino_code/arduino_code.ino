const int UpButton = 10;
const int DownButton = 11;
const int RightButton = 12;
const int LeftButton = 13;
void setup() {
  Serial.begin(9600);
  pinMode(UpButton, INPUT);
  pinMode(UpButton, INPUT);
}
void loop() {
  if (digitalRead(UpButton) == HIGH) {
    Serial.println("Up:");//It doesn't matter what you print. Just have a colon at the end to make it easier to parse the string.
    delay(200);
  }
  if (digitalRead(DownButton) == HIGH) {
    Serial.println("Down:");
    delay(200);
  }
  if (digitalRead(LeftButton) == HIGH) {
    Serial.println("Left:");
    delay(200);
  }
  if (digitalRead(RightButton) == HIGH) {
    Serial.println("Right:");
    delay(200);
  }
}
