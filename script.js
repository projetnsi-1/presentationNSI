function cacher(){
	document.getElementById("repl").innerHTML = ""
	document.getElementById("cacher").innerHTML = ""
	document.getElementById("afficher").innerHTML = "Afficher Le Repl"
}
function afficher(){
	document.getElementById("repl").innerHTML = '<iframe height="400px" width="100%" src="https://replit.com/@ELHadj2nde04/HORLOGE?lite=true" ></iframe>'
	document.getElementById("cacher").innerHTML = "Cacher Le Repl"
	document.getElementById("afficher").innerHTML = ""
}