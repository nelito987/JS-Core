/**
 * Created by nkondova on 11.7.2017 г..
 */
(function () {
    let id = 0;

    return class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(otherObject) {
            for (let prop in otherObject) {
                if (otherObject.hasOwnProperty(prop)) {
                    if (typeof otherObject[prop] == 'function') {
                        Extensible.prototype[prop] = otherObject[prop];
                    } else {
                        this[prop] = otherObject[prop];
                    }
                }
            }
        }
    }
})()