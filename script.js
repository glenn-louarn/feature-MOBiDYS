menu = document.getElementById("mydiv")
menu.style.top = "821px"
dragElement(menu);

document.getElementById("livre").addEventListener("click", myFunction);

function myFunction() {
    menu.style.top = "821px"
}
function dragElement(elmnt) {
    var pos2 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY;
        pos4 = e.clientY;
        // set the element's new position:
        position = (elmnt.offsetTop - pos2)
        if (position < 475) {
            position = 475
        }
        if (position > 821) {
            position = 821
        }
        // if (position > 750) {
        //     postion = 821
        // } else if (position < 630) {
        //     position = 475
        // }else {
        //     position= 690
        // }
        elmnt.style.top = position + "px";
    }

    function closeDragElement() {
        // position = (elmnt.offsetTop - pos2)
        // if (position > 750) {
        //     position = 821
        // } else if (position < 630) {
        //     position = 475
        // } else {
        //     position = 690
        // }
        // elmnt.style.top = position + "px";
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}