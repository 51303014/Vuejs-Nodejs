var Busboy = require('busboy');
var Q = require('q');


module.exports = {
  readFileStream : function(req) {
    let busboy = new Busboy({ headers: req.headers });
    let bufer = '', data = [];
    let defer = Q.defer();

    return Q.fcall(() => {
      busboy.on('file', function(fieldname, file) {
        file.setEncoding('utf-8');
        file.on('data', function(data) {
          bufer += data;
        });
        file.on('end', function() {
        });
      });
      busboy.on('field', function(fieldname, val) {
        data.push(val);
      });
      busboy.on('finish', function() {
        data.push(bufer);
        defer.resolve(data);
      });
      req.pipe(busboy);

      return defer.promise;
    })
      .then((res) => {
        return res;
      })
  }
};

