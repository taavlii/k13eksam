<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>SICK ASCII</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
  
  
      <link rel="stylesheet" href="style.css">

  
</head>

<body>

  <header class="header sticky sticky--top js-header">

  <div class="grid">

    <nav class="navigation">
      <ul class="navigation__list navigation__list--inline">
        <li class="navigation__item"><a href="index.html">Home</a></li>
        <li class="navigation__item"><a href="gallery.php" class="is-active">Gallery</a></li>
        <li class="navigation__item"><a href="about.html">About</a></li>
      </ul>
    </nav>

  </div>

</header>





<?php
$dirname = "pics/";
$images = glob($dirname."*.*");

foreach($images as $image) {
    echo '<a href="ascii.php?img=' . $image . '"><img src="'.$image.'" /><br />';
}
?>

</body>
</html>
