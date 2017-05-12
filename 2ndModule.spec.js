import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import * as firstModule from './1stModule';
import { useIt } from './2ndModule';

describe('2ndModule useIt', () => {
  afterEach(() => {
    firstModule.doStuff.restore();
  });

  it('should have called doStuff', () => {
    sinon.stub(firstModule, 'doStuff');
    let blah = useIt();

    expect(firstModule.doStuff).to.have.been.called;
  });

  it('make firstModule do different stuff', () => {
    sinon.stub(firstModule, 'doStuff', () => { return 'different stuff' });

    let blah = useIt();
    expect(blah).to.equal('different stuff');
  });
});
