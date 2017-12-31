import { expect } from 'chai';
import { formatTime } from './ExerciseSummaryPage';

describe('Format time', () => {

    it('should format 0ms', () => {
        expect(formatTime(0)).to.equal('0.000s');
    });

    it('should format 2ms', () => {
        expect(formatTime(2)).to.equal('0.002s');
    });

    it('should format 10ms', () => {
        expect(formatTime(10)).to.equal('0.010s');
    });

    it('should format 500ms', () => {
        expect(formatTime(500)).to.equal('0.500s');
    });

    it('should format 1001ms', () => {
        expect(formatTime(1001)).to.equal('1.001s');
    });

    it('should format 2000ms', () => {
        expect(formatTime(2000)).to.equal('2.000s');
    });

});
