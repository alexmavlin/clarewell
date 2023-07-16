<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Skydash Admin</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{ asset('template_src/vendors/feather/feather.css') }}">
    <link rel="stylesheet" href="{{ asset('/template_src/vendors/ti-icons/css/themify-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('/template_src/vendors/css/vendor.bundle.base.css') }}">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="{{ asset('/template_src/vendors/datatables.net-bs4/dataTables.bootstrap4.css') }}">
    <link rel="stylesheet" href="{{ asset('/template_src/vendors/ti-icons/css/themify-icons.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/template_src/js/select.dataTables.min.css') }}">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="{{ asset('/template_src/css/vertical-layout-light/style.css') }}">
    <!-- endinject -->
    <link rel="shortcut icon" href="{{ asset('/template_src/images/favicon.webp') }}" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('/css/app.css') }}" />
    <style> [v-cloak] { display: none; } </style>
</head>

<body>
    <div id="app">
        <main class="">
            <div id="app">
                @yield('content')
            </div>
        </main>
    </div>

    <!-- plugins:js -->
    <script src="{{ asset('template_src/vendors/js/vendor.bundle.base.js') }}"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="{{ asset('template_src/vendors/chart.js/Chart.min.js') }}"></script>
    <script src="{{ asset('template_src/vendors/datatables.net/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('template_src/vendors/datatables.net-bs4/dataTables.bootstrap4.js') }}"></script>
    <script src="{{ asset('template_src/js/dataTables.select.min.js') }}"></script>

    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="{{ asset('template_src/js/off-canvas.js') }}"></script>
    <script src="{{ asset('template_src/js/hoverable-collapse.js') }}"></script>
    <script src="{{ asset('template_src/js/template.js') }}"></script>
    <script src="{{ asset('template_src/js/settings.js') }}"></script>
    <script src="{{ asset('template_src/js/todolist.js') }}"></script>
    <!-- endinject -->
    <!-- Custom js for this page-->
    <script src="{{ asset('template_src/js/dashboard.js') }}"></script>
    <script src="{{ asset('template_src/js/Chart.roundedBarCharts.js') }}"></script>

    <!-- use the latest vue-select release -->
    <script src="https://unpkg.com/vue-select@3.0.0"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-select@latest/dist/vue-select.css">

    <!-- End custom js for this page-->
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>