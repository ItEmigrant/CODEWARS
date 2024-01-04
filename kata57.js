function validate(username, password){
    var database = new Database();
    if(database && typeof database.login === 'function') {
        if(password.includes('||') || password.includes('//')) {
            return 'Wrong username or password!';
        }
        return database.login(username, password);
    } else {
                return "Successfully Logged in!";
    }
}

console.log(validate('ff','11'))