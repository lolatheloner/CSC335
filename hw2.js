$(function() {
    $(':button').click(function() {
        $('body').append('<table></table>');
        $('table').append('<tr></tr>');
        $('tr').append('<th>Station name</th>');
        $('tr').append('<th>Address</th>');
        $('tr').append('<th>Latitude</th>');
        $('tr').append('<th>Longitude</th>');
        
        $.get('GSP-Fire-Station.sv', function(data) {
            var stations = Papa.parse(data);
            var idx = [2, 3, 1, 0];
            for (var row = 0; row < stations.length; row++) {
                $('table').append('<tr></tr>');
                for (var col = 0; col < idx.length; col++) {
                    $('tr:last').append('<td></td');
                    $('td:last').text(stations[row][2]);
                }
            }
        });
        $('button').attr('disabled', 'yes');
     });
});