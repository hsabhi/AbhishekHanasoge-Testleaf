const browserVersion="Constant-chrome"

function browserVersionWithVAR()
{
var browserVersion = "firefox"
console.log("this is from browerVersion with Var and it should display firefox: "+browserVersion)
}

function browserVersionWithLet()
{
let browserVersion = "edge"
console.log("the output of this block is from Let declatation: "+browserVersion)
}

console.log("Display the browserVerison constant: " +browserVersion) // this displays connst variable
browserVersionWithVAR()
browserVersionWithLet()

function getBrowserVersionVAR()
{
    if (browser=="chrome"){

        var browserVersion ="CHROME-VAR"
    }
    console.log("browserVersion is "+browserVersion)
}
browser = "chrome"
getBrowserVersionVAR()

function getBrowserVersionLET()
{
    if (browser=="chrome"){

        let browserVersion ="CHROME-LET"
    }
    console.log("browserVersion is "+browserVersion)
}
getBrowserVersionLET() // this is giving output of constant value declared at the global level