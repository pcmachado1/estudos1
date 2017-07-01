<?php
    function __autoload($classe){
        include 'model/'.$classe.'.php';
    }
    
   
    switch ($_GET['page']) 
    {
        case '':
            
            include 'view/header.html';
            include 'view/login.html';
            include 'view/footer.html';
        break;

        default:
            
        break;
    }
        
    
        
        
            
?>
