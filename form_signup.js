console.log("connexion réussie à form_signup.js");

//------------------------------------//
// Section Formulaire : vérification de conformité pour le mot de passe et le pseudo, comparaison des deux mots de passe saisis, vérification de l'acceptation des termes

// Déclaration des regex pour le pseudo et pour le mot de passe
var regexPseudo =/(?=.*[a-z])(?=.*[A-Z])^\S[a-zA-Z\d-_.]{3,15}/;

var regexMDP = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])^\S[a-zA-Z\d@$!%*#?&]{6,20}/;



// fonction regexValidate qui vérifie la conformité de la saisie et affiche un message de confirmation ou d'invalidation en conséquence
function regexValidate(pseudoValue, mdpValue) {
	var textValidPseudo = document.getElementById("pseudoValid");

	var textValidMDP = document.getElementById("mdpValid");

	if (regexPseudo.test(pseudoValue)) {
	 	textValidPseudo.textContent ="Pseudo validé";
		textValidPseudo.className ="alert-success valid-text";
	}
	else {
		
		textValidPseudo.textContent ="Pseudo invalide";
		textValidPseudo.className ="alert-danger valid-text";
	}

	if (regexMDP.test(mdpValue)) {
		textValidMDP.textContent ="Mot de passe validé";
		textValidMDP.className ="alert-success valid-text";
	}
	else {
		textValidMDP.textContent ="Mot de passe invalide";
		textValidMDP.className ="alert-danger valid-text";
	}

	console.log("test pseudo "+regexPseudo.test(pseudoValue));
	console.log("test mdp "+regexMDP.test(mdpValue));
	console.log("test des 2 valeurs "+regexPseudo.test(pseudoValue) && regexMDP.test(mdpValue));

	return (regexPseudo.test(pseudoValue) && regexMDP.test(mdpValue));
}


// fonction mdpConfirm qui compare les saisies Mot de passe / Confirmation du mot de passe et affiche un message de confirmation ou d'invalidation en conséquence
function mdpConfirm(mdpValue, confirm_mdpValue){
	var textValidConfirmMDP= document.getElementById("mdpConfirmValid");
	if (mdpValue === confirm_mdpValue) {
		textValidConfirmMDP.textContent ="Les mots de passe correspondent";
		textValidConfirmMDP.className ="alert-success valid-text";
	}
	else {
		textValidConfirmMDP.textContent ="Les mots de passe ne correspondent pas";
		textValidConfirmMDP.className ="alert-danger valid-text";
	}

	console.log(mdpValue === confirm_mdpValue);

	return (mdpValue === confirm_mdpValue);
}

function consentCheck(consentElement) {
	var textValidConsent= document.getElementById("consentValid");
	if (!consentElement.checked){
		textValidConsent.textContent ="Merci d'accepter les termes";
		textValidConsent.className ="alert-danger valid-text";
	} else {
		textValidConsent.style.display = "none";
	}

	console.log(consentElement.checked)
	return consentElement.checked;
}

function formValidate(){
	var pseudoValue = document.getElementById("pseudo").value;
	var mdpValue = document.getElementById("mdp").value;
	var confirm_mdpValue = document.getElementById("confirm_mdp").value;
	var consentElement = document.getElementById("consent");

	//console.log(pseudoValue+" "+mdpValue+" "+confirm_mdpValue);

	var regexV = regexValidate(pseudoValue,mdpValue);
	var mdpC = mdpConfirm(mdpValue,confirm_mdpValue);
	var consentV = consentCheck(consentElement);

	//console.log(regexV && mdpC && consentV);
	if (regexV && mdpC && consentV) {alert("Demande d'inscription enregistrée");}
	
	return (regexV && mdpC && consentV);

}

