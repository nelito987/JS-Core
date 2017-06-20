/**
 * Created by Neli on 14.6.2017 г..
 */
function solve(text){
    Array.prototype.contains = function (arg) {
        for (var array = 0; array < this.length; array++)
            if (this[array] === arg)
                return true;
        return false;
    };

    let banned = text.pop().split(' ');
    let input = text.join('\n');

    //let pattern = /<code>.*?<\/code>|#([a-zA-Z][\w-]+[a-zA-Z0-9])/g;
    let pattern = /<code>[\w\W]*?<\/code>|#([a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z0-9]+)\b/g;
    let match;

    while(match = pattern.exec(input)){
        let codePattern = /<code>/g;
        if(!codePattern.test(match)){
            if(banned.contains(match[1])){
                input = input.replace(match[0], '*'.repeat(match[1].length))
            }else{
                input = input.replace(match[0], `<a href="/users/profile/show/${match[1]}">${match[1]}</a>`);
            }
        }
    }

    console.log(input);
}
solve(["#RoYaL: I'm not sure what you mean,", "but I am confident that I've written", "everything correctly. Ask #iordan_93", "and #pesho if you don't believe me", "<code>", "#trying to print stuff", "print(\"yoo\")", "</code>", "pesho gosho"]);
solve(["<code>","#lele","#pochna se </code>","<code> #mani_begai #gosho <code>","gosho"]);