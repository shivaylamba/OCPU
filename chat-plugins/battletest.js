'use strict';

exports.commands = {
	bt: 'battletest',
	battletest: function (target, room, user) {
		target = this.splitTarget(target, true);
		let targetUser = this.targetUser;
		let name = this.targetUsername;
		let userid = toId(name);
		
		if (!this.can('roomvoice')) return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) return this.errorReply('You cannot do this command while you are unable to talk!');
		
		this.add(user.name + " has started a battle test on " + name + ".");
		this.logModCommand(user.name + " has started a battletest.");
	},
	battletesthelp: ["/battletest (/bt) [user]: Declares to the chat room that you are starting a battle test."]
};
