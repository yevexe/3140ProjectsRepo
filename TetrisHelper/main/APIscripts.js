let SprintInfo = [];
let CheeseInfo = [];
let SurvivalInfo = [];
let UltraInfo = [];
let TwentyInfo = [];
let PCMODEInfo = [];

let EnterKeyCliked = false;

async function ButtClick(butt){
                /*
                DANIEL YURSKIY 07/29/25
                    TWO PLAYER COMPARISON UPDATE:
                        1. CHECK IF THE PLAYER 1 THING IS EMPTY/ HAS AN OUTPUT
                         A. IF IT HAS AN OUTPUT THAT MEANS THE USER IS CHECKING PLAYER 2, SO CHECK PLAYER 2
                         B. IF IT HAS NO OUTPUT THAT MEANS WE ARE ALLOWED TO ASSUME THE USER WANTS TO CHECK PLAYER 1.
                        2. IF THERE IS INPUTS ON BOTH AND OUTPUTS ON NEITHER THAN CHECK PLAYER 1.
                        3. IF THERE IS NO INPUT ON PLAYER 1 AND THERE IS ONE ON PLAYER 2, THEN JUST RUN PLAYER 2.
                        
                */

                //Getting the username from the input in the main page
                let username;
                let whereToOutput;
                
                //runs when the user clicks on the button but not from a enter key press, meaning they clicked on a specific button.
                if(!EnterKeyCliked){

                    (butt.id.includes("2") 
                    ? (username = document.getElementById("username1").value, whereToOutput = "2") 
                    : (username = document.getElementById("username").value, whereToOutput = "1"));

                }
                //only runs if the enter key is clicked
                else{

                    //checks if player 1's output is empty => if the last element in the resultPara is the username, that means there was nothing added onto it.
                    (document.getElementById("result").lastElementChild.lastElementChild.id === "USERNAME" 
                    ?(username = document.getElementById("username").value, whereToOutput = "1")
                    :(username = document.getElementById("username1").value, whereToOutput = "2"));

                }

                /* REMOVED AS OF 07/29/25 FOR THE TWO PLAYER COMPARISON UPDATE.
                //first ever ternary statement, if the username has a value then let username equal to that value, anything else (meaning it's empty) throw an alert.
                let username = (document.getElementById("username").value) ? document.getElementById("username").value : alert("You Wrote the Wrong Input?!");
                */

                console.log(username);

                //Only run the code if the username is a valid input
                if(username !== undefined && !(username === "")){

                    //edit the datadump with the info I already have (only the username)
                   // document.getElementById(whereToOutput).querySelector("#USERNAME").innerHTML = "USERNAME INPUTTED: <br>"+username+"<br>";

                   
                   let type;
                  
                    //What game you want 1 = sprint, 3 = cheese, 4 = survival, 5 = ultra, 7 = 20TSD, 8 = PC Mode

                    SprintInfo = await ObtainGameInformation(username, 1);
                    type = "sprint";
                    AddInfoToFrontend(SprintInfo, whereToOutput,type);
                     //Show the result
                    document.getElementById("Sprint").classList.remove("hiddenToggleOn");

                    CheeseInfo = await ObtainGameInformation(username, 3);
                    type = "cheese"
                    AddInfoToFrontend(CheeseInfo, whereToOutput,type);

                    SurvivalInfo = await ObtainGameInformation(username, 4);
                    type = "surv"
                    AddInfoToFrontend(SurvivalInfo, whereToOutput,type);

                    UltraInfo = await ObtainGameInformation(username, 5);
                    type = "ultra"
                    AddInfoToFrontend(UltraInfo, whereToOutput,type);

                    TwentyInfo = await ObtainGameInformation(username, 7);
                    AddInfoToFrontend(TwentyInfo, whereToOutput,type);

                    PCMODEInfo = await ObtainGameInformation(username, 8);
                    AddInfoToFrontend(PCMODEInfo, whereToOutput,type);

                }
                else{
                    alert("You Wrote the Wrong Input?!");
                }
}

document.querySelectorAll(".submitButton").forEach(butt => butt.onclick = () => ButtClick(butt));

/*
document.addEventListener("keypress", function(event){
    (event.key === "Enter" ? (EnterKeyCliked = true , ButtClick()) : console.log());
}); 
*/

function AddInfoToFrontend(dataArray, whereToOutput,type){

    let ShouldBeOutputted = true;
    let amountThatIs0 = 0;

    //If the data found does not have a best game, that means there was no games played at all.
    //if the user has played a game, no matter what that will be considered the 'best' game
    if (dataArray[0].best.length !== 0){
        
        

        var forty;
        var twenty;
        var hundred;
        var thousand;

        for(const game of dataArray){
            
            //if the game does not have a best, that means the user has not played a game in this mode AT ALL.
            if(game.best.length !== 0){

                if(game.GameMode === "Sprint" || game.GameMode === "Cheese"){

                    switch(game.Type){
                        case "40L/10L":
                            forty = game;
                            break;
                        case "20L/18L":
                            twenty = game;
                            break;
                        case "100L":
                            hundred = game;
                            break;
                        case "1000L":
                            thousand = game;
                            break;
                    }

                }
                else{
                    forty = game;
                }
                
            }   

        }

        if (forty) ACTUALLYPushToFrontEnd(forty, whereToOutput, amountThatIs0,type);

        let buttons = document.querySelector(`.buttonGroupContainer.${type}`).querySelectorAll('button');
        for (const butt of buttons){
            butt.onclick = function(){
                
                    let wheretoOut = document.querySelector(`.resultPara.${type}`);
                    wheretoOut.querySelector(`#TopTime${whereToOutput}`).innerHTML=` `
                    wheretoOut.querySelector(`#WorstTime${whereToOutput}`).innerHTML =` ` 
                    wheretoOut.querySelector(`#DaysPlayed${whereToOutput}`).innerHTML =` ` 
                    wheretoOut.querySelector(`#GamesPlayed${whereToOutput}`).innerHTML =` ` 
                    wheretoOut.querySelector(`#AverageTime${whereToOutput}`).innerHTML = ` `

                switch(butt.id){
                    case "40L/10L":
                        document.querySelector(`.buttonGroupContainer.${type}`).querySelectorAll('button').forEach(butt => butt.classList.remove("buttonActivatedToggleOn"));
                        butt.classList.add("buttonActivatedToggleOn");
                        ACTUALLYPushToFrontEnd(forty, whereToOutput, amountThatIs0,type);
                        break;
                    case "20L/18L":
                        document.querySelector(`.buttonGroupContainer.${type}`).querySelectorAll('button').forEach(butt => butt.classList.remove("buttonActivatedToggleOn"));
                        butt.classList.add("buttonActivatedToggleOn");
                        ACTUALLYPushToFrontEnd(twenty, whereToOutput, amountThatIs0,type);
                        break;
                    case "100L":
                        document.querySelector(`.buttonGroupContainer.${type}`).querySelectorAll('button').forEach(butt => butt.classList.remove("buttonActivatedToggleOn"));
                        butt.classList.add("buttonActivatedToggleOn");
                        ACTUALLYPushToFrontEnd(hundred, whereToOutput, amountThatIs0,type);
                        break;
                    
                    case "1000L":
                        document.querySelector(`.buttonGroupContainer.${type}`).querySelectorAll('button').forEach(butt => butt.classList.remove("buttonActivatedToggleOn"));
                        butt.classList.add("buttonActivatedToggleOn");
                        ACTUALLYPushToFrontEnd(thousand, whereToOutput, amountThatIs0,type);
                        break;
                }
            }   
            
        }
;

        /*
        if (twenty) ACTUALLYPushToFrontEnd(twenty, whereToOutput, amountThatIs0,type);
        if (hundred) ACTUALLYPushToFrontEnd(hundred, whereToOutput, amountThatIs0,type);
        if (thousand) ACTUALLYPushToFrontEnd(thousand, whereToOutput, amountThatIs0,type);
        */
        
        
    
    }

}


function ACTUALLYPushToFrontEnd(game,whereToOutput,amountThatIs0,type){
    
    let wheretoOut = document.querySelector(`.resultPara.${type}`);

    (game.min !== undefined && game.min !== 0 ) 
    ? wheretoOut.querySelector(`#TopTime${whereToOutput}`).innerHTML+=`${game.min}s` 
    : amountThatIs0++;

    (game.max !== undefined && game.max !== 0) 
    ? wheretoOut.querySelector(`#WorstTime${whereToOutput}`).innerHTML+=`${game.max}s` 
    : amountThatIs0++;

    (game.days !== undefined && game.days !== 0) 
    ? wheretoOut.querySelector(`#DaysPlayed${whereToOutput}`).innerHTML+=`${game.days}` 
    : amountThatIs0++;

    (game.games !== undefined && game.games !== 0) 
    ? wheretoOut.querySelector(`#GamesPlayed${whereToOutput}`).innerHTML+=`${game.games}` 
    : amountThatIs0++;

    (game.avg !== undefined && game.avg !== 0) 
    ? wheretoOut.querySelector(`#AverageTime${whereToOutput}`).innerHTML+=`${game.avg}` 
    : amountThatIs0++;
    
}

async function ObtainGameInformation(username, game){
     /*
        ObtainGameInformation(username, game) will be a function that returns the PBs for each mode of that game
        //Programmer uses this function by inputting the username and the game mode 1 = sprint, 3 = cheese, 4 = survival, 5 = ultra, 7 = 20TSD, 8 = PC Mode
        //Depending on the gamemode the fetch request will run multiple or one time to obtain every piece of information in that gamemode (see above for each mode of each game).
        //Result will return an Array/object of the information divided by each game.

        each mode of each game:
         Sprint = 1 = 40L/10L, 2 = 20L/18L, 3 = 100L, 4 = 1000L
         Cheese = 1 = 40L/10L, 2 = 20L/18L, 3 = 100L, 4 = 1000L
         survival = 1 = 40L/10L
         ultra = 1 = 40L/10L
         20TSD = 1 = 40L/10L
         PC Mode = 1 = 40L/10L

         API CALL THAT NEEDS TO BE USED = GET https://jstris.jezevec10.com/api/u/<username>/records/<game>?mode=<mode>rule=<rule>
     */


        //creating the final Array
        let ResultArray = [];
        //creating Name of the game string
        let Name = null;

        //Switch case to check which game it is
        switch(game){    

            //Both Sprint and Cheese use the same code
            case 1:
                //If the game = 1, then the mode we are looking at is Sprint
                Name = "Sprint";
            case 3:
                //If the game has already been initalized as Sprint, then case 1 already ran so dont change the name to cheese, other than that, the case 3 has only ran meaning the game mode we are looking at is cheese.
                (Name !== "Sprint") ? Name = "Cheese" : Name = "Sprint";

                //Store all async promises for Promise.all() to wait for them to finish later
                let promises = [];

                //1 = 40L/10L, 2 = 20L/18L, 3 = 100L, 4 = 1000L
                for (let d = 1; d <= 4; d++){
                    let ModeInTheMode = null;
                    switch(d){
                        case 1:
                            ModeInTheMode = "40L/10L";
                            break;
                        case 2:
                            ModeInTheMode = "20L/18L";
                            break;
                        case 3:
                            ModeInTheMode = "100L";
                            break;
                        case 4:
                            ModeInTheMode = "1000L";
                            break;
                        default:
                            break;
                    }

                   let promise = fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://jstris.jezevec10.com/api/u/${username}/records/${game}?mode=${d}&best`)}`)
                    .then(response => response.json())
                    .then(result => {

                        result.GameMode = Name;
                        result.Type = ModeInTheMode;

                        ResultArray.push(result);
                    })
                    .catch(error => console.log('error', error));

                    //push this specific fetch call into current promises
                    promises.push(promise);
                }

                //Wait until each promise is finished
                await Promise.all(promises);
                //once all promises finished then finish the case code.
                break;

            //Everything else other than sprint and cheese only use mode 1.
            //4 = survival, 5 = ultra, 7 = 20TSD, 8 = PC Mode
            default:
  
                switch(game){
                    case 4:
                        Name = "survival";
                        break;
                    case 5:
                        Name = "ultra";
                        break;
                    case 7:
                        Name = "20TSD";
                        break;
                    case 8:
                        Name = "PC Mode";
                        break;
                }
                try{
                    const singleApiCall = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://jstris.jezevec10.com/api/u/${username}/records/${game}?mode=1&best`)}`)
                    let response = await singleApiCall.json();


                    response.GameMode = Name;
                    ResultArray.push(response);



                }catch(error){console.log('error', error);}

                break;

        }

        //console.log(ResultArray);
    //Return the result array (every information has been obtained and sorted)
    return ResultArray;
        
}
