import { ConsoleLines } from './console-lines';

describe('ConsoleLines', () => {
  let consoleLines: ConsoleLines;

  beforeEach(() => {
    consoleLines = new ConsoleLines();
  });

  describe('constructor', () => {
    it('should instantiate with empty lines', () => {
      expect(consoleLines.getLines()).toEqual([]);
    });
  });

  describe('addLine', () => {
    it('should add one line', () => {
      const line = 'line';

      consoleLines.addLine(line);
      const lines = consoleLines.getLines();

      expect(lines.length).toEqual(1);
      expect(lines[0]).toEqual(line);
    });

    it('should add multiple lines', () => {
      const line1 = 'line1';
      const line2 = 'line2';

      consoleLines.addLine(line1);
      consoleLines.addLine(line2);
      const lines = consoleLines.getLines();

      expect(lines.length).toEqual(2);
      expect(lines[0]).toEqual(line1);
      expect(lines[1]).toEqual(line2);
    });
  });
});
