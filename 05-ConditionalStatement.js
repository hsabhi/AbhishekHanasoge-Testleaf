function launchBrowser()
{
let browserName = "chrome-223"
if (browserName == "chrome")
{
console.log("you have entered chrome browser: "+browserName)

}
else {
    console.log("you havent entered chrome, sorry the value is: "+browserName )
}
}

function runTests()
{
let testType= "regresssion"
switch(testType){

  

    case "regression" : 
        console.log("current execution phase is REGRESSION TESTING: "+testType)
        break

    case "sanity" :
        console.log("current execution phase is SANITY TESTING "+ testType)
        break

    default:
        console.log("current execution phase is DEFAULT SMOKE "+ testType)
        break
}


}


launchBrowser()
runTests()
