var getPublicKeyServer = function(){
  return({
    'lookup_url':'http://pgp.mit.edu:11371/pks/lookup',
    searchByEmail:function(emails, callback){
      console.log("in searchByEmail with ", emails);
      $.ajax({
        url:this.lookup_url,
        data:"search="+emails, 
        processData: false,
        success:function(data){
              console.log("in searchByEmail AJAX got ", data);
        callback(data);
        }
        
});
    }
  });

}
