<?php 
    require_once('data.inc.php');
   require_once('functions.inc.php');

?>
<aside class="col-md-2">
    <div class="panel panel-info">
        <div class="panel-heading">Continents</div>
        <ul class="list-group">
            <?php 
            foreach ($continents as $value => $key) {
                echo '<li class="list-group-item">' . '<a href="#">' . $key . '</a></li>';

            }
            ?>
          
        </ul>
    </div>
    <!-- end continents panel -->

    <div class="panel panel-info">
        <div class="panel-heading">Popular</div>
        <ul class="list-group">
            <?php 
                //   $continents = [ "Africa", "Asia","Europe","North America", "South America"  ];

                foreach ($countries as $iso => $name) {
                    echo '<li class="list-group-item">';
                    generateLink("photos.php?iso=" . $iso, $name);
                    echo '</li>';

                }
            ?>
           
        </ul>
    </div>
    <!-- end continents panel -->
</aside>