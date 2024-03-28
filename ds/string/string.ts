<<<<<<< HEAD
// const userName: string = 'safeer'
// console.log(userName[2]);

// let userName2: string = 'safeer ep 2'

// we can't do
// userName2[2] = 'b'
 
function shortestPalindrome(s: string): string {
    if (s.length === 1) return s;

    let tempStr = ''
    let tempStr2 = ''
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            tempStr = tempStr + s[s.length - 1]
            tempStr2 = s[s.length - 1] + tempStr2
            s = s.slice(0, s.length-1)
            i = 0;
        }
    }
    console.log(tempStr+s+tempStr2);
    
    return tempStr+s+tempStr2;
};

shortestPalindrome("aacecaaa")
shortestPalindrome("abcd")
=======
const userName: string = 'safeer'
console.log(userName[2]);

let userName2: string = 'safeer ep 2'

// we can't do
// userName2[2] = 'b'
 
>>>>>>> mongodb
