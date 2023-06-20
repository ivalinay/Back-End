function hierarchy() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }
    changeUnits(newUnits) {
      this.units = newUnits;
    }
    get area() {
      throw new Error("Not implemented!");
    }

    transformMetric(valInCm) {
      return this.units === "m" ? valInCm / 100 : this.units === "mm" ? valInCm * 10 : valInCm;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }
    get area() {
      const radius = this.transformMetric(this.radius);
      return Math.PI * radius * radius;
    }

    toString() {
      const r = this.transformMetric(this.radius);
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${r}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
    }

    get area() {
      const width = this.transformMetric(this.width);
      const height = this.transformMetric(this.height);
      return width * height;
    }

    toString() {
      const w = this.transformMetric(this.width);
      const h = this.transformMetric(this.height);
      return `Figures units: ${this.units} Area: ${this.area} - width: ${w}, height: ${h}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

hierarchy();
