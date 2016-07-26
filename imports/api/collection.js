import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
// initialise a collection here. mongo collection name should be the file name.
// EXAMPLE: export const Collections = new Mongo.Collection('collections');

if (Meteor.isServer) {
  //declare all publish relating to the collection here
  //EXAMPLE:
  // Meteor.publish('tasks', function tasksPublication() {
  //  return Tasks.find({
  //     $or: [
  //       { private: { $ne: true } },
  //       { owner: this.userId },
  //     ],
  //   });
  // });
}
 
Meteor.methods({
  //declare all methods related to the collection here
  // EXAMPLE:
  // 'collections.insert'(text) {
  //   check(text, String);
 
  //   // Make sure the user is logged in before inserting a task
  //   if (! this.userId) {
  //     throw new Meteor.Error('not-authorized');
  //   }
 
  //   Collections.insert({
  //     text,
  //     createdAt: new Date(), // current time
  //     owner: Meteor.userId(),           // _id of logged in user
  //     username: Meteor.user().username,  // username of logged in user
  //   });
  // }
});