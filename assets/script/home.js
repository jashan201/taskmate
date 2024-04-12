const suggestions = document.querySelector('.suggestions');

// Function to create a user card
function createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';

    const profileImage = document.createElement('img');
    profileImage.src = user.picture.medium; 
    profileImage.alt = `${user.name.first} ${user.name.last}`;
    profileImage.className = 'profile-pic';

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = `${user.name.first} ${user.name.last}`;

    const userCity = document.createElement('div');
    userCity.className = 'user-city';
    userCity.textContent = user.location.city;

    const userOccupation = document.createElement('div');
    userOccupation.className = 'user-occupation';
    userOccupation.textContent = user.occupation; 

    const addFriendIcon = document.createElement('i');
    addFriendIcon.className = 'fas fa-user-plus add-friend';
    addFriendIcon.title = 'Add Friend';

    userCard.appendChild(profileImage);
    userCard.appendChild(userName);
    userCard.appendChild(userCity); 
    userCard.appendChild(userOccupation);
    userCard.appendChild(addFriendIcon); 

    return userCard;
}


fetch('https://randomuser.me/api/?results=16') 
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
           
            const userCard = createUserCard(user);
            suggestions.appendChild(userCard);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });