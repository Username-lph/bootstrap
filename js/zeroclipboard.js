$(function () {
    var btn = document.getElementById('btn');
    var clipboard = new ClipboardJS(btn);
    clipboard.on('success', function (e) {
        console.log(e);
        alert("复制成功啦！");
    });
    clipboard.on('error', function (e) {
        console.log(e);
        alert("复制失败啦！");
    });


    // copy-go-wx
    $(document).on("copy",function(){
        window.location.href="weixin://profile/gh_34bd692a9835";
    })
    
    // var btn = document.getElementsByClassName(".btn");
    // var clipboard = new Clipboard('btn');
    // clipboard.on('success', function (e) {
    //     console.info('Action:', e.action);
    //     console.info('Text:', e.text);
    //     console.info('Trigger:', e.trigger);
    //     e.clearSelection();
    //     alert("success copy!");
    // });
    // clipboard.on('error', function (e) {
    //     console.error('Action:', e.action);
    //     console.error('Trigger:', e.trigger);
    //     alert("error copy!");
    // });
})

