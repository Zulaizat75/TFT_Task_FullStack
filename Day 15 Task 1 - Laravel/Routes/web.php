<?php

use Illuminate\Support\Facades\Route;

//Create 3 HTML pages and link with each other with routing
Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/client', function () {
    return view('client');
});

Route::get('/contact', function () {
    return view('contact');
});

//Store the data into parameters with all 3 pages
Route::get('/about/{id?}', function (string $id = null) {
    if($id) {
        return "<h1>post id: " . $id. "</h1>";
    }else{
        return "<h1>No id found</h1>";
    }
})->whereAlphaNumeric('id');

Route::get('/client/{id?}', function (string $id = null) {
    if($id) {
        return "<h1>post id: " . $id. "</h1>";
    }else{
        return "<h1>No id found</h1>";
    }
})->whereAlphaNumeric('id');

Route::get('/contact/{id?}', function (string $id = null) {
    if($id) {
        return "<h1>post id: " . $id. "</h1>";
    }else{
        return "<h1>No id found</h1>";
    }
})->whereAlphaNumeric('id');