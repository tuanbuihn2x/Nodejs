function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data; // chúng ta cần 1 array
            q = rs.category;
            r = rs.foods;
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                for (var j = 0; j < q.length; j++ ){
                    var ct1 = "<div class=\"item\">\n" +
                        "            <h1 " + q[i].q[i].id + "</h1>\n" +
                        "            <h2>" + q[i].name + "</h2>\n" +
                        "            <img src=\"" + q[i].icon + "\"/>\n" +
                        "        </div>"; // ct chi la 1 string thoi
                    row.append(ct1); // row.html(row.html() +ct)
                    // row.prepend(ct) // row.html(ct+row.html());
                }
                for (var k = 0; k < r.length; k++) {
                    var ct2 = "<div class=\"item\">\n" +
                        "            <h1 " + r[i].id + "</h1>\n" +
                        "            <h2>" + r[i].name + "</h2>\n" +
                        "            <img src=\"" + r[i].image + "\"/>\n" +
                        "            <h2>" + r[i].description + "</h2>\n" +
                        "            <h1 " + r[i].price + "</h1>\n" +
                        "        </div>"; // ct chi la 1 string thoi
                    row.append(ct2); // row.html(row.html() +ct)
                }
            }
        }
    });
}