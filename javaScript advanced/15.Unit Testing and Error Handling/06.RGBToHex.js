describe("rgbToHexColor", () => {
  it("should return the correct hex color for valid RGB values", () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
    expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
    expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
    expect(rgbToHexColor(128, 128, 128)).to.equal("#808080");
  });

  it("should return undefined for invalid RGB values", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    expect(rgbToHexColor("255", 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, "255", 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, "255")).to.be.undefined;
  });

  it("should return undefined for non-integer RGB values", () => {
    expect(rgbToHexColor(12.34, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 56.78, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 90.12)).to.be.undefined;
  });
});
