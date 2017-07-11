/**
 * Created by nkondova on 11.7.2017 г..
 */
class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.unitedRats.push(otherRat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}\n`;
        }

        return output.trim();
    }
}