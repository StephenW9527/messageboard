$(function(){
//按下按鈕事件
    $('#subBtn').click(function () { 
        var name = $('#nameInput').val();
        var message = $('#mesInput').val();
       
        //建立留言區模板
        var htmlTemplate = `<div class="card text-white bg-info mb-3">
        <div class="card-header">${name}<i class="fa-regular fa-trash-can delete"></i></div>
        <div class="card-body">
          <h4 class="card-title">says:</h4>
          <p class="card-text">${message}</p>
        </div>`;
        if( name.length > 0 && message.length > 0){
            $("#messageBoard").append(htmlTemplate);
            $('#nameInput').val('');
            $('#mesInput').val('');

        }else{

        //將模板貼到留言板上
            alert('請輸入完整資料');
        }
     
    });

    $('#circleBtn').click(function () {

        $('#formWindow').toggle(500);

    });


    //按下按鈕事件
    $('#subBtn1').click(function () { 
        var name = $('#nameInput1').val();
        var message = $('#mesInput1').val();
       
        //建立留言區模板
        var htmlTemplate = `<div class="card text-white bg-info mb-3">
        <div class="card-header">${name}<i class="fa-regular fa-trash-can delete"></i>
        </div>
        <div class="card-body">
          <h4 class="card-title">says:</h4>
          <p class="card-text">${message}</p>
        </div>`;
        if( name.length > 0 && message.length > 0){
            $("#messageBoard").append(htmlTemplate);
            $('#nameInput1').val('');
            $('#mesInput1').val('');
            $('#formWindow').hide();
        }else{

        //將模板貼到留言板上
            alert('請輸入完整資料');
        }
     
    });

    // 使用事件代理處理刪除操作
    $("#messageBoard").on("click", ".delete", function () {
        // 找到父元素卡片（card）並刪除
        $(this).closest('.card').remove();
    });
});