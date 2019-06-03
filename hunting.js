$(document).ready(function() {
    $('button').click(function(){
        var container = document.getElementById('container');
        var elem = document.createElement('p');
        $.get("https://api.github.com/users/davegee12",
        function(data) {
            console.log(data.name);
            elem.innerHTML = `${data.name}`;
            container.appendChild(elem);
        });
    });
});