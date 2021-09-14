function isValid(s){

    let brckt = []

    for (i = 0; i < s.length; i++) {
        let char = brckt[brckt.length - 1]

        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            brckt.push(s[i])
        }
        else if ((char == "(" && s[i] == ")") || (char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")) {
            brckt.pop()
        } else
            return false
    }
    return brckt.length ? false : true
}

let desc = "valid short code";
assertEqual(isValid("()"),true,desc);

// let desc = "missing closer";
// assertEqual(isValid("[[]()"),true,desc);

function assertEqual(a,b,desc){
    if(a===b){
        console.log(`${desc} ...PASS`);
    }else{
        console.log(`${desc} ...FAIL:${a} !=${b}`);
    }
}