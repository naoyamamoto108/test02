//問1
function menseki(hankei){
    return "半径" + hankei + "cmの円の面積は" + hankei * hankei * 3.14 + "㎠です。<br>";
}

document.write(menseki(5));
document.write(menseki(7));
document.write(menseki(10));

document.write("<br>");

//問2　大人500円　子供200円　大人*500+子供*200
/*Aグループ　大人2人　子供4人
  Bグループ　大人1人　子供5人
  Cグループ　大人3人　子供7人*/

function sum1(adult , child){
    return "合計金額は" + (adult * 500 + child * 200) + "円です。";
}

document.write("Aグループの" + sum1(2, 4));
document.write("<br>");
document.write("Bグループの" + sum1(1, 5));
document.write("<br>");
document.write("Cグループの" + sum1(3, 7));

document.write("<br><br>");


//なんで "合計金額は" を削除したら計算式に () がなくても合計金額が表示される？
/*掛け算の式が先に計算される → 足し算の式があとから計算されるから？？
  adult * 500 → child * 200 → 「合計金額は + adult * 500 + child * 200 + 円です。」となる？？？
  A：「+」は文字列の連結や計算式で使われる。前後の文章によって文字列・計算式などのなにが優先されるかが変化するため、なにが優先されているかを見極めて () つけるかの判断をする*/

function sum3(adult , child){
    return adult * 500 + child * 200 + "円です。";
}

document.write("Aグループの" + sum3(2, 4));
document.write("<br>");
document.write("Bグループの" + sum3(1, 5));
document.write("<br>");
document.write("Cグループの" + sum3(3, 7));


document.write("<br><br>");


//スッキリさせたバージョン
function sum2(group, adult, child){
     return group + "グループの合計金額は" + (adult * 500 + child * 200) + "円です。<br>";
}

document.write(sum2("A", 2, 4));
document.write(sum2("B", 1, 5));
document.write(sum2("C", 3, 7));