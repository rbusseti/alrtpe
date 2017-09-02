var items = [];
var weapons = [];
var outfits = [];
var usables = [];
var eventsFlag = [];
var previousEvent = "";

var health = 100;
var motivation = 0;
var alcohol = 0;

var events = {
	
	"" : {
		"text" : [
			"", 
		],
		"actions" : [
			{
				"name" : "",
				"text" : "",
			},
			
		]
	},

/**
*** +DREAM
**/

	"dream_start" : {
		"text" : [
			"La porte du donjon se referme derrière toi et tu te retrouves dans l'obscurité",
		],
		"actions" : [
			{
				"name" : "dream_torch",
				"text" : "Allumer une torche",
			},
			{
				"name" : "dream_dark",
				"text" : "Explorer dans le noir",
			},
		]
	},

	"dream_split" : {
		"text" : [
			"A la lumière de ta torche tu découvre une pièce circulaire aux murs de pierre taillée.",
			"Trois couloirs partent de cette pièce.",
		],
		"actions" : [
			{
				"name" : "dream_left",
				"text" : "Prendre le couloir de gauche",
			},
			{
				"name" : "dream_right",
				"text" : "Prendre le couloir de droite",
			},
			{
				"name" : "dream_middle",
				"text" : "Prendre le couloir du milieu",
			},
		]
	},

	"dream_fall" : {
		"text" : [
			"Tu t'avances à tatons dans l'obscurité, essayant de t'orienter. Alors que tu te déplace précautioneusement ton pied heurte une irrégularité et tu t'étales de tout ton long. Endoloris, tu décide d'arreter de te comporter comme un imbécile et allume une torche.", 
		],
		"actions" : [
			{
				"name" : "dream_torch",
				"text" : "Continuer",
			},
			
		]
	},

	"dream_blocked" : {
		"text" : [
			"Après quelques mètres le tunnel se termine par un cul de sac.",
		],
		"actions" : [
			{
				"name" : "return_start",
				"text" : "Retourner à l'entrée.",
			},
		]
	},

	"dream_fight_dragon" : {
		"text" : [
			"Le couloir continue pendant une vingtaine de pas puis débouche sur une vaste caverne.",
			"Un dragon est couché au centre de la caverne. Quand il t'aperçois il se redresse un rugit furieusement, en projetant des flammes sur le plafond de la caverne. Il avance vers toi.",
		],
		"actions" : [
			{
				"name" : "fight_dragon",
				"text" : "Sortir son épée et se battre",
			},
			{
				"name" : "flee_dragon",
				"text" : "Prendre la fuite",
			},
			
		]
	},

	"killed_by_dragon" : {
		"text" : [
			"Térrorisé, tu te retournes et commence à courir en direction de l'entrée. Des grondements retentissent dans ton dos. Alors que tu es presque hors de portée de la bête quelque chose te heurte le dos, te coupant la respiration et tu t'écroules sur par terre.",
			"Tu sens une énormes pattes te maintenir au sol, des griffes comme des sabres s'enfoncent dans ta chair. Malgré la douleur tu parviens à tourner la tête, juste à temps pour apercevoir la gueule du dragon grande ouverte, prête à t'engloutir. La douleur et la peur ont raison de toi, alors que tu perds connaisance, commence à retentir une étrange incantation... non! plutôt une chanson: \"Là-bas, au Connemara!!!!\". Mais qu'est ce que c'est que cette merde?",
		],
		"actions" : [
			{
				"name" : "finish_dream",
				"text" : "Continuer",
			},
			
		]
	},

	"kill_the_dragon" : {
		"text" : [
			"Le dragon ouvre grand la gueule et déverse un flot de flammes dans ta direction. Rapide comme l'éclair tu te jette sur le coté et dégaine ton épée. Le jet brûlant te manque de peu, ce qui semble énervé encore plus la créature. Sa patte avant gauche se lève et s'abat dans ta direction. Tu fonces vers elle, roule entre ses pattes arrières et assène un violent coup de taille à chacune d'entre elles. Avec un hurlement de douleur la créature s'effondre, exposant sa tête. Tu saisit ton épée de tes deux mains et l'abat sur un des yeux de la créature. La lame y pénètre sans rencontrer de résistance et un flot de sang te coule sur les jambes. Après quelque soubressauts le dragon cesse de bouger, victoire!",
			"Tu reprends ton souffle quelques instants et scrute le fond de la caverne. Tu y aperçois enfin la raison de ta venue ici. Enchainée contre un mur se trouve une femme, entièrement nue. Alors que tu t'approches elle s'adresse à toi:",
			"\"Merci noble héros de m'avoir délivrée de cette vile créature, détache moi et je t'appartiendrais corps et âme, tu pourras user de ma personne quand tu veux et de la manière dont tu le désires.\"",
			"Le souffle court tu te prépare à la détacher quand au loin commence à retentir une étrange incantation... non! plutôt une chanson: \"Là-bas, au Connemara!!!!\". Mais qu'est ce que c'est que cette merde?"
		],
		"actions" : [
			{
				"name" : "finish_dream",
				"text" : "Continuer",
			},
			
		]
	},

/**
*** +FLAT
**/

	'start_flat' : {
		'text' : [
			"Cette merde comme tu dis c'est les Lacs du Connemara, ta sonnerie de réveil. Tu n'es pas un preux chevalier tueur de dragons et amateur de jeunes vierges en détresses (encore que sur ce dernier point le doute est permis). Non, tu est juste un glandeur notoire aux goûts musicaux très douteux et vivant actuellement des allocations chômage.",
			"D'ailleurs en parlant d'allocs aujourd'hui tu a rendez vous avec ta conseillère pôle-emploi, c'est à ça que tu dois le fait d'avoir été tiré de ton rêve, tu ferais mieux de te bouger le cul."
		],
		"actions" : [
			{
				"name" : "start_sleep",
				"text" : "Se rendormir quelques minutes",
			},
			{
				"name" : "start_wakeup",
				"text" : "Sortir de ton lit",
			},
		]
	},

	'visit_flat' : {
		'text' : [
			'Tu sors de ton lit et ouvre des volets, ce qui te permet de comtempler ton appartement, des cadavres de bieres gisent un peu partout dans la pièce, sur la table ton ordinateur et tes factures cohabitent avec des cendriers remplis de mégots.',
			'Tu t\'habilles et avales un petit déjeuner en vitesse, ce qui te permet de constater qu\'il te reste quelques bières au frigo. Ton rendez-vous est dans deux heures, à l\'autre bout de la ville, malheuresement tu ne te sens pas du tout motivé, il va falloir trouver une solution.',
		],
		'actions' : [
			{
				"name" : "computer_on",
				"text" : "Allumer ton ordinateur",
			},
			{
				"name" : "flat_take_beers",
				"text" : "Prendre les bières se trouvant dans le frigo",
			},
			{
				"name" : "prepare_leave_flat",
				"text" : "Sortir de ton appartement",	
			},
			{
				"name" : "can_not_leave_flat",
				"text" : "Sortir de ton appartement",	
			},
			{
				"name" : "drink_beer",
				"text" : "Boire une bière",	
			},
		]
	},

	"visit_flat_again" : {
		"text" : [
			"Que vas tu faire?",
		],
		"actions" : [
			{
				"name" : "computer_on",
				"text" : "Allumer ton ordinateur",
			},
			{
				"name" : "flat_take_beers",
				"text" : "Prendre les bières se trouvant dans le frigo",
			},
			{
				"name" : "prepare_leave_flat",
				"text" : "Sortir de ton appartement",	
			},
			{
				"name" : "can_not_leave_flat",
				"text" : "Sortir de ton appartement",	
			},
			{
				"name" : "drink_beer",
				"text" : "Boire une bière",	
			},
		]
	},

	"take_stuff_and_go" : {
		"text" : [
			"Désormais assez motivé pour te bouger le cul tu emportes ta carte de transport et un billet de 10 euros, ouvre ta porte et sors de chez toi.", 
		],
		"actions" : [
			{
				"name" : "leave_flat_with_stuff",
				"text" : "Continuer",
			},
			
		]
	},	

	"stay_in_flat" : {
		"text" : [
			"Tu t'avances vers ta porte d'entrée mais rien à faire, le monde extérieur te semble extrêmement hostile et tu ne peux te résoudre à l'affronter. Qui sait ce qui t'attends dehors? Des macronistes sous xanax? Des djiadistes sous captagon?", 
			"Toutes les allocs du monde n'en vallent pas la peine, tu fais demi tour et revient te caler les fessses dans ton canapé. Advienne que pourra!",
			"En t'asseyant tu trouves un joint à peine entamé dans ton cendrier, tu le fous dans ta poche en te disant qu'il pourra t'être utile plus tard.",
		],
		"actions" : [
			{
				"name" : "leave_flat_aborted",
				"text" : "Continuer",
			},
			
		]
	},	

	"start_computer" : {
		"text" : [
			"Que veux tu faire sur ton ordinateur?",
		],
		"actions" : [
			{
				"name" : "computer_play",
				"text" : "Jouer",
			},
			{
				"name" : "computer_watch_porn",
				"text" : "Mater du porno.",
			},
			{
				"name" : "computer_check_facebook",
				"text" : "Aller sur Facebook",
			},
		]
	},

	"play_computer" : {
		"text" : [
			"Tu lances ton jeu préféré. Un vieux rpg dans un univers médiéval fantastique. Tu chasses quelques monstres, bois des bières à la taverne puis va faire des emplêtes, à la recherche d'une nouvelle arme. Alors que tu hésites entre une épée de givre +2 et une masse d'arme de domination, tu te rends soudain compte que dans le monde réel l'heure tourne et que tu as sans doute mieux à foutre que de taper la discute avec Elraneha, forgeronne demi-elfe, aussi bandante soit elle.",
			"Tu remet tes emplêtes virtuelles à plus tard et décide de sortir."
		],
		"actions" : [
			{
				"name" : "hurry_leave_flat",
				"text" : "Sortir en vitesse",
			},
			
		]
	},

	"masturbate_computer" : {
		"text" : [
			"Cet activité relevant du domaine de l'intime, je t'invite à imaginer ce qu'il te plairas... non non n'insiste pas je ne t'aiderais pas cette fois ci...",
			"Ton affaire accomplie tu te sens plus léger et plus motivé, tu decide d'éteindre ton ordinateur pour aujourd'hui.",
		],
		"actions" : [
			{
				"name" : "masturbation_finish",
				"text" : "Continuer",
			},
			
		]
	},

	"facebook_computer" : {
		"text" : [
			"Bien que tu n'y es jamais rien trouvé quoique ce soit d'intéressant tu parcoures une fois de plus ton fil d'actualité facebook. Sait on jamais, peut être que c'est aujourd'hui que l'utilité de ta présence sur ce site de merde te sauteras aux yeux.",
			"Perdu! Il faudra sûrement attendre la prochaine fois, tu remarques qu'a cause du temps que tu viens de passer sur ce réseau social de l'enfer tu t'es gravement foutu en retard et décide de sortir.",
		],
		"actions" : [
			{
				"name" : "hurry_leave_flat",
				"text" : "Sortir en vitesse",
			},
			
		]
	},

	"flat_beers_takens" : {
		"text" : [
			"Tu te saisis des trois bières trainants dans ton frigo et décide de les emporter avec toi, on sait jamais, ça peut toujours servir.", 
		],
		"actions" : [
			{
				"name" : "beers_takens",
				"text" : "Continuer",
			},
			
		]
	},

	'to_late_to_visit_flat' : {
		'text' : [
			"Tu te réveilles à nouveau pour constater que tu as dormis bien plus que quelques minutes. Tu est maintenant carrément en retard.",
			"Paniqué, tu t'haiblles en vitesse, te saisis d'un sac à dos ainsi que d'un billet de dix euros trainant sur la table et te rues hors de chez toi en espérant avoir encore assez de temps pour arriver à ton rendez vous à l'heure."
		],
		'actions' : [
			{
				"name" : "hurry_to_hallway",
				"text" : "Continuer",
			},
		]
	},

	"hurry_leave_flat" : {
		"text" : [
			"Tu te saisis d'un sac à dos ainsi que d'un billet de dix euros trainant sur la table et te rues hors de chez toi en espérant avoir encore assez de temps pour arriver à ton rendez vous à l'heure.", 
		],
		"actions" : [
			{
				"name" : "hurry_to_hallway",
				"text" : "Continuer",
			},
			
		]
	},

/**
*** +HALLWAY
**/

	"hallway_start" : {
		"text" : [
			"Tu est sur le pas de ta porte, tu vis dans un immeuble résidentiel, au quatrième étage. Un coup d'oeil dans la cage d'escalier t'apprends que Jacqueline, ta voisine du dessous fume une clope sur le pallier. Elle a la quarantaine bien tassée et un sacré surpoids, ce qui d'après les rumeurs n'empêche pas une bonne partie des locataires de lui passer dessus.",
			"A chaque fois que tu la croise elle peut pas s'empêcher de te tenir la grappe pendant des plombes. Aujourd'hui t'es pressé, ça tombe mal. Le plus prudent serait que tu l'évites.", 
		],
		"actions" : [
			{
				"name" : "hallway_take_stairs",
				"text" : "Descendre par les escaliers en espérant qu'elle ne soit pas d'humeur à discuter",
			},
			{
				"name" : "hallway_climb",
				"text" : "Ouvrir une des fenêtre du couloir et tenter de descendre en escaladant la facade",
			},
			{
				"name" : "hallway_climb_fall",
				"text" : "Ouvrir une des fenêtre du couloir et tenter de descendre en escaladant la facade",
			},
		]
	},

	"hallway_meet_jacqui" : {
		"text" : [
			"Tu descends les escaliers en espérant que ta voisine ne prêteras pas attention à toi. Pas de bol, à peine es tu entré dans son champs de vision qu'elle t'abordes et te noit sous un flot de paroles:",
			"\"Salut mon voisin! Comment ça vas? Tu vas pas le croire j'ai encore des problèmes avec les proprios, figure toi que... et en plus ils... tout ça c'est à cause des bougnoules je te le dis... enfin comme je dit toujours le principal c'est d'avoir la santé... et toi comment ça se passe ta recherche d'emploi? Moi c'est la mort, ils ont essayés de...\"",
			"Tu attends que ça passe, en te disant que si tu ne parles pas elle finira par te lâcher la grappe. Elle finit par arrêter son monologue mais interprète mal ton manque de répondant. Pensant que t'es un peu déprimé elle te propose de venir boire un verre chez elle.",
			"Te voilà devant un sacré dilemme, d'un coté t'as des trucs à faire et l'idée de passer une minute de plus à l'écouter déblatérer te donne envie de te tirer une balle, de l'autre tu as pour habitude de ne jamais refuser de boire un coup quand c'est offert.",
		],
		"actions" : [
			{
				"name" : "hallway_decline_fail",
				"text" : "Décliner poliment son invitation et continuer ton périple",
			},
			{
				"name" : "hallway_decline",
				"text" : "Décliner poliment son invitation et continuer ton périple",
			},
			{
				"name" : "hallway_knock_neighboor",
				"text" : "L'assomer avec une bière, ça lui apprendras à te faire chier",
			},
			{
				"name" : "hallway_accept_neighboor",
				"text" : "Accepter l'invitation",
			},
			
		]
	},

	"hallway_climb_fall" : {
		"text" : [
			"Tu ouvres la fenêtre et jette un coup d'oeil en contrebas. Si tu te plantes ça vas être une chute libre de quinze mètres. Tu enjambes le rebords de fenêtre et essaye de trouver une prise pour commencer ta descente.", 
			"Tu te suspends au rebords et commence à descendre. Tu parcours assez facilement les deux premiers mètres, et commence à prendre confiance, un peu trop sans doute. Alors que tu accélère la cadence ta main manque une prise et tu chute.",
			"Alors que le sol se rapproche à grande vitesse tu as le temps de méditer sur les dangers de jouer à Cliffanger quand on est alcoolisé. Tu t'éclates violement sur le pavé et meurt, stupidement. Au moins s'en est finit de ces putains de rendez-vous au pôle emploi.",

		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Game Over comme on dit",
			},
			
		]
	},

	"hallway_climb" : {
		"text" : [
			"Tu ouvres la fenêtre et jette un coup d'oeil en contrebas. Si tu te plantes ça vas être une chute libre de quinze mètres. Tu enjambes le rebords de fenêtre et essaye de trouver une prise pour commencer ta descente.",
			"Tu te suspends au rebords et commence à descendre. Tu descends prudement, en t'assurant avant chaque mouvement d'avoir des prises sûres et en serrant les fesses, térrorisé à l'idée de tomber.",
			"Tu arrives à environ quatres mètres du sol quand tout à coup c'est le drame, ta main dérape, tu lâche prise et chute. Heuresement tu tombes dans la benne à ordure de l'immeuble dont le contenu amorti ta chute. En nageant parmis les détritus pour t'extraire de la benne tu trouve un kébab à peine entamé, c'est fou ce que les gens mettent à la poubelle. Tu l'emporte au cas ou, les temps sont durs c'est pas le moment de faire la fine bouche, et puis le gaspillage t'as toujours énervé.",
		],
		"actions" : [
			{
				"name" : "get_out_bin",
				"text" : "Sortir de la benne à ordure et se mettre en route",
			},
			
		]
	},

	"" : {
		"text" : [
			"", 
		],
		"actions" : [
			{
				"name" : "",
				"text" : "",
			},
			
		]
	},

	"beer_drank" : {
		"text" : [
			"Alors que la bière coule dans ta gorge tu te sens envahi d'énergie, le coeur vaillant et l'esprit affuté.", 
		],
		"actions" : [
			{
				"name" : "get_previous_event",
				"text" : "Continuer",
			},
			
		]
	},
};

var actions = {
/**
*** -DREAM
**/
	"dream_dark" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_fall"
		}
	},
	"dream_torch" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_split"
		}
	},
	"dream_left" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_blocked"
		}
	},
	"dream_right" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_blocked"
		}
	},
	"dream_middle" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_fight_dragon"
		}
	},
	"return_start" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "dream_split"
		}
	},
	"fight_dragon" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "kill_the_dragon"
		}
	},
	"flee_dragon" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "killed_by_dragon"
		}
	},
	"finish_dream" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "start_flat"
		}
	},

/**
*** -FLAT
**/

	'start_sleep' : {
		'conditions' : null,
		'effect' : {
			'newEvent' : 'to_late_to_visit_flat'
		}
	},
	'start_wakeup' : {
		'conditions' : null,
		'effect' : {
			'newEvent' : 'visit_flat'
		}
	},
	"computer_on" : {
		"conditions" : {
			"event" : "computer_off",
		},
		"effect" : {
			"newEvent" : "start_computer"
		}
	},
	"computer_play" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "play_computer"
		}
	},
	"computer_watch_porn" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "masturbate_computer"
		}
	},
	"computer_check_facebook" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "facebook_computer"
		}
	},
	"masturbation_finish" : {
		"conditions" : null,
		"effect" : {
			"chMotivation" : 20,
			"eventFlag" : {
				"add" : "computer_off",
			},
			"newEvent" : "visit_flat_again"
		}
	},
	"flat_take_beers" : {
		"conditions" : {
			"event" : "beers_takens",
		},
		"effect" : {
			"eventFlag" : {
				"add" : "beers_takens",
			},
			"item" : {
				"add" : [
					"Bière",
					"Bière",
					"Bière",
				],
			},
			"newEvent" : "flat_beers_takens"
		}
	},
	"beers_takens" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "visit_flat_again",
		}
	},
	"prepare_leave_flat" : {
		"conditions" : {
			"motivation" : {
				"min" : 20,
				"max" : 101
			}
		},
		"effect" : {
			"newEvent" : "take_stuff_and_go"
		},
	},
	"can_not_leave_flat" : {
		"conditions" : {
			"motivation" : {
				"min" : 0,
				"max" : 20
			}
		},
		"effect" : {
			"newEvent" : "stay_in_flat"
		},
	},
	"leave_flat_aborted" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Un joint",
				],
			},
			"newEvent" : "visit_flat_again"
		},
	},
	"leave_flat_with_stuff" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"un billet de 10 euros",
					"Une carte de transport"
				],
			},
			"newEvent" : "hallway_start"
		},
	},
	"hurry_leave_flat" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "hurry_leave_flat"
		},
	},
	"hurry_to_hallway" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"un billet de 10 euros"
				],
			},
			"newEvent" : "hallway_start"
		},
	},

/**
*** -HALLWAY
**/

	"hallway_take_stairs" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "hallway_meet_jacqui"
		}
	},

	"hallway_climb" : {
		"conditions" : {
			"alcohol" : {
				"min" : 0,
				"max" : 40,
			},
		},
		"effect" : {
			"newEvent" : "halllway_climb"
		}
	},

	"hallway_climb_fall" : {
		"conditions" : {
			"alcohol" : {
				"min" : 40,
				"max" : 101,
			},
		},
		"effect" : {
			"newEvent" : "hallway_climb_fall"
		}
	},

	"drink_beer" : {
		"conditions" : {
			"item" : "Bière",
		},
		"effect" : {
			"item" : {
				"remove" : [
					"Bière",
				],
			},
			"chMotivation" : 10,
			"chAlcohol" : 20,
			"newEvent" : "beer_drank"
		}
	},
	"get_previous_event" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "previousEvent",
		}
	},
};

function checkValue(min, max, value) {
	if (value >= min && value < max)
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
	if (cond.event && jQuery.inArray(cond.event, eventsFlag) !== -1)
		return (false);

	console.log(eventsFlag);

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
	var event = events[eventName];
	var buttons = '<div class="btn-group-vertical">';
	var conditions = null;
	
	for (var i = 0; i < event.actions.length; i++) {
		var conditions = actions[event.actions[i].name].conditions;
		if (checkConditions(conditions) === true) {
			buttons += '<button type="button" class="btn btn-primary action-btn" id="' + event.actions[i].name + '">' + event.actions[i].text + "</button>";
//			buttons += '<div class="action-btn" id="' + event.actions[i].name + '">' + event.actions[i].text + "</div>";
		}
	}

	buttons += "</div>"
	$("#action-panel").html(buttons);
}

function displayItems() {
	var inventory = "";

	for (var i = 0; i < items.length; i++) {
		inventory += "<p>" + items[i] + "</p>";
	}
	$("#inventory-content").html(inventory);	
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
		console.log("objets ajoutes");
		console.log(mItem);
		console.log(items);
		for (var i = 0; i < mItem.add.length; i++) {
			console.log("boucle ajout items");
			items.push(mItem.add[i]);
		}
	}
	if (mItem.remove)
		items.splice(items.indexOf(mItem.remove), 1);
	displayItems();
}

function changeEventFlag(mEventFlag) {
	console.log("changeEventFlag ");
	console.log(mEventFlag);
	if (mEventFlag.add)
		eventsFlag.push(mEventFlag.add);
	if (mEventFlag.remove)
		eventsFlag.splice(eventsFlag.indexOf(mEventFlag.remove), 1);
}

function changeEvent(newEvent) {
	console.log(newEvent);
	console.log(previousEvent);
	if (newEvent == "previousEvent")
		newEvent = previousEvent;
	if (newEvent != "beer_drank")
		previousEvent = newEvent;
	displayStory(newEvent);
	displayActions(newEvent);
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
		changeItem(action.item);
	if (action.eventFlag)
		changeEventFlag(action.eventFlag);

	changeEvent(action.newEvent);
}

function initGame() {
	//displayStory("dream_fight_dragon");
	//displayActions("dream_fight_dragon");
	displayStory("dream_start");
	displayActions("dream_start");
	displayItems();

	$("#health-bar").width(health + '%');
	$("#alcohol-bar").width(alcohol + '%');
	$("#motivation-bar").width(motivation + '%');
}

$(document).ready(function() {
	initGame();

	$(document).on('click', '.action-btn', function(){
		console.log($(this).attr('id'));
		execAction($(this).attr('id'));
	});
});
