'use strict';

exports.commands = {
	bt: 'battletest',
	battletest: function (target, room, user) {
		target = this.splitTarget(target, true);
		let targetUser = this.targetUser;
		let targetUsername = this.targetUsername;
	
		if (!this.can('roomvoice')) return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) return this.errorReply('You cannot do this command while you are unable to talk!');
		if (!target) return this.parse("/help battletest")
		
		if (targetUsername = "undefined") {
			this.add("The battletest could not be started.")
			console.log("The battletest could not start in " + room.id + " because of the undefinied error.")
		} else {
			this.add(targetUsername + " has started a battle test on " + targetUser + ".");
			this.logModCommand(targetUsername + " has started a battletest.");
		}
	},
	battletesthelp: ["/battletest (/bt) [user]: Declares to the chat room that you are starting a battle test on a specific user."]
};
