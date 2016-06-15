(function(){
    
    var baseUrl = 'https://graph.facebook.com/v2.6/';
    var userId = '100005913222548';
    var accessToken = 'EAACEdEose0cBADUFjLyC1slvZAybNk9lpCKEnqkDbU4SBO5BHbcBmSJpc2GwYVyRgFalQhW1jSi8sekWSm4VaUnVOcTxeL3JpFVGk6OFu7g4i1ojgiWa1sL6VZC9WgKg35BnpioMFIlqs4ba0vjX9kpuvjdWJ9UXpslTZBTOgZDZD';
    
    function getProfilePic() {
        console.debug('url: ', formUrl());
    }
    
    function formUrl() {
        var params = {
            access_token: accessToken,
            debug: 'all',
            format: 'json',
            method: 'get',
            pretty: 0,
            redirect: false,
            suppress_http_code: 1,
            width: 9999
        };
        
        var paramsAsString = jQuery.param(params);
        var fullUrl = baseUrl + '/picture?' + paramsAsString;
        
        return fullUrl;
    }
    
})();
