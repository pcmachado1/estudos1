<?php
        session_start();
    switch ($_GET['page']) 
    {
        case '':
            
            include 'view/header.html';
            include 'view/login.html';
            include 'view/footer.html';
            
        break;
    
        case 'welcome':
           
            include 'view/header.html';
            include 'view/welcome.html';
            include 'view/footer.html';
            
        break;

        default:
            
        break;
    }
        
    
        
        
            
?>
