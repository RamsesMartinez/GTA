
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var nombre = $(this).find('.nombre').val();
        var direccion = $(this).find('.direccion').val();
        var telefono = $(this).find('.telefono').val();
        var correo = $(this).find('.correo').val();
        
        if(nombre == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.nombre').focus();
            });
            return false;
        }
        if(direccion == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.direccion').focus();
            });
            return false;
        }
        if(telefono == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '160px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.telefono').focus();
            });
            return false;
        }
        if(correo == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '226px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.correo').focus();
            });
            return false;
        }
    });
    
    $('.page-container form .nombre, .page-container form .direccion, .page-container form .telefono, .page-container form .correo').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
