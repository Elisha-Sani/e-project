window.addEventListener('DOMContentLoaded', async () => {
    // Retrieve the house from localStorage

    const houseRef = collection(database, 'houses')
    ref.on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            const house = childSnapshot.val();

            document.getElementById('houseImage').src = house.image;
            document.getElementById('houseTitle').textContent = house.title;
            document.getElementById('houseDescription').textContent = house.description;
            document.getElementById('housePrice').textContent = house.price;
        });
    });
});
    // Retrieve the house from localStorage