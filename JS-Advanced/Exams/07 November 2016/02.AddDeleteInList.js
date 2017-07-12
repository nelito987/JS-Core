/**
 * Created by nkondova on 12.7.2017 г..
 */
let expect = require('chai').expect;
let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

describe('List function tests', function () {
    let list;
    beforeEach(function () {
        list = (function () {
            let data = [];
            return {
                add: function (item) {
                    data.push(item);
                },
                delete: function (index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function () {
                    return data.join(", ");
                }
            };
        })();
    });

    it('should be empty on init', function () {
        expect(list.toString()).to.equal('');
    });

    //add tests
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


    //delete tests
    it('Should have delete method', function () {
        expect(list.hasOwnProperty('delete')).to.equal(true);
        expect(typeof list.delete).to.equal('function');
    });

    //toString tests
    it('Should have toString() method', function () {
        expect(list.hasOwnProperty('toString')).to.equal(true);
        expect(typeof list.toString).to.equal('function');
    });

    it('Test empty list', function () {
       expect(list.toString()).to.equal('');
    });
});
