var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Grief',
		url : 'http://google.com'
	},
	{
		title: 'Meteor',
		author: 'Brad Pitt',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Angenlina Jolie',
		url: 'http://facebook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});