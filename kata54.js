/*let quote = function (fighter) {
    const a = ['conor mcgregor', 'Conor McGregor']
    return a.includes(fighter.toLowerCase()) ? "I'd like to take this chance to apologize. To absolutely NOBODY!"  "I am not impressed by your performance."

};
console.log(quote('george saint pierre'))*/

//OK VERSION
function quote(fighter) {
    return fighter.toLowerCase() === 'conor mcgregor'
        ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
        : "I am not impressed by your performance.";
}
console.log(quote('george saint pierre'));