    <?php

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\{Route, Mail};

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

    Route::post('/contact', function(Request $request){
        // return response() -> json($request);
        $email = 'ibrahima3.com3@gmail.com';

        Mail::send('mails.contact', [
            'name'   => $request-> name,
            'email'  => $request-> email,
            'number' => $request-> phone,
            'content' => $request-> message,
            'subject' => $request -> subject,
            'service' => $request -> service,
            
        ], function ($message) use ($email, $request) {
            $message->to($email)->subject($request->subject);
        });

        return response() -> json(['message' => 'Email envoyé avec success!']);
    });
