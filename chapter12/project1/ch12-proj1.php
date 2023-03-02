<?php 
require_once('functions.inc.php');
require_once('data.inc.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 7</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />

</head>

<body>
    <?php 
    require_once('header.inc.php');
    ?>


    <!-- Page Content -->
    <main class="container">
        <div class="row">
            <?php 
            require_once('aside.inc.php');
            ?>
            <div class="col-md-10">

                <div class="jumbotron" id="postJumbo">
                    <h1>Posts</h1>
                    <p>Read other travellers' posts ... or create your own.</p>
                    <p><a class="btn btn-warning btn-lg">Learn more &raquo;</a></p>
                </div>        
      
                 <!-- start post summaries -->
                 <div class="postlist">

                   <!-- replace each of these rows with a function call -->
                   <?php 
                   foreach ($posts as $post) {
                    outputPostRow($post);
                  }
                   ?>

              
                     
                     
                 </div>   <!-- end post list -->         
                            
            </div>  <!-- end col-md-10 -->
        </div>   <!-- end row -->
    </main>
    
</body>

</html>