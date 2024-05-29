<!-- your-view.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Просмотр лота</title>
    <link rel="stylesheet" href="../css/CardProductView.css">
    <link rel="stylesheet" href="<?php echo e(asset("../css/CardProductView.css")); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

</head>



<body>

<h1 class="h1">Подробнее о лоте</h1>









<div class="card" style="width: 18rem;">
    <img src="<?php echo e($image); ?>" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title"><?php echo e($name); ?></h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><?php echo e($engine); ?></li>
        <li class="list-group-item"><?php echo e($vin); ?></li>
        <li class="list-group-item"><?php echo e($price); ?></li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>



</body>
</html>
<?php /**PATH /Applications/MAMP/htdocs/auction/resources/views/CardProductView.blade.php ENDPATH**/ ?>