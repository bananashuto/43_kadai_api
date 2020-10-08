// window.prompt('準備はいい？？');
  

 //①イベント開始
$("#btn").on("click",function(){ 
    //②下ごしらえ
    const key = $("#key").val();
    const value = $("#todo").val();
    localStorage.setItem(key,value); 
        //③加工/処理/変形などなど 変なマシン投入。  
        const p = '<p>'+key+'<br>'+value+'</p>';
            //④出力
            // console.log(value);
            $("#list").append(p);   //吐き出したいとき、プロパティはほとんど"変数"なのでは

        let l = localStorage.length;
        console.log(l+"個");  
 

});

// *****************************
// クローンテスト
// *****************************

 //①イベント開始
 $("#tuika").on("click",function(){ 
    //②下ごしらえ
    let clone = $("#sentence").html();
        //③加工/処理/変形などなど 変なマシン投入。 (必要なのかわからんが。) 
            
            //④出力
            console.log("ok");
            $("#new").append(clone);
});

const ob1 = {
    name:"村上",
    email:"test.gmail.com",
    address:"Tokyo",
    tel:"090-5077-1783"         //一番最後は、カンマを付けない。
}



// *****************************
// 日にち
// *****************************

 //①イベント開始
 $("#allsave").on("click",function(){
    //②下ごしらえ
    let a = $("#name").val();
    let b = $("#email").val();
    let c = $("#tel").val();
    // let obj = {
    //     name:a,
    //     email:b,
    //     tel:c
    // }

        let obj = [a,b,c]
        localStorage.setItem('key',JSON.stringify(obj));

        //③加工/処理/変形などなど 変なマシン投入。 (必要なのかわからんが。) 
        //   let uu = '<ul><li>'+a+'</li><li>'+b+'</li><li>'+b+'</li></ul>'  
        //   let j = ' <li>'+JSON.stringify(obj)+'</li>'//実験中

            //④出力
            console.log(data)  
            $(".koko").append(data);  

});




// *****************************
// 日にち
// *****************************

//年:1900~2022

let now = new Date();           
let year = now.getFullYear(); 
let y = "";
for(let i=1900; i<year+5; i++){
    y += '<option value="'+i+'">'+i+'</option>';
}
$("#year").html(y);


//月:1~12 
let m = ""; 
for(let i=1; i<=12; i++){   
    m += '<option value="'+i+'">'+i+' </option>';
}
$("#month").html(m)


//日:1~31
//①クリックイベントなし
//②下ごしらえ
let d = "";
//③加工
for(let i=1; i<=31;i++){   //①初期値 ②何回回すのか ③プラスしていく
    d +='<option value="'+i+'">'+i+'</option>'
}
//③出力
$("#date").html(d)





















//①イベント発生(クリックイベント)


//②インプット(取得)
  //変数 (箱に入れる)
    //1.変数を「定義する」
    //2.変数にデータを入れておく(代入する)
    //3-a.変数からデータを「読み取る」
    //3-b.変数のデータを「書き換える」


//③料理?
  //if文 (条件)
  //for文 (繰り返し処理..ここは謎。)




//④アウトプット