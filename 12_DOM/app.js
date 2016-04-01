/*var mainNavItems = ["Home","About","Works","Contact"];
var secondNavItems = ["Twitter","Facebook","LinkedIn"];

var newElement = function(tag, innerHtml) {
	var innerHtml = innerHtml || "";
	var element = document.createElement(tag);
		element.innerHTML = innerHtml;
	return element;
}

var newListElement = function(elements, classe) {
	var classe = classe || "";
	var ulElement = newElement("ul");
	for (var i = 0; i < elements.length; i++) {
		ulElement.appendChild(newComplexElement({
			tag : "li",
			text : elements[i],
			class : classe
		}));
	}
	return ulElement;
}

var newComplexElement = function(object) {
	var classe = object.class || "";
	var id = object.id || "";
	var innerHtml = object.text || "";
	var element = document.createElement(object.tag);
		element.innerHTML = innerHtml;
		element.className = classe;
		element.id = id;
	return element;
}

var title = newElement("h1","Title");

var mainNav = newComplexElement({
	tag : "nav",
	class : "main-nav" 
});

var secondNav = newComplexElement({
	tag : "nav",
	class : "second-nav"
});

mainNav.appendChild(newListElement(mainNavItems, "item"));
secondNav.appendChild(newListElement(secondNavItems));

var body = document.body;
body.appendChild(title);
body.appendChild(mainNav);
body.appendChild(secondNav);*/

/* 2e version */
var mainNavItems = [ 	{tag : "li", innerHTML : "Home", arguments : [{ name : "class" , value : "item"}]},
						{tag : "li", innerHTML : "About", arguments : [{ name : "class" , value : "item"}]},
						{tag : "li", innerHTML : "Works", arguments : [{ name : "class" , value : "item"}]},
						{tag : "li", innerHTML : "Contact", arguments : [{ name : "class" , value : "item"}]}];

var secondNavItems = [	{tag : "li", innerHTML : "Twitter"},
						{tag : "li", innerHTML : "Facebook"},
						{tag : "li", innerHTML : "LinkedIn"}];

var createElement = function(object) {
	var element = document.createElement(object.tag);
	if (object.innerHTML != undefined) {
		element.innerHTML = object.innerHTML;
	}
	if (object.arguments != undefined) {
		console.log("Arguments : " + object.tag);
		console.dir(object.arguments.length);
		var arguments = object.arguments;
		for (var i = 0; i < arguments.length; i++) {
			console.log("argument : " + arguments[i].name);
			element.setAttribute(arguments[i].name, arguments[i].value);
		}
	}
	if (object.items != undefined) {
		var items = object.items;
		for (var i = 0; i < items.length; i++) {
			element.appendChild(createElement(items[i]));
		}
	}
	return element;
}

var body = document.body;
var objectH1 = {
	tag :"h1",
	innerHTML : "Title"
};
var h1 = createElement(objectH1);

var objectUl = {
		tag : "ul",
		items : mainNavItems
	}
var objectMainNav = {
	tag :"nav",
	arguments : [{ name : "id", value : "main-nav"}],
	items : [objectUl]
};
var mainNav = createElement(objectMainNav);

var objectUl1 = {
		tag : "ul",
		items : secondNavItems
	}
var objectSecondNav = {
	tag : "nav",
	arguments : [{ name : "id", value : "second-nav"}],
	items : [objectUl1]
}
var secondNav = createElement(objectSecondNav);

body.appendChild(h1);
body.appendChild(mainNav);
body.appendChild(secondNav);