import { healthStatus } from "../characters.js";

test.each([
    ['healthy', 60],
    ['wounded', 30],
    ['critical', 10],
  ])(
    'Health Status Function: should return "%s"',
    (expected, health) => { 
      const character = { name: 'TestCharacter', health }; 
      const result = healthStatus(character); 
      expect(result).toBe(expected); 
    }
  );