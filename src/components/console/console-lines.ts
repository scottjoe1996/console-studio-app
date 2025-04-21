export class ConsoleLines {
  private readonly lines: string[];

  constructor() {
    this.lines = [];
  }

  public getLines(): string[] {
    return this.lines;
  }

  public addLine(line: string): void {
    this.lines.push(line);
  }
}
