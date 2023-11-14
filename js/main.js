// Questo è il file che contiene tutto il codice JS della pagina web
function FormCompleted(event){
    event.preventDefault();

    let nameSurname = document.getElementById("nameSurname").value;
    let kilometersToDo = document.getElementById("kilometersToDo").value;
    let age = document.getElementById("age").value;
    let carriegeNumber = Math.floor(Math.random() * 11) + 1;
    let cpNumber = Math.floor(Math.random() * 10001) + 1;

    if (isNaN(kilometersToDo)){
        alert("Deh peffozza");
    }

    kilometersToDo = parseInt(kilometersToDo);


    let baseTicketPrice = kilometersToDo * 0.21;

    if(age === "2") {
        baseTicketPrice = baseTicketPrice-((baseTicketPrice*20)/100);
        
        
    } else if (age === "3"){
        baseTicketPrice = baseTicketPrice-((baseTicketPrice*40)/100);
        
        
    } 

    let finalPrice = baseTicketPrice.toFixed(2);
    
        
    

    document.getElementById("ticket-name").innerHTML = nameSurname;
    document.getElementById("carriege-number").innerHTML = carriegeNumber;
    document.getElementById("Cp-number").innerHTML = cpNumber;
    document.getElementById("finalPrice").innerHTML = finalPrice + "€";

    

}
