document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([31.0461, 34.8516], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const cities = [
        { name: "אילת", lat: 29.5577, lng: 34.9519 },
        { name: "באר שבע", lat: 31.2520, lng: 34.7915 },
        { name: "תל אביב", lat: 32.0853, lng: 34.7818 },
        { name: "חיפה", lat: 32.7940, lng: 34.9896 },
        { name: "נתניה", lat: 32.3329, lng: 34.8599 },
        { name: "הרצליה", lat: 32.1663, lng: 34.8433 },
        { name: "רעננה", lat: 32.1848, lng: 34.8713 },
        { name: "פתח תקווה", lat: 32.0840, lng: 34.8878 },
        { name: "ירושלים", lat: 31.7683, lng: 35.2137 },
        { name: "מודיעין", lat: 31.8980, lng: 35.0106 },
        { name: "אשדוד", lat: 31.8014, lng: 34.6435 },
        { name: "אשקלון", lat: 31.6688, lng: 34.5743 },
        { name: "נהריה", lat: 33.0058, lng: 35.0938 },
        { name: "עכו", lat: 32.9275, lng: 35.0848 },
        { name: "טבריה", lat: 32.7959, lng: 35.5312 },
        { name: "נצרת", lat: 32.7019, lng: 35.3035 },
        { name: "כרמיאל", lat: 32.9171, lng: 35.2975 },
        { name: "קריית שמונה", lat: 33.2076, lng: 35.5721 },
        { name: "בית שמש", lat: 31.7460, lng: 34.9880 },
        { name: "דימונה", lat: 31.0709, lng: 35.0323 },
        { name: "ערד", lat: 31.2589, lng: 35.2134 }
    ];
    cities.forEach(city => {
        L.marker([city.lat, city.lng]).addTo(map)
            .bindPopup(`<b>${city.name}</b>`);
    });
});
