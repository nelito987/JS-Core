/**
 * Created by Neli on 15.7.2017 г..
 */
let expect = require('chai').expect;
let list = (function createList() {
        let data = [];
        return {
            add: function (item) {
                data.push(item)
            },
            shiftLeft: function () {
                if (data.length > 1) {
                    let first = data.shift();
                    data.push(first);
                }
            },
            shiftRight: function () {
                if (data.length > 1) {
                    let last = data.pop();
                    data.unshift(last);
                }
            },
            swap: function (index1, index2) {
                if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                    !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                    index1 === index2) {
                    return false;
                }
                let temp = data[index1];
                data[index1] = data[index2];
                data[index2] = temp;
                return true;
            },
            toString: function () {
                return data.join(", ");
            }
        };
    }
)();

describe('List tests', function () {
   /* let list;
    beforeEach(function () {
        list = (function () {
            let data = [];
            return {
                add: function (item) {
                    data.push(item)
                },
                shiftLeft: function () {
                    if (data.length > 1) {
                        let first = data.shift();
                        data.push(first);
                    }
                },
                shiftRight: function () {
                    if (data.length > 1) {
                        let last = data.pop();
                        data.unshift(last);
                    }
                },
                swap: function (index1, index2) {
                    if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                        !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                        index1 === index2) {
                        return false;
                    }
                    let temp = data[index1];
                    data[index1] = data[index2];
                    data[index2] = temp;
                    return true;
                },
                toString: function () {
                    return data.join(", ");
                }
            };
        })();
    });
*/
    let list;
    beforeEach(function () {
        list = createList();
    });

    it('should be empty on init', function () {
        expect(list.toString()).to.equal('');
    });

    //add
    it('Should have add method', function () {
        expect(list.hasOwnProperty('add')).to.equal(true);
        expect(typeof list.add).to.equal('function');
    });

    it('Test add single value', function () {
        list.add(5);
        expect(list.toString()).to.equal('5');
    });

    it('Test add multiple value', function () {
        list.add(5);
        list.add(15);
        list.add(25);
        expect(list.toString()).to.equal('5, 15, 25');
    });

    it('Test add different types elements value', function () {
        list.add(5);
        list.add('five');
        list.add(25);
        list.add(true);

        expect(list.toString()).to.equal('5, five, 25, true');
    });

    //shiftLeft
    it('Should have shiftLeft method', function () {
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
        expect(typeof list.shiftLeft).to.equal('function');
    });
    it('Should do nothing on empty list', () => {
        list.shiftLeft();
        expect(list.toString()).to.equal('');
    });
    it('Should do nothing on 1 element list', () => {
        list.add(5);
        list.shiftLeft();
        expect(list.toString()).to.equal('5');
    });

    it('Should shift left correctly', function () {
       list.add(1);
       list.add(2);
       list.add(3);
       list.add(4);
       list.shiftLeft();
       expect(list.toString()).to.equal('2, 3, 4, 1');
    });

    //shiftRight
    it('Should have shiftRight method', function () {
        expect(list.hasOwnProperty('shiftRight')).to.equal(true);
        expect(typeof list.shiftRight).to.equal('function');
    });

    it('Should do nothing on empty list', () => {
        list.shiftRight();
        expect(list.toString()).to.equal('');
    });

    it('Should do nothing on 1 element list', () => {
        list.add(153);
        list.shiftRight();
        expect(list.toString()).to.equal('153');
    });


    it('Should shift right correctly', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.shiftRight();
        expect(list.toString()).to.equal('4, 1, 2, 3');
    });

    //Swap
    it('Should have swap method', function () {
        expect(list.hasOwnProperty('swap')).to.equal(true);
        expect(typeof list.swap).to.equal('function');
    });

    it('Should swap correctly 2 items and return true', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(0, 2);
        expect(list.toString()).to.equal('3, 2, 1');
        expect(result).to.equal(true);
    });

    it('Should swap correctly 2 items and return true', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(2, 0);
        expect(list.toString()).to.equal('3, 2, 1');
        expect(result).to.equal(true);
    });

    it('Should NOT swap on same indices', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(1, 1);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    it('Should NOT swap on negative index', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(1, -1);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    it('Should NOT swap on non-integer (float) index', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(0, 2.1);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    it('Should NOT swap on non-integer (other) index', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap({}, 0);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    it('Should NOT swap on out-of-range (edge case: at the exact end) index', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(0, 3);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    it('Should NOT swap on out-of-range index', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        let result = list.swap(1000, 3);
        expect(list.toString()).to.equal('1, 2, 3');
        expect(result).to.equal(false);
    });

    //toString
    it('Should have toString method', function () {
        expect(list.hasOwnProperty('toString')).to.equal(true);
        expect(typeof list.toString).to.equal('function');
    });

    it('Test empty list', function () {
        expect(list.toString()).to.equal('');
    });

    it('Should return correct list', () => {
        list.add('one');
        list.add(2);
        list.add({index: 3});
        expect(list.toString()).to.equal('one, 2, [object Object]');
    });

});
