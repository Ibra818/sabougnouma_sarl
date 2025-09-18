<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Configuration CORS (Cross-Origin Resource Sharing)
    |--------------------------------------------------------------------------
    |
    | Ici, tu peux définir les chemins, méthodes, origines, etc. qui sont
    | autorisés à accéder à ton API depuis un autre domaine.
    |
    */

    'paths' => ['api/*', 'contact', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],  // ou ['GET','POST',...]
    'allowed_origins' => ['*'],  // ou ['*'] si dev
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
