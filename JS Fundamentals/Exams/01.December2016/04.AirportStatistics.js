/**
 * Created by Neli on 8.6.2017 г..
 */
function solve(input) {
    let landedPlanes = new Set();
    let airport = new Map();

    for (let lineArgs of input) {
        let line = lineArgs.split(" ");
        let planeId = line[0];
        let city = line[1];
        let passengers = Number(line[2]);
        let action = line[3];

        if(action == 'depart'){
            if(landedPlanes.has(planeId)){
                landedPlanes.delete(planeId);
            }else{
                continue;
            }
        }

        if(action == 'land'){
            if(landedPlanes.has(planeId)){
                continue;
            }else{
                landedPlanes.add(planeId);
            }
        }

        if(!airport.has(city)){
            airport.set(
                city,
                    {
                        arrivals: 0,
                        departures:0,
                        planes:[]
                    });
        }

        if(!airport.get(city).planes.includes(planeId)){
            airport.get(city).planes.push(planeId);
        }

        if(action == 'land'){
            airport.get(city).arrivals += passengers;
        }else{
            airport.get(city).departures += passengers;
        }
    }


    console.log("Planes left:");
    [...landedPlanes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    [...airport].sort((t1, t2) => {
        if (t1[1].arrivals < t2[1].arrivals) return 1;
        if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
        //console.log(`${town[0]} ${town[1].arrivals} ${town[1].departures}`);
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log("Planes:");
        town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }
}

solve(["Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"]);

solve( ["Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"]);