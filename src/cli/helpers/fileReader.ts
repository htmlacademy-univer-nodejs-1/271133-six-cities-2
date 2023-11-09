import EventEmitter from 'node:events';
import {createReadStream} from 'node:fs';

export default class FileReader extends EventEmitter {

  constructor(public filename: string) {
    super();
  }

  public async read(): Promise<void> {
    let data = '';
    let nextLine = -1;
    let rowCount = 0;

    const stream = createReadStream(this.filename, {
      highWaterMark: 2 ** 16,
      encoding: 'utf-8',
    });

    for await (const chunk of stream) {
      data += chunk.toString();
      while ((nextLine = data.indexOf('\n')) >= 0) {
        const row = data.slice(0, nextLine + 1);
        data = data.slice(++nextLine);
        rowCount++;
        this.emit('rowEnd', row);
      }
    }
    this.emit('fileEnd', rowCount);
  }
}
