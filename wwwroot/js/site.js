// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// the get date for entry into Logtime in Create page
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById("myInputID").value = today; //set value on myInputID



// auto create drop down from array for App selection
let select = document.getElementById("select"),
    arr= ["APPLID","BRIDGE","COMMENTS","FINANCE_CONSO","FINANCE_INPUT","HFL","INSURANCE","INTERCO_MATCH","PEOPLEMGT","REQMOD","SALES_GP","SPECACBS","SPECLEG","SPECOPER","SUSTAIN"];

for (let i = 0; i < arr.length; i++)
{
    let option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    select.insertBefore(option, select.lastChild);
}


