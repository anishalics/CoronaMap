function updateMap(){
    fetch("data.json")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;
            
            //Mark on the map
            const marker = new mapboxgl.Marker({
                draggable: false,
                color: `rgba(255, 0, 0, ${cases/1000})`,
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
    // console.log("Updating data...");
}
// setInterval(updateMap, 2000);
updateMap();
