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
				"name" : "can_not_leave_flat_nojoint",
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
				"name" : "can_not_leave_flat_nojoint",
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

	"stay_in_flat_nojoint" : {
		"text" : [
			"Tu t'avances vers ta porte d'entrée mais rien à faire, le monde extérieur te semble extrêmement hostile et tu ne peux te résoudre à l'affronter. Qui sait ce qui t'attends dehors? Des macronistes sous xanax? Des djiadistes sous captagon?", 
			"Toutes les allocs du monde n'en vallent pas la peine, tu fais demi tour et revient te caler les fessses dans ton canapé. Advienne que pourra!",
		],
		"actions" : [
			{
				"name" : "leave_flat_aborted_nojoint",
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
			"Tu descends les escaliers en espérant que ta voisine ne prêteras pas attention à toi. Pas de bol, à peine es tu entré dans son champs de vision qu'elle t'aborde et te noie sous un flot de paroles:",
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

	"hallway_decline_fail" : {
		"text" : [
			"Tu essaie de lui expliquer timidement que tu as un rendez vous important et que tu ne peux pas t'attarder ici mais devant ton manque de conviction elle insiste, te prends par le bras et te fait passer le pas de sa porte. Tu ne résiste pas et te voilà maintenant chez elle.", 
		],
		"actions" : [
			{
				"name" : "hallway_take_drink",
				"text" : "Continuer",
			},
			
		]
	},

	"hallway_decline" : {
		"text" : [
			"Tu déclines poliment mais fermement son invitation. Elle essaie bien d'insister pour te faire rester mais voyant que tu ne cèdes pas elle finit par te lâcher la grappe.", 
			"Tu finis de descendre les escaliers sans être importuné par d'autres géneurs, sors de ton immeuble et te mets en route vers la station de métro.",
		],
		"actions" : [
			{
				"name" : "hallway_out",
				"text" : "Continuer",
			},
			
		]
	},

	"hallway_knock_neighboor" : {
		"text" : [
			"Tu fait mine d'accepter son invitation et alors qu'elle se retourne pour ouvrir sa porte tu te saisis d'une des bière se trouvant dans ton sac. Avant qu'elle est le temps de se retourner pour t'inviter à entrer tu lui en assènes un violent coup sur l'arrière du crâne.", 
			"La bouteille de bière vole en éclat et elle s'effondre, assomée. Tu vérifie que personne d'autre ne se trouve dans le couloir et la traine dans son appartement. Tu la maudits de t'avoir forcé à gaspiller une de tes précieuses binouzes et décides en réparation de lui faire les poches. Tu y trouve un paquet de clopes que tu décides de garder.",
			"Tu sors de chez elle et descends les escaliers sans être importunés par d'autres géneurs. Tu te mets en route en direction de la station de métro tout en te demandant ce que tu va pouvoir inventer pour justifier le \"malaise\" de ta voisine.",
		],
		"actions" : [
			{
				"name" : "hallway_neighboor_knocked",
				"text" : "Continuer",
			},
			
		]
	},

	"hallway_accept_neighboor" : {
		"text" : [
			"Tu acceptes son invitation, certes ça seule présence suffit à te donner des envies de meurtre mais il y a de l'alcool à la clé. Tu te concentre sur cette unique pensée et la suis alors qu'elle pousse la porte de son appartement.", 
		],
		"actions" : [
			{
				"name" : "hallway_take_drink",
				"text" : "Continuer",
			},
			
		]
	},

	"hallway_take_drink" : {
		"text" : [
			"Tu entres dans un appartement surchargé de décorations de mauvais goût: des étagères remplies d'animaux en porcelaine, des tableaux ikéas, des fauteuils refcouverts de tissus aux couleurs criardes.",
			"Elle t'invites à t'assoir dans son canapé devant une table basse sur laquelle est posée une bouteille de rosée. Elle va chercher deux verres dans un placard et les remplis puis te tends le tien en te lançant une oeillade aussi coquine que le permet son faciès disgracieux.",
			"Pendant que tu bois ton verre elle sirote le sien en te fixant sans rien dire, le sourir aux lèvres. Ta boisson terminée elle arrête enfin de te fixer et s'adresses à toi:",
			"\"On dirait que ça va déjà mieux! Tu m'inquiétais t'avais pas l'air dans ton assiette. Heuresement pour toi j'ai autre chose qui devrait te remonter le moral.\"",
			"Sur ces mots elle se lève et commence à se déssaper. Tu reste dans son canapé à la ragarder bêtement mi horrifié, mi excité (Excité? Mais ça fait combien de temps que t'as pas baisé pour que cette meuf t'excites?). Tu hésites à t'enfuir puis te ravise, depuis le temps que t'as pas tiré ta crampe ça serait dommage de laisser passer une occase.",
		],
		"actions" : [
			{
				"name" : "hallway_fuck",
				"text" : "Au charbon!",
			},
			{
				"name" : "hallway_cant_fuck",
				"text" : "Au charbon!",
			},
			
		]
	},

	"hallway_fuck" : {
		"text" : [
			"Tu te fouts à poil également et la baise à même le sol, sans capote. Elle à l'odeur d'un mélange de sueur, de cendrier et de pinard bon marché en plus de grogner pendant que tu la pilonnes. Mais vu l'état de misère sexuelle dans lequel tu te trouves tu vois aucune raison de ne pas la limer... plusieurs fois vue qu'elle en redemande. Après la troisième, elle s'endors par terre et tu comprends que c'est le moment de mettre les voiles.",
			"Tu te rhabilles, sors de chez elle puis de l'immeuble et te diriges vers le métro. Tout cet exercice t'as un peu déssaoulé. T'as les couilles vides mais tu te sens un peu honteux, en plus d'être maintenant sûr de ne pas arriver à l'heure à pôle-emploi. Et ton intuition te dit que t'as sûrement choppé une mst avec ces conneries. Jackpot donc.",
		],
		"actions" : [
			{
				"name" : "hallway_neighboor_fucked",
				"text" : "Continuer",
			},
			
		]
	},

	"hallway_cant_fuck" : {
		"text" : [
			"Tu te fouts à poil également mais alors que tu t'apprête à la baiser tu te rends compte d'un léger problème. Sûrement à cause de tout l'alcool que tu t'es ingurgité depuis ce matin tu es totalement incapable de bander. Après quelques essais de la truie pour essayer de remédier à ça tu finit par jeter l'éponge.",
			"Tu t'excuses, te rhabilles et sors de la piaule sous les encouragements de la maîtresse des lieux:",
			"\"Qu'est ce qu'il y a je te plais pas? Dégage de chez moi! Puceau! Mou de la bite! Va te faire foutre!\"",
			"Tu descends les escaliers, sors de ton immeuble et te diriges vers le métro, complètement démoralisé par ce qu'il vient de se produire.",
		],
		"actions" : [
			{
				"name" : "hallway_dick_problem",
				"text" : "Continuer",
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
			"Tu arrives à environ quatres mètres du sol quand tout à coup c'est le drame, ta main dérape, tu lâche prise et chute. Heuresement tu tombes dans la benne à ordure de l'immeuble dont le contenu amorti ta chute. En nageant parmis les détritus pour t'extraire de la benne tu trouve un kébab à peine entamé, c'est fou ce que les gens mettent à la poubelle. Tu l'emporte au cas ou, les temps sont durs c'est pas le moment de faire la fine bouche, et puis le gaspillage t'as toujours énervé. Tu te diriges ensuite en direction de la station de métro.",
		],
		"actions" : [
			{
				"name" : "get_out_bin",
				"text" : "Sortir de la benne à ordure et se mettre en route",
			},
			
		]
	},

/**
*** +TOWARD TRANSPORT
**/

	"walk_toward_transport" : {
		"text" : [
			"Tu as un bon quart d'heure de marche jusqu'à la station de métro. En chemin tu croise plusieurs magasins, Si tu as de l'argent tu vas pouvoir en profiter pour faire quelques emplètes.",
		],
		"actions" : [
			{
				"name" : "go_to_transport",
				"text" : "Aller directement au métro",
			},
			{
				"name" : "buy_cigarets",
				"text" : "Acheter des cigarettes",
			},
			{
				"name" : "buy_food",
				"text" : "Acheter à manger",
			},
			{
				"name" : "buy_beers",
				"text" : "Prendre une bière au bar",
			},
		]
	},

	"cigarets_boughts" : {
		"text" : [
			"Tu t'arrêtes à un tabac et achète un paquet de clope et un briquet, que tu fouts tous les deux dans ta poche avant de reprendre ton chemin.", 
		],
		"actions" : [
			{
				"name" : "buy__cigarets_done",
				"text" : "Aller au métro",
			},
			
		]
	},

	"food_boughts" : {
		"text" : [
			"Tu t'arrètes dans un snack, commande un kébab et une bière pour le faire passer. Ta commande récupérée, tu mange en marchant vers le métro ce qui te remet un peu d'aplombs et mets la bière dans ton sac pour plus tard.", 
		],
		"actions" : [
			{
				"name" : "buy_food_done",
				"text" : "Continuer",
			},
			
		]
	},

	"beers_boughts" : {
		"text" : [
			"Tu t'arrêtes dans le premier PMU que tu croise et commande une bière au comptoir, histoire de te donner un peu de courage avant d'y aller. L'endroit est rempli d'habitués, éclusants des canons et verre de ricard de bon matin, non loin de toi l'idée d'émettre la moindre critique, t'es dans la même situation.",
			"Tout en sirotant ta bière tu te prends à penser à quelle point ça serait agréable de passer tes journées ici, tu pourrais glander toute la journée en buvant des coups, tu ferait la connaissance de pleins de monde, à tel point qu'il y aurait toujours quelqun pour te faire profiter d'une bonne:",
			"\"Tournée générale!\"",
			"Sans que tu le veuille les mots sont sorties de ta bouche. Une douzaine de paire d'yeux sont fixés vers toi. Les pochtrons du coins te font des signes de mains, reconnaissants et le patron a déjà commencé à servir les verres. Tout ça serait absolument génial si tu ne disposais pas en tout et pour tout que d'un pauvre billet de dix balles. Tu t'excuses et tout en posant ton billet sur le comptoir tu commences à expliquer que tu t'es trompé et que tu ne pourras pas payer plus de trois bières.",
			"Dans le bar le ton monte, personne ne veux céder son coup à boire. Les argumentations deviennent de plus en plus virulentes et soudain c'est l'émeute. Les tables sont renversées, les tabourets volent dans tous les sens et les beignes fusent.",
			"Le parton voyant qu'il ne pourra pas calmer tous le monde décides de s'en prendre à la source du problème: toi. Il sort une batte de sous le comptoir bien décider à s'en servir pour te fendre le crâne.",
		],
		"actions" : [
			{
				"name" : "bar_fight_run",
				"text" : "S'enfuir du bar",
			},
			{
				"name" : "bar_fight_fight",
				"text" : "Tenter de le combattre",
			},
			{
				"name" : "bar_fight_loose",
				"text" : "Tenter de le combattre",
			},
		]
	},

	"bar_fight_run" : {
		"text" : [
			"Bien conscient du danger qui plane sur toi tu choisit la solution des lâches: la fuite. Tu sautes de ton tabouret et commence à courir vers la porte du rade. Tu parviens à éviter les divers projectiles qui traversent la salle et atteint la porte sous les insultes du tenancier. Une fois sortir tu continue à cavaler et ne t'arrêtes qu'une fois arriver devant la station de métro. Apparement tu n'as pas était suivit, te voilà hors de danger.", 
		],
		"actions" : [
			{
				"name" : "bar_fight_flee",
				"text" : "Continuer",
			},
			
		]
	},

	"bar_fight_fight" : {
		"text" : [
			"Il saute par dessus le comptoir et t'envois un premier coup de batte que tu esquive de justesse en te jetant en arrière. Malheuresement tu glisse dans une flaque de bière et t'étales au sol. Tu commences à te relever et aperçois ton adversaire, son arme levée au dessus de la tête, prêt à te l'abattre sur la tronche.",
			"Paralysé par la peur, tu reste à quatres pattes à le fixer et te prépare au choc. Heuresement, la bataille fait toujours rage et un tabouret qui volait par là lui atterit sur le coin de la gueule. Il s'effondre au sol, groggy. Tu en profites pour ramasser son arme et sors en vitesse afin d'éviter d'être toi aussi victime d'un jet de mobilier. Tu te mets ensuite en route vers le métro, tu n'as que trop trainé.",
		],
		"actions" : [
			{
				"name" : "bar_fight_win",
				"text" : "Continuer",
			},
			
		]
	},

	"bar_fight_loose" : {
		"text" : [
			"Il saute par dessus le comptoir et t'envois un premier coup de batte. Tu tentes une esquive \"à la matrix\", le résultat est plutôt mitigé. Tu réussis en te penchant en arrière à éviter le coup de façon plutôt magistrale mais comme tu es un peu bourré tu n'as pas fait attention à ce qui se trouvait derrière toi. Ta tête se cogne violement sur un coin de table et tu te retrouve sonné. Tu vois sans pouvoir rien faire ton adversaire lever son arme une deuxième fois, cette fois le coup t'atteint de plein fouet et tu tombes dans les pommes.",
			"Quand tu te réveilles, tu es dans une civière, deux gars du samu sont en train de te sortir du bar. Tu aperçois d'autres corps au sol, dont celui du barman. Quelqu'un à du lui régler son compte après que tu te soits évanoui... justice à été rendue... enfin plus ou moins.",
			"Les secouristes te posent dans une ambulance et repartent chercher d'autres blessés. Tu reprends peu à peu tres esprits et commence à réfléchir. Même si cette perte de connaissance t'as sûrement foutu sacrément à la bourre tu dois tenter ta chance. Tu ne peux pas te permettre de te faire emmener à l'hosto, tu es investit d'une mission et rien ni personne ne pourra t'en détourner. Tu te lève péniblement, ton crâne te fait horriblement souffir mais tu tiens bon. Tu fausses compagnie à tes sauveurs avant qu'ils ne reviennent et te remets en route vers le métro.",
			"Plus tard sur le trajet tu réalises que se retrouver blessé était sûrement une excuse valable pour louper un rendez-vous pôle emploi. Trop tard, tu vas pas retourner à l'ambulance maintenant. Tu te maudits de ta connerie et continue à marcher.",
		],
		"actions" : [
			{
				"name" : "bar_fight_injured",
				"text" : "Continuer",
			},
			
		]
	},

	"transport_choose" : {
		"text" : [
			"Tu arrives enfin à la station de métro. Il y a foule à cet heure ci, ça risque de ne pas être un trajet très agréable. Tu pourrais bien sûr changer d'avis et aller au pôle-emploi à pied mais tu te mettrais à coup sûr en retard.", 
		],
		"actions" : [
			{
				"name" : "enter_station",
				"text" : "Entrer dans la station",
			},
			{
				"name" : "enter_station_nocard",
				"text" : "Entrer dans la station",
			},
			{
				"name" : "walk_to_pe",
				"text" : "Marcher jusqu'au pôle-emploi",
			},
		]
	},

/**
*** +METRO
**/

	"enter_station" : {
		"text" : [
			"Tu respires un bon coup et rentre dans la bouche de métro. Tu traverse péniblement les couloirs surchargés de monde et parvient à te frayer un passage jusqu'au quai. Ton métro va arriver dans quelques minutes, cependant avec le monde qu'il y a il va falloir que tu te débrouilles pour y entrer, sans quoi tu vas devoir attendre le prochain.", 
		],
		"actions" : [
			{
				"name" : "wait_metro",
				"text" : "Attendre le métro",
			},
			
		]
	},

	"enter_station_nocard" : {
		"text" : [
			"En arrivant devant les portiques du métro tu te rends compte que tu as oublié ta carte de transport. Si tu as de l'argent tu vas pouvoir acheter un ticket, sinon tu n'as que deux solutions: frauder en espérant que tu ne croise pas de controlleurs sur la ligne ou faire le trajet à pied.", 
		],
		"actions" : [
			{
				"name" : "cheat_metro",
				"text" : "Entrer en fraude",
			},
			{
				"name" : "buy_ticket",
				"text" : "Acheter un ticket",
			},
			{
				"name" : "walk_to_pe",
				"text" : "Marcher jsuqu'au pôle-emploi",
			},
		]
	},
	

	"cheat_metro" : {
		"text" : [
			"Tu observes les environs et ne voyant aucun controleur tu enjambes le portique et te hâte vers le quai. Tu traverse péniblement les couloirs surchargés de monde et parvient à te frayer un passage jusqu'au quai. Ton métro va arriver dans quelques minutes, cependant avec le monde qu'il y a il va falloir que tu te débrouilles pour y entrer, sans quoi tu vas devoir attendre le prochain.", 
		],
		"actions" : [
			{
				"name" : "metro_cheated",
				"text" : "Continuer",
			},
			
		]
	},

	"buy_ticket" : {
		"text" : [
			"Tu t'approches du guichet automatique et achète un ticket mais ce putain d'appareil ne te rends pas la monnaie sur ton billet de 10. T'as pas le temps de faire une réclamation, tant pis pour toi, ça t'apprendra à être honnète.",
			"Tu traverse péniblement les couloirs surchargés de monde et parvient à te frayer un passage jusqu'au quai. Ton métro va arriver dans quelques minutes, cependant avec le monde qu'il y a il va falloir que tu te débrouilles pour y entrer, sans quoi tu vas devoir attendre le prochain.", 
		],
		"actions" : [
			{
				"name" : "ticket_bought",
				"text" : "Continuer",
			},
			
		]
	},

	"wait_metro" : {
		"text" : [
			"Il faut que tu décides quoi faire quand le métro arrivera: ", 
		],
		"actions" : [
			{
				"name" : "enter_metro_by_force",
				"text" : "Tenter de s'imposer pour rentrer",
			},
			{
				"name" : "fail_enter_metro_by_force",
				"text" : "Tenter de s'imposer pour rentrer",
			},
			{
				"name" : "throw_up",
				"text" : "Vomir sur le quai",
			},
			{
				"name" : "fight_enter_metro",
				"text" : "Se frayer un chemin à coup de batte",
			},
			{
				"name" : "walk_to_pe",
				"text" : "Sortir et faire le trajet à pied",
			},
			{
				"name" : "drink_beer",
				"text" : "Boire une bière",
			},
		]
	},

	"enter_metro_by_force" : {
		"text" : [
			"Après quelques minutes ton métro finit par arriver. Tu te tiens prêt, prêt à dégager quiquoncque se foutra en travers de ta route. Quand les portes s'ouvrent tu joues des pieds et des mains pour être parmis les premier à rentrer sans même attendre que les voyageurs aient finit de sortir.",
			"Te voilà dans le wagon, tu viens de te comporter comme un authentique fils de pute, t'as bousculé tout le monde et n'as fait preuve d'aucun savoir-vivre, tu peux être fier de toi. Il ne te reste maintenant plus qu'à attendre d'être arriver à destination. Ta noble quête touche bientôt à sa fin.", 
		],
		"actions" : [
			{
				"name" : "arrive_metro",
				"text" : "Continuer",
			},
		]
	},

	"fail_enter_metro_by_force" : {
		"text" : [
			"Après quelques minutes ton métro finit par arriver. Tu te tiens prêt, prêt à te faufiler au milieu de la foule pour pénétrer dans le wagon. Quand les portes s'ouvrent tu tentes de te frayer un chemin mais tu es bousculé de toutes part. Les wagons se remplissent sans que tu puisse rentrer.",
			"Tu n'as plus qu'à attendre le prochain métro.", 
		],
		"actions" : [
			{
				"name" : "wait_metro",
				"text" : "Attendre",
			},
			
		]
	},

	"throw_up" : {
		"text" : [
			"Après quelques minutes ton métro finit par arriver. Ton plan est infaillible: Juste avant que les portes s'ouvrent tu te colle deux doigts au fond de la gorge et lâche un bon jet de vomi bien alcoolisé sur le quai. Aussitôt les gens qui t'entourent s'écartent si bien qu'au moment ou les portes s'ouvrent tu es absolument seul devant.",
			"Tu parviens à entrer dans le wagon sans encombres, t'as vraiment des idées de génie quand t'es bourré! Il ne te reste maintenant plus qu'à attendre d'être arriver à destination. Ta noble quête touche bientôt à sa fin.", 
		],
		"actions" : [
			{
				"name" : "wait_in_metro",
				"text" : "Continuer",
			},
		]
	},

	"fight_enter_metro" : {
		"text" : [
			"Après quelques minutes ton métro finit par arriver. Quand les portes s'ouvrent tu te frayes un passages dans la foule à coup de battes. Cette méthodes se révèle très éfficaces. En quelques secondes plusieurs corps jonchent le sol et la foule se disperse rapidement, te laissant pénétrer dans un wagon presque vides. Une fois dedans les quelques personnes encore présentes te lancent des regards inquiets.", 
			"Tu leurs fait un sourire et les salut en levant ta batte ensanglantée comme pour leurs dire: \"Oui c'est grâce à moins que nous allons pouvoir faire un trajet au calme\".",
			"Cela ne semble pas avoir l'effet escomptée. Les quelques passagers du wagon s'éloignent le plus possible de toi.",
		],
		"actions" : [
			{
				"name" : "wait_in_metro",
				"text" : "Continuer",
			},
			
		]
	},

	"wait_in_metro" : {
		"text" : [
			"Le métro démarre, dans quelques arrêts tu seras arrivé à destination.", 
		],
		"actions" : [
			{
				"name" : "arrive_metro",
				"text" : "Attendre jusqu'a l'arrivée",
			},
			{
				"name" : "arrive_metro_control",
				"text" : "Attendre jusqu'a l'arrivée",
			},
			{
				"name" : "arrive_metro_cops",
				"text" : "Attendre jusqu'a l'arrivée",
			},
			{
				"name" : "drink_beer",
				"text" : "Boire une bière",
			},
			{
				"name" : "smoke_joint_metro",
				"text" : "Fumer un joint",
			},
			
		]
	},

	"smoke_joint_metro" : {
		"text" : [
			"Tu sors ton joint de ta poche, l'allumes et tires quelques lattes dessus. Les personnes se trouvant dans ton wagon n'ont pas l'air d'apprécier. Cependant personnes ne vient t'emmerder. Une fois le joint finit tu te sens tout à coup extrêmement fatigué. T'as qu'une envie: retourné dans ton canapé et ne plus jamais en bouger. Toute ta motivation s'est envolée, c'était peut être pas un super plan de ce défoncer avant ton rendez-vous. \"Winner don't use drugs. They use alcohol.\" Souviens t'en pour la prochaine fois.", 
		],
		"actions" : [
			{
				"name" : "wait_in_metro",
				"text" : "Continuer",
			},
			
		]
	},

	"arrive_metro_cops" : {
		"text" : [
			"Deux stations avant d'arriver à destination, alors que tu commates tranquillement, une dizaine de policiers pénètrent dans le wagon et t'encèrclent, apparement certaines personnes n'ont pas appréciées de se faire ravager la tronche à coup de batte, petites natures! Ils te demandent de lâcher ton arme et de te rendre. Tu pourrais bien entendu refuser, mais seul contre dix ça risque d'être un peu tendu. ",
		],
		"actions" : [
			{
				"name" : "give_up_cops",
				"text" : "Se rendre",
			},
			{
				"name" : "fight_cops",
				"text" : "Se battre",
			},
		]
	},

	"give_up_cops" : {
		"text" : [
			"N'ayant aucune chance de t'en sortir tu préfères te rendre. Les flics te menottent et t'embarquent. Arrivé au commissariat tu apprends que ton petit exploit pour pénétrer dans le métro a couté la vie à trois personnes et grièvemment blessé deux autres. Tu restes enfermé jusqu'à ton procés, pendant lequel tu assures ta défense toi même.",
			"Grave erreure. Tu essaies d'expliquer qu'ayant à peine poussé les victimes tu ne saurait être tenu responsable de leurs morts. Tu essai de mettre leurs décès sur le compte du stress et la mauvaise qualité de l'air mais rien n'y fait. Les preuves sont accablantes et tu es condamné à quinzes ans de prison ferme.", 
		],
		"actions" : [
			{
				"name" : "prison_live",
				"text" : "Continuer",
			},
			{
				"name" : "prison_die",
				"text" : "Continuer",
			},
		]
	},

	"prison_live" : {
		"text" : [
			"La prison aurait pu être l'enfer pour toi. Tu aurais pu devenir la chienne de tes codétenus et passer toutes tes soirées à te faire péter le fion. Mais heuresement pour toi tu découvres que Jacky, ta voisine de pallier t'as fait un joli cadeau.",
			"La MST qu'elle ta refilé décourages tes camarades de s'en prendre à toi et te permet de conserver la virginité de ton anus. Tu coules des jours tranquilles en prison, au frais des contribuables, sans avoir à taffer, sans avoir de stupides démarches administratives à faire. Au fond c'est tout ce dont tu as toujours révé.",
			"Well done!", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Game Over",
			},
			
		]
	},

	"prison_die" : {
		"text" : [
			"La prison se révèle être un environnement extrêment hostile pour toi. N'ayant rien d'un caïd tu te retrouves vite à la merci des autres pensionnaires. Les passages à tabac et les viols deviennent ton quotidien.",
			"Tu tiens le coup quelques mois mais finit par te pendre dans ta cellule. Monde de merde!", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Game Over",
			},
			
		]
	},

	"fight_cops" : {
		"text" : [
			"", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Continuer",
			},
			
		]
	},

	"arrive_metro" : {
		"text" : [
			"Enfin arrivée à la bonne station tu descends du wagon et te mèle à la foule qui se presse en direction de la sortie. Une fois dehors tu es alpagué par un sdf assis par terre:",
			"\"Bleuarg gné doure juire et loip tu roiu ui JUSTIFIE! Bae lui parti berar. Graeg beuh lichr beqrh ahio JUSTIFIE!\"",
			"Il tiens fermement une bouteille de villageoise dans une main et bien que tu ne comprenne absolument pas ce qu'il dit il semble demander quelquechose." 
		],
		"actions" : [
			{
				"name" : "pe_start",
				"text" : "Passer son chemin",
			},
			{
				"name" : "give_cigaret",
				"text" : "Lui donner une clope",
			},
			{
				"name" : "give_joint",
				"text" : "Lui donner un joint",
			},
			{
				"name" : "give_beer",
				"text" : "Lui donner une bière",
			},
			{
				"name" : "give_money",
				"text" : "Lui donner de l'argent",
			},
		]
	},

	"hobo_nice" : {
		"text" : [
			"Il semble reconnaissant, il te tends sa bouteille comme pour t'inviter à en prendre une gorgée.", 
		],
		"actions" : [
			{
				"name" : "drink_with_hobo",
				"text" : "Accepter",
			},
			{
				"name" : "pe_start",
				"text" : "Refuser et s'en aller",
			},
		]
	},

	"hobo_dead" : {
		"text" : [
			"Il accepte ton joint et reprends son charabia:",
			"\"Bleuarg gné doure juire et loip tu roiu ui JUSTIFIE! Bae lui parti berar. Graeg beuh lichr beqrh ahio JUSTIFIE!\"",
			"Il tire ensuite quelques lattes dessus, te fixe, les yeux dans le vague. Il n'a pas l'air d'aller très bien. Il tire quelques autres lattes et s'effondre en vomissant, ton cadeau lui a pas trop rendu service. Tu notes dans un coin de ta tête que les clodos sont sensibles au shit, un peu comme les pokemons plantes sont sensibles au feu.",
		],
		"actions" : [
			{
				"name" : "pe_start",
				"text" : "S'en aller",
			},
		]
	},

	"drink_with_hobo" : {
		"text" : [
			"Tu bois quelques gorgées de son étrange breuvage. Bien que l'étiquette affirme que c'est du pinard, tu as sérieusement des doutes, ça a vraiment un goût de merde. Par contre ça décape, la tête te tourne, tu te sens nettement plus bourré, ce qui n'es pas pour te déplaire.", 
			"Tu lui rends sa bouteille, il en prends également une gorgée puis lève la tête vers toi, il semble vouloir te parler.",
		],
		"actions" : [
			{
				"name" : "hobo_talk",
				"text" : "Continuer",
			},
			{
				"name" : "hobo_talk_no",
				"text" : "Continuer",
			},
		]
	},

	"hobo_talk" : {
		"text" : [
			"Tu ne sais pas si c'est à cause du pinard mais tu le comprends maintenant clairement quand il s'exprime.",
			"\"L'idée selon laquelle les sans abris ont une vie de merde est totalement injustifiée. Moi je passes ma journée à picoler, je fais des rencontres, et tout ça sans débourser un centimes. Etre à la rue c'est vraiment le pied crois moi.\"",
			"Tu es un peu intrigué par ce qu'il te dit et aimerais en apprendre plus, mais il ne faudrait pas que tu te mettes en retard." 
		],
		"actions" : [
			{
				"name" : "pe_start",
				"text" : "S'en aller",
			},
			{
				"name" : "stay_with_hobo",
				"text" : "Rester encore un peu avec lui",
			},
		]
	},

	"hobo_talk_no" : {
		"text" : [
			"\"Bleuarg gné doure juire et loip tu roiu ui JUSTIFIE! Bae lui parti berar. Graeg beuh lichr beqrh ahio JUSTIFIE!\"",
			"Toujours le même putain de charabia, voyant que tu n'en tireras rien tu lui dit en revoir et décides de te remettre en route.", 
		],
		"actions" : [
			{
				"name" : "pe_start",
				"text" : "S'en aller",
			},
			
		]
	},

	"stay_with_hobo" : {
		"text" : [
			"Tu restes avec le sdf pour discuté, maintenant que tu comprends son langage ça serait dommage de passer à coté de ça. Il te parle longuement de sa vie dans les rues, du pouvoir secret de La Villageoise qui d'après lui permet de vivre plus vieux, protège du froid et fait grossir le pénis de cinq bon centimètres. Il te parles aussi de la liberté que permet son mode de vie, du regard bienveillants des passants et des merveilleux festins qu'il est possible de faire à lka soupe populaire.",
			"A force de l'écouter tu te prends à réver d'une vie telle qu'il décrit la sienne. Tu décides que le pôle-emploi peut aller se faire foutre. Tu ne veux plus faire partie d'un système qui te force à t'actualiser tous les mois et à participer à des entretiens interminables pour t'aider à trouver un emploi. Tu ne veux même pas d'emploi, tout ce que tu désires c'est pouvoir glander tranquille.",
			"Tu décides de rester ici, dans la rue pour y vivre et le sympatique clochard accèpte d'être ton mentor. Il t'apprends toutes les ficelles du métier (Enfin les deux ficelles: mendier pour acheter du pinard et boire du pinard en mendiant). Tu vie heureux et fin saôul jusqu'a la fin de tes jours.", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Bien joué!",
			},
			
		]
	},

/**
** +WALK
**/


	"walk_start" : {
		"text" : [
			"Tu décides de marcher jusqu'au pôle-emploi, le trajet se passes sans encombres mais tu arrives au pôle-emploi sacrément à la bourre.", 
		],
		"actions" : [
			{
				"name" : "walk_end",
				"text" : "Continuer",
			},
			
		]
	},

/**
** +POLE EMPLOI
**/

	"pe_start" : {
		"text" : [
			"Tu es enfin devant le pôle-emploi, ça n'aura pas été sans encombres mais tu y es parvenu.", 
		],
		"actions" : [
			{
				"name" : "enter_pe",
				"text" : "Entrer dans le bâtiment",
			},
			{
				"name" : "enter_pe_late",
				"text" : "Entrer dans le bâtiment",
			},
		]
	},

	"enter_pe" : {
		"text" : [
			"Tu entres dans le bâtiment. Une secrétaire te demande de patienter, ton entretien va bientôt commencé. Après quelques minutes d'attente on t'invites à entrer dans un bureau.", 
		],
		"actions" : [
			{
				"name" : "interview",
				"text" : "Continuer",
			},
			{
				"name" : "interview_drunk",
				"text" : "Continuer",
			},
		]
	},

	"interview" : {
		"text" : [
			"Dans le bureau ta conseillère pôle-emploi t'attends. Elle s'appelle Julie d'après le badge épinglé à sa veste et tu la trouves assez charmante. C'est ce qui cause ta perte. Comme tu es absolument incapable de dire non à une jolie fille tu finis par accepter une formation de négociateur immobilier qu'elle te propose.", 
			"A l'issue de six mois de formations tu est recruté par une agence immobilière. Une fois le doigt mis dans le terrible engrenage de l'emploi il t'est impossible d'en sortir. Tu travailles pendant 20 ans comme agent immobilier avant de te rendre compte que tu détestes se job.",
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "T'as raté ta vie! Bravo!",
			},
			
		]
	},

	"interview_drunk" : {
		"text" : [
			"Alcoolisé comme tu l'es tu rentres dans le bureau de ta conseillère en titubant. Tu pue l'alcool et tiens des propos incohérents. A cause de ton manque de sérieux et ton haut degré d'alcool tu es radié de pôle-emploi.", 
			"Obligé de travailler pour subvenir à tes besoins tu es contraint d'accepter un taff dans un Mac Donald. Ce travail te déprimes telement que tu bois du matin au soir pour tenir le coup. Un soir, ivre tu te tues en tombant la tête la première dans une friteuse.",
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Bien fait pour ta gueule",
			},
			
		]
	},

	"enter_pe_late" : {
		"text" : [
			"Tu entre dans le bâtiment, la secrétaire t'explique que tu as manqué ton rendez-vous de deux bonnes heures, que ce n'es pas la première fois en plus et que du coup tu vas être radié, finit les allocs pour toi! Comment tu vas faire pour rester toute la journée à glander chez toi maintenant?", 
		],
		"actions" : [
			{
				"name" : "go_home",
				"text" : "S'en aller",
			},
			{
				"name" : "resist_pe_club",
				"text" : "Sortir ta batte et faire un carnage",
			},
		]
	},

	"go_home" : {
		"text" : [
			"Tu rentres chez toi, résigné. Dès le lendemain tu commences à chercher un travail et arrêtes de passer tes journées à glander.",
			"Obligé de travailler pour subvenir à tes besoins tu es contraint d'accepter un taff dans un Mac Donald. Ce travail te déprimes telement que tu bois du matin au soir pour tenir le coup. Un soir, ivre tu te tues en tombant la tête la première dans une friteuse.", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Bien fait pour ta gueule",
			},
			
		]
	},

	"resist_pe_club" : {
		"text" : [
			"Tu sors ta batte et t'en sers pour éclater la tronche de la secrétaire. Aussitôt c'est la panique, les gens hurlent et se mettent à courir vers la sortie. Tu distribue des coup de battes à ceux assez téméraire pour se mettre à ta portée.", 
			"Très vite le bâtiment est entièrement vide à l'exception de toi et des deux seules personnes que tu as réussis à assomer. Tu les traines dans un bureau et t'y enfermes avec eux, avec l'intention de s'en servir comme monnaie d'échange quand les flics arriveront.",
			"Après quelques minutes tu entends des sirènes, puis des bruits de pas à l'extérieur du bureau. Les keufs sont là et tes otages toujours inconscient ne te seront pas très utiles. On t'ordonne de te rendre, sans quoi tu seras abattu.",
		],
		"actions" : [
			{
				"name" : "pe_surrender",
				"text" : "Se rendre",
			},
			{
				"name" : "pe_fight",
				"text" : "Tenter de se battre",
			},
		]
	},

	"pe_surrender" : {
		"text" : [
			"Tu jettes ton armes et sors doucement de ton bureau. Aussitôt tu es menotté et embarqué par les flics. On te garde enfermé jusqu'à ton procès au cours duquel tu es condamné à 5 ans de prison ferme pour coup et blessures.", 
		],
		"actions" : [
			{
				"name" : "prison_live",
				"text" : "Continuer",
			},
			{
				"name" : "prison_die",
				"text" : "Continuer",
			},
		]
	},

	"pe_fight" : {
		"text" : [
			"Tu saisis fermement ta batte et te prépares à sortir affronter les filcs. Tu vas sûrement y passer. Que veux tu crier en ouvrant la porte?", 
		],
		"actions" : [
			{
				"name" : "shout_allah",
				"text" : "Allah Akbar!",
			},
			{
				"name" : "shout_king",
				"text" : "The king in the north!",
			},
			{
				"name" : "shout_stupid",
				"text" : "I fought the law and the law won!",
			},
		]
	},

	"shout_king" : {
		"text" : [
			"A peine la porte ouverte tu es froidement abbatu. Dans les médias on se demandera si oui ou non tu étais vraiment le roi du nord, avant de conclure que tu étais probablement juste stupide.", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Pas de bol",
			},
			
		]
	},

	"shout_allah" : {
		"text" : [
			"A peine la porte ouverte tu es froidement abbatu. Dans les médias on parlera de toi comme d'un français récemment converti à l'islam.", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Pas de bol",
			},
			
		]
	},

	"shout_stupid" : {
		"text" : [
			"A peine la porte ouverte tu es froidement abbatu. Dans les médias on dira que tu as combattu la loi et que oui en effet la loi a gagné.", 
		],
		"actions" : [
			{
				"name" : "game_over",
				"text" : "Pas de bol",
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

/**
** +OTHERS
**/

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

	"replay_game" : {
		"text" : [
			"Que vas tu faire maintenant?", 
		],
		"actions" : [
			{
				"name" : "replay_game",
				"text" : "S'était de la merde mais je vais refaire une partie",
			},
			{
				"name" : "do_poney",
				"text" : "S'était de la merde, je vais faire du poney",
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
			"event" : "computer_on",
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
				"remove" : ["computer_on",]
			},
			"newEvent" : "visit_flat_again"
		}
	},
	"flat_take_beers" : {
		"conditions" : {
			"event" : "beers_not_takens",
		},
		"effect" : {
			"eventFlag" : {
				"remove" : ["beers_not_takens"],
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
			},
			"event" : "joint_not_taken"
		},
		"effect" : {
			"newEvent" : "stay_in_flat"
		},
	},
	"can_not_leave_flat_nojoint" : {
		"conditions" : {
			"motivation" : {
				"min" : 0,
				"max" : 20
			},
			"event" : "joint_taken"
		},
		"effect" : {
			"newEvent" : "stay_in_flat_nojoint"
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
			"eventFlag" : {
				"add" : ["joint_taken"],
				"remove" : ["joint_not_taken"]
			},
			"newEvent" : "visit_flat_again"
		},
	},
	"leave_flat_aborted_nojoint" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "visit_flat_again"
		},
	},
	"leave_flat_with_stuff" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Billet de 10 euros",
					"Carte de transport"
				],
			},
			"eventFlag" : {
				"add" : ["gotcard"],
				"remove" : ["nocard"],
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
					"Billet de 10 euros"
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
			"newEvent" : "hallway_climb"
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
	"get_out_bin" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Vieux kébab",
				],
			},
			"newEvent" : "walk_toward_transport",
		}
	},

	"hallway_decline_fail" : {
		"conditions" : {
			"motivation" : {
				"min" : 0,
				"max" : 40,
			}
		},
		"effect" : {
			"newEvent" : "hallway_decline_fail"
		}
	},
	"hallway_decline" : {
		"conditions" : {
			"motivation" : {
				"min" : 40,
				"max" : 101,
			}
		},
		"effect" : {
			"newEvent" : "hallway_decline"
		}
	},
	"hallway_knock_neighboor" : {
		"conditions" : {
			"item" : "Bière"
		},
		"effect" : {
			"newEvent" : "hallway_knock_neighboor",
		}
	},
	"hallway_accept_neighboor" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "hallway_accept_neighboor",
		}
	},
	"hallway_out" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "walk_toward_transport",
		}
	},
	"hallway_neighboor_knocked" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Clopes"
				],
				"remove" : ["Bière"],
			},
			"newEvent" : "walk_toward_transport",
		}
	},
	"hallway_take_drink" : {
		"conditions" : null,
		"effect" : {
			"chAlcohol" : 20,
			"newEvent" : "hallway_take_drink",
		},
	},
	"hallway_fuck" : {
		"conditions" : {
			"alcohol" : {
				"min" : 0,
				"max" : 60,
			}
		},
		"effect" : {
			"newEvent" : "hallway_fuck"
		},
	},
	"hallway_cant_fuck" : {
		"conditions" : {
			"alcohol" : {
				"min" : 60,
				"max" : 101,
			}
		},
		"effect" : {
			"newEvent" : "hallway_cant_fuck"
		}
	},
	"hallway_neighboor_fucked" : {
		"conditions" : null,
		"effect" : {
			"chAlcohol" : -10,
			"newEvent" : "walk_toward_transport",
			"item" : {
				"add" : [
					"MST"
				],
			},
			"eventFlag" : {
				"add" : [
					"late",
					"mst",
				],
				"remove" : [
					"no_mst", 
					"no_late",
				],
			},
		}
	},
	"hallway_dick_problem" : {
		"conditions" : null,
		"effect" : {
			"chMotivation" : -40,
			"newEvent" : "walk_toward_transport",
		}
	},

/**
*** -TOWARD TRANSPORT
**/

	"go_to_transport" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "transport_choose",
		}
	},
	"buy_cigarets" : {
		"conditions" : {
			"item" : "Billet de 10 euros",
		},
		"effect" : {
			"newEvent" : "cigarets_boughts"
		}
	},
	"buy__cigarets_done" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Clopes",
					"Briquet"
				],
				"remove" : ["Billet de 10 euros"],
			},
			"newEvent" : "transport_choose"
		}
	},
	"buy_food" : {
		"conditions" : {
			"item" : "Billet de 10 euros",
		},
		"effect" : {
			"newEvent" : "food_boughts",
		}
	},
	"buy_food_done" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"remove" : ["Billet de 10 euros"],
			},
			"chAlcohol" : -30,
			"newEvent" : "transport_choose",
		}
	},
	"buy_beers" : {
		"conditions" : {
			"item" : "Billet de 10 euros",
		},
		"effect" : {
			"newEvent" : "beers_boughts",
		}
	},
	"bar_fight_run" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"remove" : ["Billet de 10 euros"],
			},
			"chAlcohol" : 10,
			"newEvent" : "bar_fight_run",
		}
	},
	"bar_fight_flee" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "transport_choose",
		}
	},
	"bar_fight_fight" : {
		"conditions" : {
			"alcohol" : {
				"min" : 0,
				"max" : 40,
			},
		},
		"effect" : {
			"chAlcohol" : 10,
			"item" : {
				"remove" : ["Billet de 10 euros"],
			},
			"newEvent" : "bar_fight_fight",
		}
	},
	"bar_fight_win" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Batte",
				],
			},
			"newEvent" : "transport_choose",
		}
	},
	"bar_fight_loose" : {
		"conditions" : {
			"alcohol" : {
				"min" : 40,
				"max" : 101,
			},	
		},
		"effect" : {
			"chAlcohol" : 10,
			"item" : {
				"remove" : ["Billet de 10 euros"],
			},
			"newEvent" : "bar_fight_loose",
		}
	},
	"bar_fight_injured" : {
		"conditions" : null,
		"effect" : {
			"chMotivation" : -20,
			"eventFlag" : {
				"add" : ["late"],
				"remove" : ["no_late"],
			},
			"newEvent" : "transport_choose",
		}
	},
	"enter_station" : {
		"conditions" : {
			"event" : "gotcard"
		},
		"effect" : {
			"newEvent" : "enter_station",
		}
	},
	"enter_station_nocard" : {
		"conditions" : {
			"event" : "nocard"
		},
		"effect" : {
			"newEvent" : "enter_station_nocard",
		}
	},
	"walk_to_pe" : {
		"conditions" : null,
		"effect" : {
			"eventFlag" : {
				"add" : ["late"],
				"remove" : ["no_late"],
			},
			"newEvent" : "walk_start",
		}
	},

/**
*** -METRO
**/

	"cheat_metro" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "cheat_metro",
		}
	},
	"metro_cheated" : {
		"conditions" : null,
		"effect" : {
			"eventFlag" : {
				"add" : ["metro_control"],
				"remove" : ["legal"],
			},
			"newEvent" : "wait_metro",
		},
	},
	"buy_ticket" : {
		"conditions" : {
			"item" : "Billet de 10 euros"
		},
		"effect" : {
			"newEvent" : "buy_ticket",
		}
	},
	"ticket_bought" : {
		"conditions" : null,
		"effect" : {
			"item" : {
				"add" : [
					"Ticket de métro",
				],
				"remove" : "Billet de 10 euros",
			},
			"newEvent" : "wait_metro",
		}
	},
	"wait_metro" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "wait_metro",
		}
	},
	"enter_metro_by_force" : {
		"conditions" : {
			"motivation" : {
				"min" : 40,
				"max" : 101,
 			},
		},
		"effect" : {
			"newEvent" : "enter_metro_by_force",
		}
	},
	"fail_enter_metro_by_force" : {
		"conditions" : {
			"motivation" : {
				"min" : 0,
				"max" : 40,
 			},
		},
		"effect" : {
			"newEvent" : "fail_enter_metro_by_force",
		}
	},
	"throw_up" : {
		"conditions" : {
			"alcohol" : {
				"min" : 50,
				"max" : 101,
 			},
		},
		"effect" : {
			"newEvent" : "throw_up",
		}
	},
	"fight_enter_metro" : {
		"conditions" : {
			"item" : "Batte"
		},
		"effect" : {
			"eventFlag" : {
				"add" : ["metro_cops"],
				"remove" : ["legal"],
			},
			"newEvent" : "fight_enter_metro",
		}
	},
	"smoke_joint_metro" : {
		"conditions" : {
			"item" : "Un joint",
		},
		"effect" : {
			"chMotivation" : -100,
			"item" : {
				"remove" : "Un joint",
			},
			"newEvent" : "smoke_joint_metro",
		}
	},
	"wait_in_metro" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "wait_in_metro",
		}
	},
	"arrive_metro" : {
		"conditions" : {
			"event" : "legal"
		},
		"effect" : {
			"newEvent" : "arrive_metro",
		}
	},
	"give_cigaret" : {
		"conditions" : {
			"item" : "Clopes"
		},
		"effect" : {
			"newEvent" : "hobo_nice",
		}
	},
	"give_joint" : {
		"conditions" : {
			"item" : "Un joint"
		},
		"item" : {
				"remove" : "Un joint",
			},
		"effect" : {
			"newEvent" : "hobo_dead",
		}
	},
	"give_beer" : {
		"conditions" : {
			"item" : "Bière"
		},
		"item" : {
				"remove" : "Bière",
			},
		"effect" : {
			"newEvent" : "hobo_nice",
		}
	},
	"drink_with_hobo" : {
		"conditions" : null,
		"effect" : {
			"chAlcohol" : 40,
			"newEvent" : "drink_with_hobo",
		}
	},
	"hobo_talk" : {
		"conditions" : {
			"alcohol" : {
				"min" : 80,
				'max' : 101,
			}
		},
		"effect" : {
			"newEvent" : "hobo_talk",
		}
	},
	"hobo_talk_no" : {
		"conditions" : {
			"alcohol" : {
				"min" : 0,
				'max' : 80,
			}
		},
		"effect" : {
			"newEvent" : "hobo_talk_no",
		}
	},
	"give_money" : {
		"conditions" : {
			"item" : "Billet de 10 euros"
		},
		"item" : {
				"remove" : "Billet de 10 euros",
			},
		"effect" : {
			"newEvent" : "hobo_nice",
		}
	},

	"arrive_metro_control" : {
		"conditions" : {
			"event" : "metro_cops"
		},
		"effect" : {
			"newEvent" : "arrive_metro",
		}
	},
	"arrive_metro_cops" : {
		"conditions" : {
			"event" : "metro_control"
		},
		"effect" : {
			"newEvent" : "arrive_metro_cops",
		}
	},
	"give_up_cops" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "give_up_cops",
		}
	},
	"fight_cops" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "fight_cops",
		}
	},
	"prison_live" : {
		"conditions" : {
			"event" : "mst"
		},
		"effect" : {
			"newEvent" : "prison_live",
		}
	},
	"prison_die" : {
		"conditions" : {
			"event" : "no_mst"
		},
		"effect" : {
			"newEvent" : "prison_die",
		}
	},
	"stay_with_hobo" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "stay_with_hobo",
		}
	},

/**
*** -WALK
**/	

	"walk_end" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "pe_start",
		}
	},

/**
*** -POLE EMPLOI
**/

	"pe_start" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "pe_start",
		}
	},
	"enter_pe" : {
		"conditions" : {
			"event" : "no_late"
		},
		"effect" : {
			"newEvent" : "enter_pe",
		}
	},
	"interview" : {
		"conditions" : {
			"alcohol" : {
				"min" : 0,
				"max" : 60,
			}
		},
		"effect" : {
			"newEvent" : "interview",
		}
	},
	"interview_drunk" : {
		"conditions" : {
			"alcohol" : {
				"min" : 60,
				"max" : 101,
			}
		},
		"effect" : {
			"newEvent" : "interview_drunk",
		}
	},
	"enter_pe_late" : {
		"conditions" : {
			"event" : "late"
		},
		"effect" : {
			"newEvent" : "enter_pe_late",
		}
	},
	"go_home" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "go_home",
		}
	},
	"resist_pe" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "resist_pe",
		}
	},
	"resist_pe_club" : {
		"conditions" : {
			"item" : "Batte",
		},
		"effect" : {
			"newEvent" : "resist_pe_club",
		}
	},
	"pe_surrender" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "pe_surrender",
		}
	},
	"pe_fight" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "pe_fight",
		}
	},
	"shout_allah" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "shout_allah",
		}
	},
	"shout_king" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "shout_king",
		}
	},
	"shout_stupid" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "shout_stupid",
		}
	},

/**
*** -OTHERS
**/	

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
	"game_over" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "replay_game",
		}
	},
	"replay_game" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "reload",
		}
	},
	"do_poney" : {
		"conditions" : null,
		"effect" : {
			"newEvent" : "do_poney",
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
	if (cond.event && jQuery.inArray(cond.event, eventsFlag) === -1)
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
		items.splice(items.indexOf(mItem.remove[0]), 1);
	displayItems();
}

function changeEventFlag(mEventFlag) {
	console.log("changeEventFlag ");
	console.log(mEventFlag);
	if (mEventFlag.add)
	{
		for (var i = 0; i < mEventFlag.add.length; i++) {
			console.log("boucle ajout events");
			eventsFlag.push(mEventFlag.add[i]);
		}
	}
	if (mEventFlag.remove)
	{
		for (var i = 0; i < mEventFlag.remove.length; i++) {
			console.log("boucle suppresion events");
			console.log(eventsFlag);
			console.log(mEventFlag.remove);
			eventsFlag.splice(eventsFlag.indexOf(mEventFlag.remove[i]), 1);
		}
	}
}

function changeEvent(newEvent) {
	console.log(newEvent);
	console.log(previousEvent);
	if (newEvent == "reload")
	{
		initGame();
		return 0;
	}
	if (newEvent == "do_poney")
	{
		document.location.href = "http://blog-mastere2-rp-events.ecs-paris.com/wp-content/uploads/2014/04/poney-rose.jpg";
		return 0;
	}
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

	// Initializes games objects to their bases values for new game
	items = [];
	weapons = [];
	outfits = [];
	usables = [];
	eventsFlag = ["joint_not_taken", "beers_not_takens", "computer_on", "nocard", "legal", "no_mst", "no_late"];
	previousEvent = "";
	health = 100;
	motivation = 0;
	alcohol = 0;

	//displayStory("dream_fight_dragon");
	//displayActions("dream_fight_dragon");
	displayStory("dream_start");
	displayActions("dream_start");
	displayItems();

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
