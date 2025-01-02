import { MyPipePipe } from './my-pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('MyPipePipe', () => {
  it('create an instance', () => {
    const sanitizerMock = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    const pipe = new MyPipePipe(sanitizerMock);
    expect(pipe).toBeTruthy();
  });
});
