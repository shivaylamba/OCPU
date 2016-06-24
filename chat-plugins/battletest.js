exports.commands = {
	bt: 'battletest'
	battletest: function (target, room, user) {
		target = this.splitTarget(target, true);
		let targetUser = this.targetUser;
		let name = this.targetName
	
		if (!this.can('roomvoice')) return this.errorReply('You do not have access to this command.');
		if (!this.canTalk()) return this.errorReply('You cannot do this command while you are unable to talk!');
		
		this.add(name + " has started a battle test on " + targetUser + ".");
	}
}
