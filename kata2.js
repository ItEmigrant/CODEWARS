function functionfriend() {
    let input = ["rrrr", "fffffff", "gggg","aaaaa"];
    let friend = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 4) {
            friend = input[i];
        }
        console.log("My friens = " + friend);
    }
}

functionfriend();