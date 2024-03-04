function fetchSloka() {
    const chapter = document.getElementById('chapter').value;
    const verse = document.getElementById('verse').value;
    const apiUrl = `https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('sloka').innerHTML = `<strong>Sanskrit Sloka:</strong> ${data.slok}`;
        document.getElementById('translation').innerHTML = `<strong>Translation by ${data.tej.author}:</strong> ${data.tej.ht}`;
    })
    .catch(error => {
        console.error('Error fetching sloka:', error);
        document.getElementById('sloka').textContent = 'Failed to fetch sloka. Please try again later.';
        document.getElementById('translation').textContent = '';
    });
}
