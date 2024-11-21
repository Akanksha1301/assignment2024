export function calculateDistance(loc1, loc2) {
    const toRad = (value) => value * Math.PI / 180;
    const R = 6371; // Radius of Earth in km

    const dLat = toRad(loc2.lat - loc1.lat);
    const dLng = toRad(loc2.lng - loc1.lng);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(loc1.lat)) * Math.cos(toRad(loc2.lat)) * Math.sin(dLng / 2) ** 2;
    let distance=R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    console.log(distance)
    return distance;
}