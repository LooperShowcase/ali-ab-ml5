class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.5;
  }
  show() {
    image(playerImg, this.x - 30, this.y - 30, this.size + 30, this.size + 30);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -25;
    }
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY = this.gravity + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 20,
      this.size - 20,
      currentObs.x,
      currentObs.y,
      currentObs.size - 18,
      currentObs.size - 18
    );
    return isColliding;
  }
}
