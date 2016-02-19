(function(){
    
    var $contactForm = $('#contact-me-form');
    var $alertMessage = $('#contact-me-form-alert');
    var $alertText = $alertMessage.find('p');
    
    var sendingMessage = 'Sending message...';
    var successMessage = 'Your message was successfully sent!';
    var errorMessage = 'Oops! There was an error in delivering your message. Try again some other time.';
    
    var email = 'wii'+'Genocide'+'@'+'gmail'+'.com';
    var url = '//formspree.io/' + email;
    
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: url,
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: showSendingMessage,
            success: showSuccessMessage,
            error: showErrorMessage
        });
    });
    
    function showSendingMessage() {
        $alertMessage.removeClass('display-none', 1000, 'easeIn');
        $alertMessage.addClass('uk-alert', 1000, 'easeIn');
        $alertText.html(sendingMessage);
    }
    
    function showSuccessMessage() {
        $alertMessage.addClass('uk-alert-success', 1000, 'easeIn');
        $alertText.html(successMessage);
    }
    
    function showErrorMessage() {
        $alertMessage.removeClass('uk-alert-success', 1000, 'easeIn');
        $alertMessage.addClass('uk-alert-danger', 1000, 'easeIn');

        $alertText.html(errorMessage);
    }
})();
