var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.send = function(req, res, next){ 
    if(req.method == "POST"){
        var SENDGRID = {
            USER: "liveinsights", 
            KEY:  "l1ve1nsights", 
            TO:   "support@liveinsights.co", 
            FROM: "noreply@liveinsights.co" 
        };
        sendgrid.send({
            to      : SENDGRID.TO,
            from    : SENDGRID.FROM,
            subject : 'Feedback',
            text    : JSON.stringify(req.body)
        },
        function(err, json) {
            if (err) { return console.error(err); }
            console.log(json);
        });       
    }else{
        console.log("routes/index:", 'feedback');
        //res.render('feedback', { title: 'Feedback', app_id: key.APP_ID, js_key: key.JS_KEY });
    }
};