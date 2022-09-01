let array_of_players=[];

function addToCart(playerName,id){
   let ul_tag = document.getElementById('ul-id');
   let li = document.createElement('li');
    

   // collecting array
   
    array_of_players.push(playerName);
    // console.log(array_of_players);
    
    if(array_of_players.length <= 5){   
        li.innerText = playerName;
        ul_tag.appendChild(li);
        document.getElementById(id).disabled = true;

    }else{
        alert('Player Number must not more then 5!');
    }

}

document.getElementById('calculate-btn').addEventListener('click',function(){
    let per_player_cost_tag = document.getElementById('per-player-cost')
    let per_player_cost_String = per_player_cost_tag.value;
    let per_player_cost_value = parseFloat(per_player_cost_String);

    let total_cost = per_player_cost_value * array_of_players.length  ;
     // here -1 is used for array take value form 0 index but in calculation 0 can not considerd. for this reason i have give -1 .

    let player_Expences =document.getElementById('player_Expences');


    player_Expences.innerText = total_cost;
})

function getValue(id){
    let tag = document.getElementById(id);
    let String = tag.value;
    let value = parseFloat(String);
    return value;
}
document.getElementById('calculate-total').addEventListener('click',function(){
    let coach_sallary = getValue('coach');
    let manager_sallary = getValue('manager');
    let player_Expense = document.getElementById('player_Expences').innerText;
    let total_cost = coach_sallary + manager_sallary + player_Expense;

    let totalExpense = document.getElementById('totalExpense');
    totalExpense.innerText = total_cost;
})