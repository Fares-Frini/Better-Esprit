const ParamName_BetterMoyenne = "BetterMoyenne_Param";
const ParamName_DarkMode = "DarkMode_Param";
const ParamName_BetterDisplay = "BetterDisplay_Param";



window.addEventListener("load",function(){
    setTimeout(() => { 
        console.log("World!");
        var loader = document.getElementById("preloader");
        loader.style.display="none";
    }, 2000);
})

document.addEventListener("DOMContentLoaded",async ()=>{
    //setup DOM elements
    const BetterMoyenneCheckbox = document.getElementById("BetterMoyenneCheckbox");
    const DarkModeCheckbox = document.getElementById("DarkModeCheckbox");
    const BetterDisplayCheckbox = document.getElementById("BetterDisplayCheckbox");
    
    //load params
    let paramValue_BetterMoyenne = await getParam(ParamName_BetterMoyenne);
    let paramValue_DarkMode = await getParam(ParamName_DarkMode);
    let paramValue_BetterDisplay = await getParam(ParamName_BetterDisplay);
    
    //set each element to its param
    paramValue_BetterMoyenne !== undefined ? (BetterMoyenneCheckbox.checked = paramValue_BetterMoyenne) : undefined;
    paramValue_DarkMode !== undefined ? (DarkModeCheckbox.checked = paramValue_DarkMode) : undefined;
    paramValue_BetterDisplay !== undefined ? (BetterDisplayCheckbox.checked = paramValue_BetterDisplay) : undefined;
    console.log("param value better moyenne: ",paramValue_BetterMoyenne);
    console.log("param value dark mode: ",paramValue_DarkMode);
    console.log("param value better display: ",paramValue_BetterDisplay);


    //add events after page load 
    BetterMoyenneCheckbox.addEventListener("change", betterMoyenne)
    DarkModeCheckbox.addEventListener("change", darkMode)
    BetterDisplayCheckbox.addEventListener("change", betterDisplay)
})



//functions 
function betterMoyenne(ev){
    //save better moyenne button status
    setParam(ParamName_BetterMoyenne, ev.target.checked);
    //to do...
    
}
function darkMode(ev){
    //save better moyenne button status
    setParam(ParamName_DarkMode, ev.target.checked);
    //to do...
    
}
function betterDisplay(ev){
    //save better moyenne button status
    setParam(ParamName_BetterDisplay, ev.target.checked);
    //to do...
    
}


//set /get params
function setParam(paramName, bool){
    chrome.storage.local.set({[paramName]: bool}, function() {
        console.log(paramName, " is set: ", bool);
    });
}
/**
 * @returns param value on success, undefined on fail.
 */
async function getParam(paramName){
    try {
        let paramValue = await new Promise((resolve,reject)=>{
            try {
                chrome.storage.local.get([paramName], function(result) {
                    resolve(result[paramName]);
                });
            } catch (error) {
                console.error(error);
                reject(error);
            }
        })
        return paramValue;
    } catch (error) {
        return undefined;
    }
}