$(function () {
    var hash = window.location.hash.substr();

    var href = $('#nav li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        }
    });

    $('#nav li a').click(function(){
        var toLoad = $(this).attr('href')+'#content';//鑾峰彇褰撳墠瀵艰埅閾炬帴href+#content

        $('#content').hide('fast',loadContent);        //闅愯棌褰撳墠content涓殑鍐呭
        $('#load').remove();                           //绉婚櫎load鍏冪礌
        $('#wrapper').append('<span id="load">LOADING...</span>'); //閲嶆柊鍒涘缓load鍏冪礌杩涜鏄剧ず
        $('#load').fadeIn('normal');                   //娣″叆load鍏冪礌
        //鑾峰彇hash鍊�
        window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
        function loadContent() {
            $('#content').load(toLoad,'',showNewContent()) //鏄剧ず鏂板唴瀹�
        }
        function showNewContent() {
            $('#content').show('normal',hideLoader());     //闅愯棌鍔犺浇鍣�
        }
        function hideLoader() {
            $('#load').fadeOut('normal');                  //闅愯棌loading鐨勬樉绀�
        }
        return false;
    });
})
