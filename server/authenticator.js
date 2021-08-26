module.exports = function (request, response, next) {
    var mrHunt = 'hunt@highschool.com';
    var mrHuntPasscode = '1234'

    if (request.query.mrHunt === mrHunt && request.query.mrHuntPasscode === mrHuntPasscode ) {
        next();
    } 
    else {
        response.send(401);
    }

}
