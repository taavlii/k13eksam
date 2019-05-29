<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Miks ma miljonimängu ei valinud?</title>
  <style>
            .special
            {
                font-family:    Courier, Helvetica, sans-serif;
                font-size:      3px;
                font-weight:    bold;  
                word-wrap:      normal;

            }
        </style>
</head>
<body>
  <div id="container" data-img="<?php echo htmlspecialchars($_GET['img']); ?>">
  </div>
  <div class="special" id="display">
  </div>
  <script src="ascii.js"></script>
  <script type="text/javascript">
    console.log(document.getElementById("container").dataset.img);
  </script>
  <div id="summary">
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <form action="gallery.php">
    <input class="input" type="submit" value="Back" />
</form>
</body>
</html>
