<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #blockpage{
        width: 80%;
        height: 100%;
        background-color: #588855ff;
        border-radius: 10px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0 30px 0;
        font-family: sans-serif;
    }
    h2{
        color: white;
        font-size: 1em;
    }
    .contenu{
        width: 60%;
        color: white;
        border-radius: 15px;
        border: 2px solid white;
    }
</style>
<body>
    <div id="blockpage">
        <h2>Message de la part de :</h2>
        <h4>{{ $name }}</h4>
        <h4> Numero: {{ $number }}</h4>
        <h4> Email: {{ $email }}</h4>
        <div class="contenu">
            <p> Message: {{ $content }}</p>
        </div>
 
    </div>
</body>
</html>