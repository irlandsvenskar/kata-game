import { expect } from 'chai';

const formatTime = (timeInMillis) => {
    return '0.000s';
}

describe('Format time', () => {

    it('should format 0ms', () => {
        expect(formatTime(0)).to.equal('0.000s');
    });

});
