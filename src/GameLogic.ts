export default class GameLogic {
  constructor() {
    this.setupInput();
  }

  private setupInput() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (arrowKeys.includes(e.key)) {
      console.log("Pressed:", e.key);
    }
  };

  // Optional: to remove event listener if needed later
  destroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
}
