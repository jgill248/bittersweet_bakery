document.addEventListener('DOMContentLoaded', function() {
    fetchFeaturedPastryData();

    function fetchFeaturedPastryData() {
        // Replace with your Google Sheets API endpoint
        const url = 'https://script.google.com/macros/s/AKfycbw0tz8nujnt4MV6rUG5X1gNKdxwapw6szIlsHYpI63p16RaFDiju1Hy9b_shAt8BhQ/exec';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Find the object with key 'featured-pastry'
                const featuredPastry = data.find(item => item.key === 'featured-pastry');
                if (featuredPastry) {
                    updateFeaturedPastry(featuredPastry);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function updateFeaturedPastry(pastry) {
        // Update these selectors based on your actual HTML structure
        document.getElementById('pastry-image').src = pastry.image_url ? `images/baked-goods/${pastry.image_url}` : 'default-image.jpg';
        document.getElementById('pastry-name').textContent = pastry.name || 'Default Pastry Name';
        document.getElementById('pastry-description').textContent = pastry.description || 'Default description...';
    }
});
