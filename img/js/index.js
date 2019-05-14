$(document).ready(function (){ 
    $('#ul').hide(); //開啟頁面隱藏下拉選單 
    $('#it').hover( //滑鼠滑過導航欄目時 
    function(){ 
    $('#ul').show(); //顯示下拉選單 
    $(this).css({'color':'red','background-color':'orange'}); //設定導航欄目樣式，醒目 
    }, 
    function(){ 
    $('#ul').hide(); //滑鼠移開後隱藏下拉選單 
    } 
    ); 
    $('#ul').hover( //滑鼠滑過下拉選單自身也要顯示，防止無法點選下拉選單 
    function(){ 
    $('#ul').show(); 
    }, 
    function(){ 
    $('#ul').hide(); 
    $('#it').css({'color':'white','background-color':'black'}); //滑鼠移開下拉選單後，導航欄目的樣式也清除 
    } 
    ); 
    $('li').hover( //滑鼠滑過下拉選單是改變當前欄目樣式 
    function(){ 
    $(this).css({'color':'red','background-color':'orange'}); 
    }, 
    function(){ 
    $(this).css({'color':'white','background-color':'black'}); 
    } 
    ); 
    });