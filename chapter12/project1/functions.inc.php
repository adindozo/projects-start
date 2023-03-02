<?php
 function generateLink($url, $label,$class=''){ 
    echo "<a href=\"$url\" class=\"$class\">$label</a>"; 
}

function  outputPostRow($post){ 
?>
  <div class="row">
  <div class="col-md-4"> 
     <a href="post.php?id=<?= $post['postId'] ?>" class=""><img src="images/<?= $post['thumb'] ?>" alt="<?= $post['title'] ?>" class="img-responsive"/></a>
  </div>
  <div class="col-md-8"> 
     <h2><?= $post['title'] ?></h2>
     <div class="details">
       Posted by <a href="user.php?id=<?= $post['userId'] ?>"><?= $post['userName'] ?></a>
       <span class="pull-right"><?= $post['date'] ?></span>
       <p class="ratings"><?php echoStars($post['reviewsRating']) ?> <?= $post['reviewsNum'] ?> ReviewS</p>
     </div>
     <p class="excerpt">
     <?= $post['excerpt'] ?>
     </p>
     <p class="pull-right"><a href="post.php?id=<?= $post['postId'] ?>" class="btn btn-primary btn-sm">Read more</a></p>
  </div>
</div>
<hr/>
<?php 
}
?>
<?php 
function echoStars($n){
    if(0>$n || $n>5) return;
    for($i=0; $i<$n; $i++){
        echo '<img src="images/star-gold.svg" width="16" />';
    }
    $diff= 5 - $n;
    for($i=0; $i<$diff; $i++){
        echo '<img src="images/star-white.svg" width="16" />';
    }
    
}
?>

