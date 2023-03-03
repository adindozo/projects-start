<header class="header">  
  <div class="header__wrapper">
    <h1 class="header__heading">Art Store</h1>
    <nav class="navigation">
      <ul class="navigation__list">
        <?php

        /* write loop to generate list items as follows: 
            <li class='navigation__list-item'><a href='index.php'>Home</a></li> */
            foreach ($links as $link) {
            $url = $link['url'];
            $label = $link['label'];
            echo "<li class='navigation__list-item'><a href='$url'>$label</a></li>";

            }
        ?>
      </ul>
    </nav>  
  </div>
</header> 