<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Portfolio') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div class="MainMenu Top"> 

<div class=""> 
    <a  href="{{ url('/home') }}">
        Home
    </a>
</div>


<div class="">
    <a href="{{ url('/home') }}">
    Home
    </a>
</div>
<div class=""> 
    <a  href="{{ url('/home') }}">
        Home
    </a>
</div>


<div class="">
    <a href="{{ url('/home') }}">
    Home
    </a>
</div>
<div class=""> 
    <a  href="{{ url('/home') }}">
        Home
    </a>
</div>



</div>
<div class="MainMenu"> 

    <div class="Bubble"> 
        <a  href="{{ url('/home') }}">
            Home
        </a>
    </div>
    
    
    <div class="Bubble right">
        <a href="{{ url('/home') }}">
            Home
        </a>
    </div>
</div>
        <main>
            @yield('content')
        </main>
   
</body>
</html>
