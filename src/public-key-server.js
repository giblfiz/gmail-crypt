var getPublicKeyServer = function(){
  return({
    'lookup_url':'http://pgp.mit.edu:11371/pks/lookup',
    searchByEmail:function(emails, callback){
      console.log("in searchByEmail with ", emails);
      $.get(this.lookup_url,{"search":emails}, function(data){
              console.log("in searchByEmail AJAX got ", data);
        callback(data);
      });
    }
  });

}
