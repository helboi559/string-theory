
// console.log(xify('hello'))
// -->'XXXXX'

//input:str
//output:returns same str
function xify(str) {
    
    //create empt string to add x to
    let newStr = ""
    //iterate arr
    for(let i = 0 ; i < str.length ; i++) {
        if(str[i] !== 'x') {
            newStr += str[i]
        } else {
            newStr += str[i]
        }
    }
    return newStr
}


// console.log(yellingChars('goodness'))
// --> 'g!o!o!d!n!e!s!s!'

function yellingChars(str) {
    //set empt str
    let newStr = ""
    //iterate str
    for(let i = 0 ; i < str.length ; i++) {
        // add to new str with exclamation mark
        newStr += str[i] + "!"
    }
    return newStr
}

// console.log(indexedChars('hello'))
// --> '0h1e2l3l4o'

//input: str
//output:new str with index of each char before
function indexedChars(str) {
    let newStr = ""

    for(let i = 0 ; i < str.length ; i ++) {
        newStr += i + str[i]
    }
    return newStr
}


//console.log(numberedChars('hello'))
// --> '(1)h(2)e(3)l(4)l(5)o'

//input: str
//output:adds the num of each char before number

function numberedChars(str) {
    let newStr = ""

    for(let i = 0 ; i < str.length ; i ++) {
        let num = Number(i+1)
        newStr += `(${num})${str[i]}`
    }
    return newStr
}

// console.log(exclaim('What are you doing? Are you a fool?'))
// --> 'What are you doing! Are you a fool!'

//input: str
//output:repalce every question mark or period with "!"

function exclaim(str) {
    let newStr = ""
    
    for(let i = 0 ; i < str.length ; i ++) {
        //if individual char matches with replaceWith
        if (str[i] === '?') {
            //replace with !
            newStr += '!'
        } else if(str[i] === '.') {
            newStr += '!'
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

// console.log(repeatIt('beetlejuice', 3))
// --> 'beetlejuicebeetlejuicebeetlejuice'

//input: str
//output:repeat str by num of count

function repeatIt(str,copies) {
    let newStr = ""
    //keep running count 
    let count = 0
    //loop to keep count of how many copies
    while (copies > count) {
        //add a copy of the entire str
        newStr += str
        count ++
    }
    return newStr
}

// console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))
// --> 'The fault, dear...'

//input: str
//output:shortens a string by 15 plus and ellipsis

function truncate(str) {
    let newStr = ""
    
    //set current index to count on
    let index = 0
    //while count < 15
    while (index < 15) {
        //add char to newWord
        newStr += str[index]
        // increse count by 1
        index ++
    }
    let ellipsis = newStr + '...'
    
    return ellipsis
}

// console.log(ciEmailify('colin jaffe'))
// --> 'colin.jaffe@codeimmersives.com'

//input: str
//output:creates email from a two-part name

function ciEmailify(str) {
    //combine first and last name
    let fullName = ""
    //iterate chars
    for(let i = 0; i < str.length; i++) {
        //identify emply space
        if(str[i] === ' ') {
            //replace with '.'
            fullName += '.'
        } else {
            fullName += str[i]
        }
    }
    //combine emails
    let email = fullName + '@codeimmersives.com'
    return email

}

// console.log(reverse('colin'))
// --> 'niloc'

//input: str
//output:reverses string

function reverse(str) {
    let newStr = ""
    
    for(let i = str.length -1 ; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

// console.log(onlyVowels('Colin Jaffe'))
// --> 'oiae'

//input: str
//output:returns only vowels

function onlyVowels(str) {
    let newStr = ""
    
    for(let i = 0 ; i < str.length ; i++) {
        if(str[i] === 'a' || str[i] === 'A' || str[i] === 'e' || str[i] === 'E' || str[i] === 'i' || str[i] === 'I' || str[i] === 'o' || str[i] === 'O' || str[i] === 'u' || str[i] === 'U') {
            newStr += str[i]
        }
    }
    return newStr
}

