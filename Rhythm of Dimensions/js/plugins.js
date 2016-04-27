// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.13 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"297","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.35a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 16","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"true","Timed Buffs":"true","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_RowFormation","status":true,"description":"v1.09 Places party members into row formations to give\nthem distinct advantages based on row location.","parameters":{"---General---":"","Maximum Rows":"3","Command Name":"Row","Show Menu Command":"true","Enable Menu Command":"true","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","---Defaults---":"","Default Row":"1","Enemy Row Lock":"false","---Menu Settings---":"","Use Map Sprite":"false","Front Buffer Y":"(rect.height - 48) / 2;","Side Buffer Y":"(rect.height - 64) / 2;","---Position Settings---":"","Maximum Row X":"screenWidth - partySize * 32 - 16","Maximum Row Y":"screenHeight - statusHeight - 16","Minimum Row Y":"screenHeight - statusHeight - 16 - (maxSize * 64)","Center Row Y":"(maxRowY + minRowY) / 2 + 16","---Row 1 Settings---":"","Row 1 Name":"Front Row","Row 1 Help Line 1":"This is the front row.","Row 1 Help Line 2":"Place your melee allies here.","Row 1 States":"","Row 1 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 1 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 2 Settings---":"","Row 2 Name":"Middle Row","Row 2 Help Line 1":"This is the middle row.","Row 2 Help Line 2":"Place allies here who can fight from the middle.","Row 2 States":"","Row 2 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 2 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 3 Settings---":"","Row 3 Name":"Back Row","Row 3 Help Line 1":"This is the back row.","Row 3 Help Line 2":"Place allies here to take less melee damage.","Row 3 States":"","Row 3 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 3 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 4 Settings---":"","Row 4 Name":"Row 4","Row 4 Help Line 1":"Help Description","Row 4 Help Line 2":"Help Description","Row 4 States":"","Row 4 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 4 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 5 Settings---":"","Row 5 Name":"Row 5","Row 5 Help Line 1":"Help Description","Row 5 Help Line 2":"Help Description","Row 5 States":"","Row 5 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 5 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 6 Settings---":"","Row 6 Name":"Row 6","Row 6 Help Line 1":"Help Description","Row 6 Help Line 2":"Help Description","Row 6 States":"","Row 6 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 6 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 7 Settings---":"","Row 7 Name":"Row 7","Row 7 Help Line 1":"Help Description","Row 7 Help Line 2":"Help Description","Row 7 States":"","Row 7 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 7 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 8 Settings---":"","Row 8 Name":"Row 8","Row 8 Help Line 1":"Help Description","Row 8 Help Line 2":"Help Description","Row 8 States":"","Row 8 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 8 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 9 Settings---":"","Row 9 Name":"Row 9","Row 9 Help Line 1":"Help Description","Row 9 Help Line 2":"Help Description","Row 9 States":"","Row 9 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 9 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 10 Settings---":"","Row 10 Name":"Row 10","Row 10 Help Line 1":"Help Description","Row 10 Help Line 2":"Help Description","Row 10 States":"","Row 10 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 10 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Enemy Rows---":"","Adjust Relative":"false","Enemy Row X":"screenX - (rowId - 1) * 64","Enemy Row Y":"screenY"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.10 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.07c (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.02a (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"25","Floating Rate":"0.4","Floating Height":"10","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_EventChasePlayer","status":true,"description":"v1.03 When a player is in the proximity of a certain event,\nthe event will start chasing or fleeing from the player.","parameters":{"Sight Lock":"300","See Player":"true","Alert Timer":"120","Alert Balloon":"1","Alert Sound":"Attack1","Alert Common Event":"0","Return After":"true","Return Wait":"180"}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.03 Revamps the shop menu appearance and provides the\nframework for many new shop options.","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"MOG_TreasureHud","status":true,"description":"(v1.1) Apresenta uma Hud com os tesouros adquiridos no jogo.","parameters":{"Hud X-Axis":"555","Hud Y-Axis":"500","Name X-Axis":"78","Name Y-Axis":"24","Icon X-Axis":"42","Icon Y-Axis":"24","Duration":"90","Gold Icon Index":"163","Font Size":"20"}},
{"name":"YEP_X_BattleSysCTB","status":true,"description":"v1.14a (Requires YEP_BattleEngineCore.js) Add CTB (Charge\nTurn Battle) into your game using this plugin!","parameters":{"---CTB Settings---":"","Per Tick":"user.agi","Initial Speed":"0","Full Gauge":"Math.max(7000, BattleManager.highestBaseAgi() * 120)","Pre-Emptive Bonuses":"0.8","Surprise Bonuses":"0.8","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn---":"","Full Turn":"Math.min(200, BattleManager.lowestBaseAgi() * 8)","---Rubberband---":"","Enable Rubberband":"true","Minimum Speed":"0.5 * BattleManager.highestBaseAgi()","Maximum Speed":"1.5 * BattleManager.highestBaseAgi()","---Sound---":"","Ready Sound":"Decision1","Ready Volume":"90","Ready Pitch":"120","Ready Pan":"0","---Turn Order---":"","Show Turn Order":"true","Icon Size":"32","Position Y":"54","Position X":"right","Turn Direction":"left","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"MOG_BattleCommands","status":true,"description":"(v1.0) Comandos de batalhas animados por imagens.","parameters":{"Mode":"1","Layout X-axis":"22","Layout Y-axis":"15","Com X-axis":"0","Com Y-axis":"0","Arrow":"false","Arrow X-axis":"5","Arrow Y-axis":"0","Zoom Animation":"true","Zoom Rate":"1.30","Zoom Speed":"0.015","Zoom Loop":"true","Slide Animation":"false","Slide X":"0","Slide Y":"0","Com Name":"true","Com Name X-axis":"55","Com Name Y-axis":"75","Com Font Size":"22","Cursor":"false","Cursor X-axis":"0","Cursor Y-axis":"0","Cursor Slide":"false","Row Max":"4","Ring Range":"70","Ring Motion":"true","Pi Range":"2.0","Side Input":"true"}},
{"name":"MOG_BattleHud","status":true,"description":"(v2.7) Permite customizar o layout de batalha.","parameters":{"Hud X-Axis":"90","Hud Y-Axis":"450","Hud Space X":"0","Hud Space Y":"0","Vertical Mode":"false","Command Auto Adjust":"false","Max Battle Members":"4",">> LAYOUT OVERLAY =========":"","Layout2 Visible":"false","Layout2 X-Axis":"0","Layout2 Y-Axis":"0",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"0","Turn Y-Axis":"0",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"54","Face Y-Axis":"16","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"1",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"70","Name Y-Axis":"-7","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"164","HP Meter Y-Axis":"21","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"265","HP Number Y-Axis":"0","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"297","MP Meter Y-Axis":"21","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"397","MP Number Y-Axis":"0","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"420","TP Meter Y-Axis":"21","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"520","TP Number Y-Axis":"0","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"0","ATB Meter Y-Axis":"32","ATB Meter Angle":"0","ATB Meter Flow Anime":"false",">> STATES ===================":"","States Visible":"true","States X-Axis":"532","States Y-Axis":"0",">> W COMMAND ===================":"","W Command X-Axis":"15","W Command Y-Axis":"440","W Command Width":"192","W Command Height":"180","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35",">> W PARTY ===================":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"192","W Party Height":"110","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0",">> CUSTOM POSITION ===================":"","Custom Position 1":"220,450","Custom Position 2":"220,495","Custom Position 3":"220,540","Custom Position 4":"220,585","Custom Position 5":"220,630","Custom Position 6":"220,675","Custom Position 7":"","Custom Position 8":""}}
];
