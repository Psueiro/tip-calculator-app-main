
let bill = 0;
let percentage = 0;
let people = 0;

function replyClick(id)
{
    selectPercentage(id);
}

function selectPercentage(id)
{
    resetButtons();
    document.getElementById(id).style.color = "hsl(183, 100%, 15%)";
    document.getElementById(id).style.backgroundColor = "hsl(172, 67%, 45%)";
    innerstring = document.getElementById(id).innerHTML;
    percentage = Number(innerstring.substring(0, innerstring.length - 10));

    document.getElementById("tippercentinput").value = ""

    calculate();
}

function resetButtons()
{
    const buttons = document.getElementsByClassName("tippercentbutton");

    for (let i = 0; i < buttons.length;i++)
    {
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
}

function setPercentage()
{
    resetButtons();
    percentage = document.getElementById("tippercentinput").value;
    calculate();
    resetcheck();
}

function setBill()
{
    bill = document.getElementById("billnumber").value;
    calculate();
    resetcheck();
}

function setPeople()
{
    people = document.getElementById("peopleamount").value;

    if(people == 0)
    {
        document.getElementById("peopleamount").style.outlineWidth = "2px";
        document.getElementById("peopleamount").style.outlineColor = "#B47C6D";
        document.getElementById("zeropeoplewarning").innerHTML = "Can't be zero";        
    } else{
        document.getElementById("peopleamount").style.outlineColor = "hsl(172, 67%, 45%)";
        document.getElementById("zeropeoplewarning").innerHTML = "";
    }
    calculate();
    resetcheck();
}

function calculate()
{
    if(people ==  0)return;
    let tipamount = ((bill * (percentage/100))/people).toFixed(2);
    let total = ((bill / people) + Number(tipamount)).toFixed(2);

    document.getElementById("tipamount").innerHTML = "$" + tipamount;
    document.getElementById("total").innerHTML = "$" + total;
}

function resetcheck()
{
    // if(bill == 0 && percentage == 0 && people == 0)
    // {
    //     document.getElementById("resetbutton").style.backgroundColor = "hsl(172, 67%, 25%)";

    // }else
    // {
    //     document.getElementById("resetbutton").style.backgroundColor = "hsl(172, 67%, 45%)";
    // }
}


function reset()
{
    if(bill == 0 && percentage == 0 && people == 0) return;

    bill = 0;
    percentage = 0;
    people = 0;
    document.getElementById("billnumber").value = "";
    people = document.getElementById("peopleamount").value = "";
    document.getElementById("tipamount").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("tippercentinput").value = "";
    resetButtons();
}