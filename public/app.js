$( "#guest").click(function() {
    $(".container").remove();
    $('body').append('<div id="grid"></div>');
    var content = [];		
		content[0] = '<div class="element nonmetal"><p class="number">1</p><h3 class="symbol">H</h3><h2 class="name">Hydrogen</h2><p class="weight">1.00794</p></div>';
        content[1] = '<div class="element nonmetal"><p class="number">1</p><h3 class="symbol">H</h3><h2 class="name">Hydrogen</h2><p class="weight">1.00794</p></div>';
        content[2] = '<div class="element nonmetal"><p class="number">1</p><h3 class="symbol">H</h3><h2 class="name">Hydrogen</h2><p class="weight">1.00794</p></div>';
        content[3] = '<div class="element nonmetal"><p class="number">1</p><h3 class="symbol">H</h3><h2 class="name">Hydrogen</h2><p class="weight">1.00794</p></div>';
        $(function(){
            $('#grid').jresponsive({
                min_size: 50,
                max_size: 200,
                hspace: 50,
                vspace: 10,
                height:	200,
                class_name: 'element',
                content_array: content,
                transfromation: 'animate'
            });
            console.log($('#grid').width());
        });

     // $.get(data ely 3awzha,)


  });