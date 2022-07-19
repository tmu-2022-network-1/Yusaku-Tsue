$(function(){
    $('.slider1').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 50, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 1, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: true, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

  $(function(){
    $('.slider2').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 50, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 1, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: true, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

  $(function(){
    $('.slider3').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 50, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 1, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: true, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

  // デフォルトは再生ボタンを非表示に
$('#startBtn').hide();
// 切り替えフラグを準備
var flg = "play";
// ボタンをクリックした時の処理
$('#tglBtn').click(function(){
  
// toggleでフラグを切り替え
  $('#startBtn').toggle();
  
// フラグの条件でボタンの切り替えと再生・停止の処理
  if(flg == "play") {
    $('#startBtn').show();
    $('#stopBtn').hide();
    flg = "stop";
    $('.slider1').slick('slickPause');
  } else {
    $('#startBtn').hide();
    $('#stopBtn').show();
    flg = "play";
    $('.slider1').slick('slickPlay');
  }
});

  // デフォルトは再生ボタンを非表示に
  $('#startBtn').hide();
  // 切り替えフラグを準備
  var flg = "play";
  // ボタンをクリックした時の処理
  $('#tglBtn2').click(function(){
    
  // toggleでフラグを切り替え
    $('#startBtn').toggle();
    
  // フラグの条件でボタンの切り替えと再生・停止の処理
    if(flg == "play") {
      $('#startBtn').show();
      $('#stopBtn').hide();
      flg = "stop";
      $('.slider2').slick('slickPause');
    } else {
      $('#startBtn').hide();
      $('#stopBtn').show();
      flg = "play";
      $('.slider2').slick('slickPlay');
    }
  });

    // デフォルトは再生ボタンを非表示に
    $('#startBtn').hide();
    // 切り替えフラグを準備
    var flg = "play";
    // ボタンをクリックした時の処理
    $('#tglBtn3').click(function(){
      
    // toggleでフラグを切り替え
      $('#startBtn').toggle();
      
    // フラグの条件でボタンの切り替えと再生・停止の処理
      if(flg == "play") {
        $('#startBtn').show();
        $('#stopBtn').hide();
        flg = "stop";
        $('.slider3').slick('slickPause');
      } else {
        $('#startBtn').hide();
        $('#stopBtn').show();
        flg = "play";
        $('.slider3').slick('slickPlay');
      }
    });