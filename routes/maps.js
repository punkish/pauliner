var express = require('express');
var app = express();
var router = express.Router();

/* GET maps page. */
router.get('/', function(req, res, next) {
    res.render(
        'main', 
        {
            production : (app.get('env') === 'production' ? true : false),
            partials : {content : 'partials/maps'}
        }
    );
});

module.exports = router;
