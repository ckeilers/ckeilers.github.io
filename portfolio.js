/* Portfolio article display
 * Author: Chloe Keilers */

'use strict';

function openArticle(name) {
	document.getElementById(name).style.display = "flex";
	document.getElementById("home").style.display = "none";
}

function closeArticle(name) {
	document.getElementById("home").style.display = "inline";
	document.getElementById(name).style.display = "none";
}
