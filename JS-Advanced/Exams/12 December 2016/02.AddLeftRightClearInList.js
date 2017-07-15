/**
 * Created by Neli on 9.7.2017 г..
 */
let makeList = require('./makeList');
let expect = require('chai').expect;

describe("Tests make a List", function () {
   let myList = {};

   beforeEach(function () {
      myList = makeList();
   });

   it("should contain all functions", function () {
       expect(myList.addLeft).to.exist;
       expect(myList.addRight).to.exist;
       expect(myList.clear).to.exist;
       expect(myList.toString).to.exist;
   });

   it("should be empty in the beggining", function () {
      expect(myList.toString()).to.equal("");
   });

   it("add to the left", function () {
      myList.addLeft('left');
      expect(myList.toString()).to.equal('left');
   });

    it("add to the right", function () {
        myList.addRight('right');
        expect(myList.toString()).to.equal('right');
    });

    it("add multiple to the left correctly", function () {
        myList.addLeft('last');
        myList.addLeft(2);
        myList.addLeft(true);
        expect(myList.toString()).to.equal('true, 2, last');
    });

    it("add multiple to the right correctly", function () {
        myList.addRight('first');
        myList.addRight(2);
        myList.addRight(false);
        expect(myList.toString()).to.equal('first, 2, false');
    });

    it("should clear the list correctly", function () {
       myList.addLeft('first');
       myList.addRight('second');
       myList.clear();
       expect(myList.toString()).to.equal('');
    });

});