<?php

/* Authentication routes */

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
/* // Authentication routes */

/* Routes for authorized users only */
    Route::group(['middleware' => 'jwt.auth'], function() {
        Route::group(['namespace' => 'Fruits', 'prefix' => 'fruits'], function(){
            Route::get('/test', 'FruitsController@test');
            Route::get('/usr', 'FruitsController@usr');
        });

        Route::group(['namespace' => 'Company', 'prefix' => 'company'], function() {
            Route::get('/getCompanyByOwner', 'CompanyController@getCompanyByOwner');
            Route::get('/getCompanyById/{company}', 'CompanyController@getCompanyData');
            Route::post('/storeNewCompany', 'CompanyController@storeNewCompany');
            Route::get('/edit/{company}', 'CompanyController@edit');
            Route::post('/update/{company}', 'CompanyController@update');
        });
        Route::group(['namespace' => 'Company', 'prefix' => 'clinic'], function() {
            Route::get('/index/{company}', 'ClinicController@index');
            Route::post('/create', 'ClinicController@store');
        });
        Route::group(['namespace' => 'Company', 'prefix' => 'employee'], function() {
            Route::get('/index', 'EmployeeController@get_employyes');
            Route::get('/clinicians/{company}', 'EmployeeController@get_clinicians');
            Route::get('/create', 'EmployeeController@create');
            Route::post('/store', 'EmployeeController@store');
        });
        Route::group(['namespace' => 'Company', 'prefix' => 'product'], function() {
            Route::get('/index', 'ProductController@index');
            Route::post('/store', 'ProductController@store');
            Route::get('/{id}', 'ProductController@show');
            Route::post('/{product}', 'ProductController@update');
            Route::delete('/{product}', 'ProductController@delete');
        });
        Route::group(['namespace' => 'Company', 'prefix' => 'patient'], function() {
            Route::get('/index', 'PatientCpntroller@index');
            Route::get('/getPatients/{company}', 'PatientCpntroller@getPatients');
            Route::post('/store', 'PatientCpntroller@store');
            Route::get('/{patient}', 'PatientCpntroller@show');
        });
        Route::group(['namespace' => 'Company', 'prefix' => 'appointment'], function() {
            Route::get('/index/{company}', 'AppointmentController@index');
            Route::post('/store', 'AppointmentController@store');
        });

        /* Routes for global functions */
        Route::group(['namespace' => 'CommonControllers', 'prefix' => 'commoncontrollers'], function() {

            /* Form Builder Routes */
            Route::group(['namespace' => 'FormBuilder', 'prefix' => 'formbuilder'], function() {
                Route::get('/index', 'IndexController');

                /* Consultation routes */
                Route::group(['namespace' => 'Consultation', 'prefix' => 'consultation'], function() {
                    Route::post('/store', 'StoreController');
                    Route::get('/{consultation}', 'EditController');
                });

                /* Section routes */
                Route::group(['namespace' => 'Section', 'prefix' => 'section'], function() {
                    Route::post('/store', 'StoreController');
                    Route::delete('/delete/{section}', 'DeleteController');
                });

                /* Record routes */
                Route::group(['namespace' => 'Records', 'prefix' => 'records'], function() {
                    Route::post('/store', 'StoreController');
                    Route::delete('/delete/{record}', 'DeleteController');
                });

                /* Fieldset routes */
                Route::group(['namespace' => 'Fieldsets', 'prefix' => 'fieldsets'], function() {
                    Route::post('/store', 'StoreController');
                    Route::patch('/edit/{fieldset}', 'EditController');
                    Route::delete('/delete/{fieldset}', 'DeleteController');
                });

                /* Field routes */
                Route::group(['namespace' => 'Fields', 'prefix' => 'fields'], function() {
                    Route::post('/store/{id}', 'StoreController');
                    Route::patch('/edit/{field}', 'EditController');
                    Route::delete('/delete/{field}', 'DeleteController');
                });

            });

        });
    });
});

Route::group(['namespace' => 'Users', 'prefix' => 'register'], function() {
    Route::post('/signup', 'RegisterController');
});

Route::group(['namespace' => 'ServiceRoutes'], function() {
    Route::get('/optimize', 'ServiceController@optimize');
    Route::get('/migrate', 'ServiceController@migrate');
    Route::get('/migrate-rollback', 'ServiceController@migrate_rollback');
});
