function electionPass(devProject,pass){
    let text = "devlop soft industry"
    if (pass) {
        devProject(text)
    }
    else{
        console.log("fail");
        
    }
}

function devProject(plan){
    console.log("this is election pass dev plan", plan);
    
}

electionPass(devProject, false)