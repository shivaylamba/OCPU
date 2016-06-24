'use strict';

exports.commands = {
	bt: 'battletest',
	battletest: function (target, room, user) {
		lst targetUsername = this.targetUsername;
		
		if (!this.can('roomvoice')) return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) return this.errorReply('You cannot do this command while you are unable to talk!');
		
			this.add(targetUsername + " has started a battle test.");
			this.logModCommand(targetUsername + " has started a battletest.");
	},
	battletesthelp: ["/battletest (/bt) [user]: Declares to the chat room that you are starting a battle test."]
};
