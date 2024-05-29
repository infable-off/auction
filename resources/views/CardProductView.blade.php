<!-- your-view.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <title>Просмотр лота</title>
    <link rel="stylesheet" href="../css/CardProductView.css">
    <link rel="stylesheet" href="{{ asset("../css/CardProductView.css") }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

</head>


{{--<link rel="stylesheet" href="../css/CardProductView.css">--}}
<body>

<h1 class="h1">Подробнее о лоте</h1>

{{--<p>{{$id}}</p>--}}
{{--<p>{{$name}}</p>--}}
{{--<p>{{$model}}</p>--}}
{{--<p>{{$engine}}</p>--}}
{{--<p>{{$vin}}</p>--}}
{{--<p>{{$price}}</p>--}}
{{--<img src="{{$image}}" alt="Нет">--}}

<div class="card" style="width: 18rem;">
    <img src="{{$image}}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{$name}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">{{$engine}}</li>
        <li class="list-group-item">{{$vin}}</li>
        <li class="list-group-item">{{$price}}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>



</body>
</html>
