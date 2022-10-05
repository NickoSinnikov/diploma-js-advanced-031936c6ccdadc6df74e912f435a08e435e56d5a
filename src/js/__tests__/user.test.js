/* eslint-disable max-len */
import { calcTileType } from "../utils";
import Character from "../Character";
import Bowman from "../characters/Bowman";
import GameStateService from "../GameStateService";
import { getInfo, getRightPositions } from "../Function";

test("should return top-left", () => {
  const result = calcTileType(0, 8);
  expect(result).toBe("top-left");
});

test("should return top-right", () => {
  const result = calcTileType(7, 8);
  expect(result).toBe("top-right");
});

test("should return top", () => {
  const result = calcTileType(3, 8);
  expect(result).toBe("top");
});

test("should return left", () => {
  const result = calcTileType(16, 8);
  expect(result).toBe("left");
});

test("should return right", () => {
  const result = calcTileType(21, 8);
  expect(result).toBe("right");
});

test("should return right", () => {
  const result = calcTileType(12, 8);
  expect(result).toBe("center");
});

test("should return bottom-left", () => {
  const result = calcTileType(56, 8);
  expect(result).toBe("bottom-left");
});

test("should return bottom-right", () => {
  const result = calcTileType(63, 8);
  expect(result).toBe("bottom-right");
});

test("should return bottom", () => {
  const result = calcTileType(60, 8);
  expect(result).toBe("bottom");
});

test("should return mistake while creating object by new Character", () => {
  function result() {
    const unit = new Character(1);
    return unit;
  }
  expect(result).toThrow("not allowed to  create object by new Character");
});

test("should return message", () => {
  const bowman = new Bowman(1);
  bowman.health = 100;
  const received = getInfo(bowman);
  const expected = "\u{1F396}1\u{2694}25\u{1F6E1}25\u{2764}100";
  expect(received).toBe(expected);
});

test("should return right positions", () => {
  const received = getRightPositions(2, 2, 8);
  const expected = [3, 1, 10, 11, 9, 4, 0, 18, 20, 16];
  expect(received).toEqual(expected);
});

jest.mock("../GameStateService");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should test load", () => {
  const state = {
    level: 1,
    position: [],
    point: 10,
    theme: "desert",
  };
  const stateService = new GameStateService();
  stateService.load.mockReturnValue(state);
  const received = stateService.load();
  expect(received).toEqual(state);
});
