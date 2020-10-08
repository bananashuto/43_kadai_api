

let flag = false;
let rec;
function start() {
    flag = true;
    // 初期化
    initSpeech();
    // 音声認識開始
    rec.start();
}

function initSpeech() {
    rec = new webkitSpeechRecognition(); 
    rec.lang = 'ja-JP';
    rec.continuous = true;

    //①イベント開始
    rec.addEventListener('start', function () {
        console.log("start");
    }, false);
    
    rec.addEventListener('result', function () {
        let results = event.results;
        for (var i = event.resultIndex; i < results.length; i++) {

            if (results[i].isFinal) {
                document.getElementById('result_text2').innerHTML +=results[i][0].transcript + "\n";
            }
            console.log("result");
        }      
    }, false);
}


function stop() {

    recognition.stop();
}

// 保存する
$("#save").on("click",function(){
    const value = $("#result_text2").val();
    const lng = $( 'tr' ).length;//長さをとってidにつける
    let key = "session" +(lng+1)

    let now = new Date();    
    let h = now.getHours();        
    let m = now.getMinutes(); 
    let s = now.getSeconds(); 
    let time = h+":"+m+":"+s;

    localStorage.setItem(key,value); 
    const memo = '<tr><th id=thname'+lng+'>'+key+'</th><td id=task'+lng+' class="itemp">'+value+'</td><td><button id="gyou'+lng+'">削除</button></td></tr>';

    $("#list").append(memo);
    // $(".textContent").val("");
    // document.location.reload()
    // console.log("ok");
    // alert("保存しました")

    
        $('#list #gyou'+lng+'').on('click', function(){      
            $(this).parent().parent().remove();
        });
});




//テキストエリア  クリアボタン
// function clearTextarea() {
// 	var textareaForm = document.getElementById("result_text2");
//   textareaForm.value = '';
// }

$("#clear").on("click",function(){
    $("#result_text2").val("");
});





$("#empty").on("click",function(){
    localStorage.clear();
    $("#list").empty();
    $("#result_text2").val("");
});

//リロード
$("#reload").on("click",function(){
    document.location.reload()
});




function save(){
    //json格納処理
    let data = [];
    let tableTrlength = $("#list tr");
    for(let i=0;i<tableTrlength.length;i++){
        let cells = tableTrlength.eq(i).children("th, td.itemp");//1行目から順番に列を取得(th、td)
        data[i] = [];
        for( let j=0,m=cells.length;j<m;j++ ){
            data[i][j] = cells.eq(j).text();//i行目j列の文字列を取得
        }
    }
    console.log(data);
    //var grstatus = [0,1];
    //localStorageに保存します。
    localStorage.setItem('json', JSON.stringify(data));
    // localStorage.setItem(value,responsible);
}






$("#memory").on('click',save);
    //ページリロード時の処理
    //localStorageから取り出し
    function load() {
        let data = JSON.parse(localStorage.getItem('json'));
        console.log(data);
        // if(data == null){
        //     return;
        // }
        let wak = "";
        for (let i = 0; i < data.length; i++) {
            wak += "<tr>";
            for (j = 0; j < data[i].length; j++) {
                if(j == 0){
                    wak += '<th id="thname'+i+'">';
                    wak += data[i][j];
                    wak += '</th>';
                }else{
                    wak += '<td id="task'+i+'" class="itemp">';
                    wak += data[i][j];
                    wak += '</td>';
                    wak += '<td><button id="gyou'+ i +'">削除</button></td>'
                };
            }
            wak += "</tr>";
        }
        // console.log(wak);
        $("#list").append(wak);
        for (let i = 0; i < data.length; i++) {
            $('#list #gyou'+i+'').on('click', function(){      
                const thname = $('#list #thname'+i+'').text();
                console.log(thname);
                $(this).parent().parent().remove();
                save();
            });
        }
    }
    load();



