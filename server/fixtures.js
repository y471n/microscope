if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagrief.com/introducing-telescope'
	});
	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman ',
		url: 'http://google.com'
	});
	Posts.insert({
		title: 'Audi',
		author: 'Audius',
		url: 'http://stackoverflow.com'
	});
}