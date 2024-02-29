$(function(){
//按下按鈕事件
    $('#subBtn').click(function () { 
        var name = $('#nameInput').val();
        var message = $('#mesInput').val();
       
        //建立留言區模板
        var htmlTemplate = `<div class="card text-white bg-info mb-3">
        <div class="card-header">${name}</div>
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
        // console.log(htmlTemplate);
        
            alert('請輸入完整資料');
        }
     
    });
});