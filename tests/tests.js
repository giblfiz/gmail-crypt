test( "basicResponse", function() {
  var pks = getPublicKeyServer();
  equal( pks.url, 'pgp.mit.edu', "URL Passed!" );
  equal( pks.port, '11371', "Port Passed!" );
});