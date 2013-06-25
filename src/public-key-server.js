var getPublicKeyServer = function(){
  var base_url = 'http://pgp.mit.edu:11371'; 

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
    },
    
    formatEmailResults:function(results){
      var $c = $(document.createElement("div"));
      $c.html(results);
      $c.find("a").each(function(i,v){
        $(v).attr('href',base_url + $(v).attr('href'));
      });

      console.log(results, $c.html());

      return ($c.html());

    }

  });

}


