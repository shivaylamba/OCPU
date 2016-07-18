'use strict';

exports.commands = {
	bt: 'battletest',
	battletest: function (target, room, user) {
		if (!this.can('roomvoice', null, room)) return false;
		if (!this.canTalk()) return this.errorReply('You cannot do this while unable to talk.');
		if (!target) return this.parse('/help battletest');
		let targetUser = Users(target);
		if (!targetUser) return this.errorReply("User '" + targetUser + "' is offline. (Check your spelling?)");
		if (!room.users[targetUser.userid]) {
			return this.errorReply(targetUser + " is not in this room. Please make sure they join.");
		}
		this.add(user.name + " has started a battle test on " + targetUser.name + ".");
		targetUser.popup(user.name + " started a battle test for you. Good luck.");
		return this.privateModCommand("(" + user.name + " has started a battletest for " + targetUser.name + ".)");
	},
	battletesthelp: ["/battletest OR /bt [user]: Declares to the chat room that you are starting a battle test for a person."],
	
	btc: 'battletestclear',
	battletestclear: function (target, room, user) {
		if (!this.can('roomvoice', null, room)) return false;
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
		if (!target) return this.parse('/help battletestclear');
		let targetUser = Users(target);
		if (!targetUser) return this.errorReply("User '" + targetUser + "' not found. (Check your spelling?)");
		if (!room.users[targetUser.userid]) {
			return this.errorReply(targetUser + " is not in this room. Please make sure they join.");
		}
		this.add(targetUser.name + " has passed the battle test. (Approved by " + user.name + ").");
		targetUser.popup("You have passed the battle test in " + room.title + "; congratulations!");
		return this.privateModCommand(
			"(" + targetUser.name + " has passed their battle test. (Approved by " + user.name + "))."
		);
	},
	battletestclearhelp: ["/battletestclear OR /btc [user]: Declares that a person has completed a battle test."],
	
	btf: "battletestfail",
	battletestfail: function (target, room, user) {
		if (!this.can('roomvoice', null, room)) return false;
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
		if (!target) return this.parse('/help battletestfail');
		let targetUser = Users(target);
		if (!targetUser) return this.errorReply("User '" + targetUser + "' not found. (Check your spelling?)");
		if (!room.users[targetUser.userid]) {
			return this.errorReply(targetUser + " is not in this room. Please make sure they join.");
		}
		this.add(targetUser.name + " has failed the battle test. (Tested by " + user.name + ").");
		targetUser.popup("You have failed the battle test in " + room.title + ".");
		return this.privateModCommand(
			"(" + targetUser.name + " has failed their battle test. (Tested by " + user.name + "))."
		);
	},
	battletestfailhelp: ["/battletestfail OR /btf [user]: Declares that a person has failed a battle test."],

	// Checks all command versions. Not very helpful.
	btv: 'battletestversion',
	battletestversion: function (target, room, user) {
		this.popupReply("Plugin version: Alpha 0.1.5a");
	},
	
	bte4: 'battletestelite4',
	battletestelite4: function (target, room, user) {
		if (!this.can('declare', null, room)) return false; // Room Owners only can declare this
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
		if (!target) return this.parse('/help battletestelite4');
		let targetUser = Users(target);
		if (!targetUser) return this.errorReply("User '" + targetUser + "' not found. (Check your spelling?)");
		if (!room.users[targetUser.userid]) {
			return this.errorReply(targetUser + " is not in this room. Please make sure they join.");
		}
		this.add(targetUser.name + " passed their battle test and gained E4 status! (Approved by " + user.name + ".)");
		targetUser.popup("You passed your battle test and gained E4 status. Congratulations!");
		return this.privateModCommand(
			"(" + targetUser.name + " passed their battle test and gained E4 status. (Approved by " + user.name + "))."
		);
	},
	battletestelite4help: ["/battletestelite4 OR /bte4 [user]: Declares that a user passed their battle test and gained E4 status."],
	
	btgl: 'battletestgymleader',
	battletestgymleader: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
		if (!target) return this.parse('/help battletestgymleader');
		let targetUser = Users(target);
		if (!targetUser) return this.errorReply("User '" + targetUser + "' not found. (Check your spelling?)");
		if (!room.users[targetUser.userid]) {
			return this.errorReply(targetUser + " is not in this room. Please make sure they join.");
		}
		this.add(targetUser.name + " passed their battle test and gained GL status! (Approved by " + user.name + ").")
		targetUser.popup("You passed your battle test and gained GL status. Congratulations!");
		return this.privateModCommand(
			"(" + targetUser.name + " passed their battle test and gained GL status. (Approved by " + user.name + ")).";
		);
	},
	battletestgymleaderhelp: ["/battletestgymleader OR /btgl [user]: Declares that a user passed their battle test and gained GL status."],
	
	// Displays all battle test commands. Extremly helpful
	btcmds: 'battletestcommands', // changed name to not interfere with '/help battletest'
	battletestcommands: function (target, room, user) {
		this.sendReply("/battletest [user] OR /bt [user]: Says to the room that you are starting a battletest on [user]."); 
		this.sendReply("/battletestclear [user] OR /btc [user]: Says to the room that [user] has completed the battle test.");
		this.sendReply("/battletestfail [user] OR /btf [user]: Says to the rooom that [user] has failed the battle test.");
		this.sendReply("/battletestcommands OR /btcmds: What you are looking at now.");
		this.sendReply("/battletestversion OR /btv: Displays the battle test plugin version.");
		this.sendReply("/battletestelite4 [user] OR /bte4 [user]: Says to the room that [user] has gotten E4 status through the battle test.");
		this.sendReply("/battletestgymleader [user] OR /btgl [user]: Says to the room that [user] has gottel GL status through the battle test.");
	},
};
