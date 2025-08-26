// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */// @ts-check

export function Size(width, height) {
  this.width = width ?? 80;   
  this.height = height ?? 60; 
  this.resize = function (nwidth, nheight) {
    this.width = nwidth;
    this.height = nheight;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size(); // default 80x60
    this.position = new Position(); // default 0,0
  }

  resize(sizeObj) {
    if (!(sizeObj instanceof Size)) {
      throw new Error("The object must be of type Size");
    }
    let newWidth = Math.max(1, sizeObj.width);
    let newHeight = Math.max(1, sizeObj.height);
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(newWidth, maxWidth);
    this.size.height = Math.min(newHeight, maxHeight);
  }

  move(PosObj) {
    if (!(PosObj instanceof Position)) {
      throw new Error("The object must be of type Position");
    }
    let newX = Math.max(0, PosObj.x);
    let newY = Math.max(0, PosObj.y);

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(newX, maxX);
    this.position.y = Math.min(newY, maxY);
  }
}

export function changeWindow(windowObj) {
  if (!(windowObj instanceof ProgramWindow)) {
    throw new Error("The object must be of type ProgramWindow");
  }

  windowObj.size.width = 400;
  windowObj.size.height = 300;
  windowObj.position.x = 100;
  windowObj.position.y = 150;

  return windowObj;
}
