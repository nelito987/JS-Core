/**
 * Created by Neli on 16.6.2017 г..
 */
function solve(input) {

    function isTokenValid(token, hash) {
        for (var j = 0; j < hash.length; j+=2) {
            let num = Number(hash[j]);
            let letter = hash[j+1];
            if(num == token.split('').filter(c => c === letter).length){
                return true;
            }
        }
        return false;
    }
    let requests = input.filter(e => e != '');
    let hashPattern = requests.pop();
    let methodPattern = /Method:\s(GET|POST|PUT|DELETE)$/;
    let credentialsPattern = /Credentials:\s((Basic|Bearer)\s[a-zA-Z0-9]+)$/;
    let contentPattern = /Content:\s([a-zA-Z0-9\\.]+)$/;

    for (var i = 0; i < requests.length; i+=3) {
        let matchMethod = methodPattern.exec(requests[i]);
        let matchCred = credentialsPattern.exec(requests[i+1]);
        let matchContent = contentPattern.exec(requests[i+2]);

        if(matchMethod && matchCred && matchContent){
            let requestType = matchMethod[1];
            let authorization = matchCred[1].split(' ')[0];
            let token = matchCred[1].split(' ')[1];

            if(requestType != 'GET' && authorization == 'Basic'){
                console.log(`Response-Method:${matchMethod[1]}&Code:401`);
                continue;
            }

            if(!isTokenValid(token, hashPattern)){
                console.log(`Response-Method:${matchMethod[1]}&Code:403`);
                continue;
            }

            console.log(`Response-Method:${matchMethod[1]}&Code:200&Header:${token}`);

        }else{
            console.log("Response-Code:400");
        }
    }

}
//solve(["Method: PUT","Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB","Content: users.asd/1782452$278///**asd123","Method: POST","Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas","Content: Johnathan","Method: DELETE","Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx","Content: This.is.a.sample.content","2e5g"]);
solve(["Method: GET", "Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB", "Content: users.asd.1782452.278asd", "Method: POST", "Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas", "Content: Johnathan", "2q"]);