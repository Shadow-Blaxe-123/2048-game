export default class GameLogic {
  constructor() {
    this.setupInput();
  }

  // Adding Event Listener for keyboard presses.
  private setupInput() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  // The callback for the event listener.
  //  The logic that will make the game care about the arrow keys only.
  private handleKeyDown = (e: KeyboardEvent) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (arrowKeys.includes(e.key)) {
      console.log("Pressed:", e.key);
    }
  };

  // Removes the event listener.
  destroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
}
