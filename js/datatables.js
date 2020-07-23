var columns = [];

function getDT() {
  $.ajax({
    url: "data2.txt",
    success: function (data) {
      data = JSON.parse(data);
      columnNames = Object.keys(data.data[0]);
      for (var i in columnNames) {
        columns.push({
          data: columnNames[i],
          title: columnNames[i],
        });
      }
      var table = $('#caesar').DataTable({
        data: data.data,
        columns: columns,
        initComplete: function () {
          //   var footer = $(this).append('<tfoot><tr></tr></tfoot>');
          //   this.api().columns().every(function () {
          //     var title = $(this.header()).html();
          // //     console.log(title);
          //     $(footer).append('<th><input type="text" placeholder="Search ' + title + '" /></th>');
          //   });

          $('#caesar thead tr').clone(true).appendTo('#caesar thead');
          $('#caesar thead tr:eq(1) th').each(function (i) {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');

            $('input', this).on('keyup change clear', function () {
              if (table.column(i).search() !== this.value) {
                table
                  .column(i)
                  .search(this.value)
                  .draw();
              }
            });
          });
        }
      });
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function () {

  getDT();
  // Setup - add a text input to each footer cell


});