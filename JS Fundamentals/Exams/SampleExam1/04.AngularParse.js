/**
 * Created by Neli on 16.6.2017 г..
 */
function solve(input) {
    let apps = {};
    let nonexistent = new Map();
    
    for (let line of input) {
        let appPattern = /&app='([^']+)'$/;
        let ePattern = /\$(controller|model|view)='([^']+)'(?:&app='([^']+)')?$/;
        
        let createAppMatch = appPattern.exec(line);
        let eMatch = ePattern.exec(line);
        
        if(createAppMatch){
            let appName = createAppMatch[1];
            if(!apps[appName]){
                apps[appName] = {
                    controllers: [],
                    models: [],
                    views: []
                }
            }         
            
        }
        
        if(eMatch){
            let app = eMatch[3];
            let type = eMatch[1]+ 's';
            let typeName = eMatch[2];
            if(apps[app]){
                switch(type){
                    case 'controllers': apps[app].controllers.push(typeName); break;
                    case 'models': apps[app].models.push(typeName); break;
                    case 'views': apps[app].views.push(typeName); break;
                }
            }else{
                if(nonexistent.has(app)){
                    nonexistent.get(app)[type].push(typeName);
                }else{
                    nonexistent.set(app, {controllers: [], models: [], views: []});                                 
                }
            }
        }
        
    }

    Object.keys(apps).forEach(function (key) {
        if(nonexistent.has(key)){
            apps[key].controllers.concat(nonexistent.get(key)['controllers']);
            apps[key].models.concat(nonexistent.get(key)['models']);
            apps[key].views.concat(nonexistent.get(key)['views']);
        }
    });

   let result = {};

    let sorted = Object.keys(apps).sort(function (a,b) {
        if(apps[b].controllers.length == apps[a].controllers.length){
            return apps[a].models.length - apps[b].models.length;
        }
        return apps[b].controllers.length - apps[a].controllers.length;
    });

    let sortedRes = {};

    for (let app of sorted) {

        sortedRes[app] = apps[app];
        sortedRes[app].controllers = apps[app].controllers.sort((a, b) => a.localeCompare(b));
        sortedRes[app].models = apps[app].models.sort((a, b) => a.localeCompare(b));
        sortedRes[app].views = apps[app].views.sort((a, b) => a.localeCompare(b));
    }

   console.log(JSON.stringify(sortedRes));
}

//solve(["$app='MyApp'","$controller='My Controller'&app='MyApp'","$model='My Model'&app='MyApp'","$view='My View'&app='MyApp'"]);
solve(["ko", "$controller='PHPController'&app='Language Parser'", "$controller='JavaController'&app='Language Parser'", "$controller='C#Controller'&app='Language Parser'", "$controller='C++Controller'&app='Language Parser'", "$app='Garbage Collector'", "$controller='GarbageController'&app='Garbage Collector'", "$controller='SpamController'&app='Garbage Collector'", "$app='Language Parser'"]);