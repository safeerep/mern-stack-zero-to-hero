const checkPalindrome = (str: string): boolean => {
    if (str.length === 1) return true
    if (str[0] === str[str.length - 1]) {
        const result = checkPalindrome(str.slice(1, str.length - 1))
        if (!result) {
            return false;
        }
    } else {
        return false;
    }
    return true;
}

console.log(checkPalindrome("malayxalam"))