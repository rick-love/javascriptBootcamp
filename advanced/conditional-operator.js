const userAge = 27;
const message = userAge > 18 ? 'You can vote' : 'You cant vote';
console.log(message);

const myAge = 20;
const showPage = () => 'Showing Page';
const showErrorPage = () => 'Showing Error Page';

const vote = myAge > 21 ? showPage() : showErrorPage();
console.log(vote)

const team = ['Rick', 'John','Wayne', 'Paul', 'Colin']
const canPlay = team.length <= 4 ? 'Play' : 'Team size is to large'
console.log(canPlay)