{{"Variable Data"}}
<br>

{{-- Take a variable and store the array data inside it. --}}
@php
    $var = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
@endphp

{{-- Show that data in a list with the help of loop. --}}
<ul>
    @foreach ($var as $array)
    {{-- Change the color of the list data as per even or odd. --}}
        @if ($loop -> even)
            <li style="color: blue;">{{ $array }}</li>
        @elseif ($loop -> odd)
            <li style="color: red;">{{ $array }}</li>
        @endif
    @endforeach
</ul>

{{-- Print the list in console --}}
<script>
    console.log(@json($var));
</script>