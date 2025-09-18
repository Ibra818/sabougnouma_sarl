<?php

use Illuminate\Support\Facades\{Route, Request, Mail};

Route::get('/', function () {
    return view('mails.contact');
});



Route::post('/contact', function(Request $request){

    $serviceEmail= 'sabougnouma@gmail.com';

    Mail::send('mails.contact', [
        'name' => $request->name,
        'email' => $request->email,
        'number' => $request->number,
        'message' => $request->interest,
    ], function ($message) use ($email) {
        $message->to($email)->subject($request->interest ?? 'Nouveau message!');
    });

});