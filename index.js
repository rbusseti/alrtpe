var items = [];
var weapons = [];
var outfits = [];
var usables = [];
var eventsFlag = [];

var health = 100;
var motivation = 0;
var alcohol = 0;

var events = {
	"nom_de_levent" : {
		"text" : [
			"Un paragraphe de texte", 
			"un autre paragraphe"
		],
		"actions" : [
			"nom d'un bouton dans actions.JSON",
			"nom d'un autre bouton dans actions.JSON"
		]
	},

	"test_event_1" : {
		"text" : [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id diam sed nisi condimentum maximus viverra eget massa. Nullam sit amet nulla nec urna vehicula blandit. Nullam elementum mi felis, ac lobortis sapien aliquet vitae. In ac sem id tortor auctor sagittis. Donec ornare tincidunt nisl, nec egestas mauris venenatis nec. ",
			 "Mauris vitae commodo arcu. Aenean ipsum sem, sodales id velit ac, fringilla lobortis magna. Proin non tellus ante. Nunc eget libero sit amet libero sollicitudin tempus. Vestibulum et erat a purus posuere porttitor ac eu nisi. Vivamus vehicula porta tincidunt. Phasellus commodo, nibh sed accumsan vulputate, dui metus aliquam arcu, ut porttitor dui dolor eu mauris. Nullam nec metus quis nunc ullamcorper fermentum. Nullam sapien urna, interdum id malesuada vitae, malesuada nec nunc. Nam sem dui, venenatis ut ante non, pellentesque cursus augue."
		],
		"actions" : [
			"test_action_1",
			"test_action_2",
			"test_action_3"
		]
	},

	"test_event_2" : {
		"text" : [
			"Un paragraphe de texte", 
			"un autre paragraphe"
		],
		"actions" : [
			"test_action_4",
			"test_action_5"
		]
	}
};

var actions = {
	"test_action_1" : {
		"text" : "premier test d'action",
		"conditions" : null,
		"effect" : {
			"chHealth" : 0,
			"chMotivation" : 0,
			"chAlcohol" : 20,
		}
	},
	"test_action_2" : {
		"text" : "deuxieme test d'action",
		"conditions" : {
			"health" : {
				"min" : 0,
				"max" : 40
			}
		}
	},
	"test_action_3" : {
		"text" : "troisieme test d'action",
		"conditions" : {
			"health" : {
				"min" : 0,
				"max" : 100
			}
		},
		"effect" : {
			"chHealth" : 0,
			"chMotivation" : 0,
			"chAlcohol" : -20,
		}
	}
};

function checkValue(min, max, value) {
	if (value >= min && value <= max)
		return(true);
	else
		return(false);
}

function checkConditions(cond) {
	if (cond === null) {
		return (true);
	}

	if (cond.health && !checkValue(cond.health.min, cond.health.max, health))
		return (false);
	if (cond.alcohol && !checkValue(cond.alcohol.min, cond.alcohol.max, alcohol))
		return (false);
	if (cond.motivation && !checkValue(cond.motivation.min, cond.motivation.max, motivation))
		return (false);

	if (cond.item && jQuery.inArray(cond.item, items) === -1)
		return (false);
	if (cond.event && jQuery.inArray(cond.event, eventsFlag) === -1)
		return (false);

	return (true);
}

function displayStory(eventName) {
	var text = events[eventName].text;
	var story = "";

	for (var i = 0; i < text.length; i++) {
		story += "<p>" + text[i] + "</p>";
	}

	$("#story-panel").html(story);
}

function displayActions(eventName) {
	var actionsNames = events[eventName].actions;
	var buttons = '<div class="btn-group-vertical">';
	var conditions = null;

	for (var i = 0; i < actionsNames.length; i++) {
		var conditions = actions[actionsNames[i]].conditions;
		if (checkConditions(conditions) === true) {
			buttons += '<button type="button" class="btn btn-primary action-btn" id="' + actionsNames[i] + '">' + actions[actionsNames[i]].text + "</button>";
		}
	}

	buttons += "</div>"
	$("#action-panel").html(buttons);
}

function changeHealth(mHealth) {
	health += mHealth;

	if (health < 0)
		health = 0;
	if (health > 100)
		health = 100;

	$("#health-bar").width(health + '%');
}

function changeAlcohol(mAlcohol) {
	alcohol += mAlcohol;

	if (alcohol < 0)
		alcohol = 0;
	if (alcohol > 100)
		alcohol = 100;

	$("#alcohol-bar").width(alcohol + '%');
}

function changeMotivation(mMotivation) {
	motivation += mMotivation;

	if (motivation < 0)
		motivation = 0;
	if (motivation > 100)
		motivation = 100;

	$("#motivation-bar").width(motivation + '%');	
}

function changeItem(mItem) {
	if (mItem.add)
	{
		for (var i = 0; i >= mItem.add.length; i++) {
			items.push(mItem.add[i]);
		}
	}
	if (mItem.remove)
	{
		for (var i = 0; i >= mItem.remove.length; i++) {
			items.splice(items.find(mItem.remove[i]), 1);
		}
	}
}

function changeEventFlag(mEventFlag) {
	if (mEventFlag.add)
	{
		for (var i = 0; i >= mEventFlag.add.length; i++) {
			eventsFlag.push(mEventFlag.add[i]);
		}
	}
	if (mEventFlag.remove)
	{
		for (var i = 0; i >= mEventFlag.remove.length; i++) {
			eventsFlag.splice(eventsFlag.find(mEventFlag.remove[i]), 1);
		}
	}
}

function execAction(actionName) {
	var action = actions[actionName].effect;
	
	if (action.chHealth)
		changeHealth(action.chHealth)
	if (action.chAlcohol)
		changeAlcohol(action.chAlcohol)
	if (action.chMotivation)
		changeMotivation(action.chMotivation)

	if (action.item)
		changeItem();
	if (action.eventFlag)
		changeEventFlag();

	//changeEvent(action.newEvent);
}

function initGame() {
	displayStory("test_event_1");
	displayActions("test_event_1");

	$("#health-bar").width(health + '%');
	$("#alcohol-bar").width(alcohol + '%');
	$("#motivation-bar").width(motivation + '%');
}

$(document).ready(function() {
	initGame();

	$(".action-btn").click(function() {
		console.log($(this).attr('id'));
		execAction($(this).attr('id'));
	});
});
