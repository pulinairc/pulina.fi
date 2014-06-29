function startAjaxTwo() {
    var xmlHttpObjTwo;
    if (window.XMLHttpRequest)
    xmlHttpObjTwo = new XMLHttpRequest();
    else {
        try { xmlHttpObjTwo = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {
            try { xmlHttpObjTwo = new ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e) { xmlHttpObjTwo = false; }
        }
    }
    return xmlHttpObjTwo;
}

function runPHPScriptTwo() {
        gateway = startAjaxTwo();
    if (!gateway)
    return;
    else {
        gateway.open('GET', 'http://pulina.info/wp-content/themes/pulina/scroller.php', true);
        gateway.onreadystatechange = function() { processResponse(1); }
        gateway.send(null);
    }

}

function processResponse() {
        if (gateway.readyState == 4 && gateway.status == 200) {
		document.getElementById('lastlog').innerHTML = gateway.responseText;
        }
}

var myIntTwo = setInterval(runPHPScriptTwo, 1500);
