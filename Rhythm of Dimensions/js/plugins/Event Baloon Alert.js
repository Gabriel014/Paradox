//=============================================================================
// TTKC - Event Baloon Alert
// by Fogomax
// License: Attribution-ShareAlike 4.0 International - Creative Commons
//=============================================================================

//=============================================================================
// * This plugin is part of my Christmas pack, which contains several other
// * simple and useful plugins. Link to the full pack:
// * https://github.com/rafaelalmeidatk/JGSS/tree/master/Christmas-Pack
//=============================================================================

/*:
  * @author Fogomax
  * @plugindesc If the player comes within an event, a balloon is displayed
  * in the event

  * <TTKC EventBaloonAlert>
  * @help
  * ===========================================================================
  * ? Explanation
  * ===========================================================================
  * If the player comes within an event, a balloon is displayed in the event
  *
  * ===========================================================================
  * ? How to Use
  * ===========================================================================
  * For an event shows a balloon expression when the player come close, put
  * the following tag in a comment:
  *
  * * <AlertBallon=x> - when the player comes close, it will display the
  * expression balloon of ID x.
  *
  * The balloons ID are corresponding to the line that the balloon is in the
  * image file. For example, the exclamation is the first balloon, so your ID
  * is 1.
  *
  * To change the default distance (defined in the settings), use this tag:
  *
  * <AlertRange=x> - distance action will change to x (tiles).
  *
  * To change the setting of alert appears again or not (in the settings),
  * use this tag:
  *
  * * <RepeatAlert=x> - Where x is: "true" (yes) ou "false" (no). Without
  * the quotation marks.

	@param Default distance
	@desc If not provided a distance, it will be used (in tiles)
	@default 2

	@param Repeat Alert
	@desc After displayed once, the balloon will continue to be displayed if
	the player returns? Can be changed via comments. Yes: true | No: false
	@default false
*/

/*:pt
  * @author Fogomax
  * @plugindesc Caso o jogador entre no raio de um evento, um bal�o � mostrado
  * no evento

  * <TTKC EventBaloonAlert>
  * @help
  * ===========================================================================
  * ? Explica��o
  * ===========================================================================
  * Caso o jogador entre no raio de um evento, um bal�o de express�o � mostrado
  * no evento
  *
  * ===========================================================================
  * ? Como Usar
  * ===========================================================================
  * Para um evento mostrar um bal�o de express�o quando o jogador chegar
  * perto, coloque a seguinte tag em um coment�rio:
  *
  * * <AlertBallon=x> - quando o jogador chegar perto, ser� mostrado o bal�o
  * de express�o de ID x.
  *
  * Os IDs dos bal�es s�o correspondentes � linha que o bal�o est� no arquivo
  * de imagem do mesmo. Por exemplo, o bal�o de exclama��o � o primeiro, logo,
  * seu ID � um.
  *
  * Para alterar a dist�ncia padr�o (definida nas configura��es), utilize essa
  * tag:
  *
  * <AlertRange=x> - a dist�ncia de a��o ser� alterada para x
  *
  * Para alterar a defini��o do alerta aparecer de novo ou n�o (nas
  * configura��es), utilize essa tag:
  *
  * * <RepeatAlert=x> - sendo x: "true" (sim) ou "false" (n�o).

	@param Default distance
	@desc Caso n�o seja fornecida uma dist�ncia, esta ser� usada (em tiles)
	@default 2

	@param Repeat Alert
	@desc Ap�s exibidos uma vez, o bal�o continuar� sendo exibido caso o
	jogador retorne? Pode ser mudado via coment�rios. Sim: true | N�o: false
	@default false
*/

var Imported = Imported || {};
Imported["TTKC_EventBaloonAlert"] = "1.0.0";

var TTK = TTK || {};
TTK.EventBaloonAlert = {};

"use strict";

(function($) {
	$.Params = $plugins.filter(function(p) { return p.description.contains('<TTKC EventBaloonAlert>'); })[0].parameters;

	//-----------------------------------------------------------------------------
	// Plugin global variables
	//

	$.alertsCharacters = [];
	$.defaultRange = parseInt($.Params['Default distance']);
	$.repeatAlert = ($.Params['Repeat Alert'] === 'true');

	//-----------------------------------------------------------------------------
	// Game_Event
	//

	var _Game_Event_initialize = Game_Event.prototype.initialize;

	Game_Event.prototype.initialize = function(mapId, eventId) {
		_Game_Event_initialize.call(this, mapId, eventId);
		this._sendBalloonAlert = false;
	}

	var _Game_Event_setupPage = Game_Event.prototype.setupPage;

	Game_Event.prototype.setupPage = function() {
		_Game_Event_setupPage.call(this);
		if (!this._erased && this.page()) {
			var range = 0;
			var insert = false;
			var id = 0;

			for (var i = 0; i < this.page().list.length; i++) {
				if (this.page().list[i].code == "108" || this.page().list[i].code == "408") {
					if (/<AlertBallon=/.test(this.page().list[i].parameters[0])) {
						id = parseInt(this.page().list[i].parameters[0].match(/<AlertBallon=(.+)>/)[1]);
						insert = true;
					}

					if (/<AlertRange=/.test(this.page().list[i].parameters[0]))
						range = parseInt(this.page().list[i].parameters[0].match(/<AlertRange=(\d+)>/)[1]);

					if (/<RepeatAlert=/.test(this.page().list[i].parameters[0]))
						this._repeatAlert = (this.page().list[i].parameters[0].match(/<RepeatAlert=(.+)>/)[1] === 'true');
				}
			}

			if (insert && !this._alertBalloon) {
				this._alertBalloon = id;
				$.alertsCharacters.push(this);
			} else if (!insert && this._alertBalloon) $.alertsCharacters.slice($.alertsCharacters.indexOf(this), 1)
			if (range === 0) this._alertRange = $.defaultRange;
			if (!this._repeatAlert) this._repeatAlert = $.repeatAlert;
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Player
	//

	var _Game_Player_update = Game_Player.prototype.update;

	Game_Player.prototype.update = function(sceneActive) {
		_Game_Player_update.call(this, sceneActive);
		$.alertsCharacters.forEach(function(c) {
			var distance = Math.sqrt(Math.pow(this._x - c._x, 2) + Math.pow(this._y - c._y, 2));
			if (distance <= c._alertRange && !c._sendBalloonAlert) {
				c.requestBalloon(c._alertBalloon);
				c._sendBalloonAlert = true;
			} else if (distance > c._alertRange && c._sendBalloonAlert) {
				if (c._repeatAlert) c._sendBalloonAlert = false;
			}
		}, this);
	}
})(TTK.EventBaloonAlert);