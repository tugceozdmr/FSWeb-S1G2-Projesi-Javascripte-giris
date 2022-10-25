/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZDEN EMİN OLUNUZ (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığınız kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanızı öneririz.
Bunu sağlamak için cevabı direk console'a loglayın veya çağırdığınız fonksiyondan dönen değeri console'a loglayın.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)
console.log(ehliyetYası(18))

Aşağıdakileri yapın:   
   1. surucuYasi diye bir değişken yaratın ve bir sayı atayın.

   2. Eğer yaş 18'den büyük ise Console'da True, değilse False değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/ var surucuYasi = 18 ;
if (surucuYasi>18) {console.log('True')} else {console.log('False')};






/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yapınız:   
   *1. 2 değişken oluşturun ve bunlara değerler atayın (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   *2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   *3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   *4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

var birinciDeger =9;
var ikinciDeger =7;

if (birinciDeger>ikinciDeger) {birinciDeger=8} ;
console.log(birinciDeger);









/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   *1. String türünde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let number = '1999' ;
console.log(Number(number));



/*
Görev 1d - Çarpma
 
Aşağıdakileri yapın:   
   *1. a ve b olarak 2 değer alın
   2. Aşağıdaki çarpma fonksiyonunu çağırarak, 2 sayıyı bu fonksiyona iletin
   3. a ve b'yi çarpıp, sonucu dönün
*/
var a=5;
var b=4;
function carpma(a,b){
  return a*b ;
}
console.log(carpma(5,4));





/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yapın:
 *1. Aşağıdaki fonksiyona bir değer ileterek çalıştırın.
 2. Gelen değeri kullanarak köpeğin yaşını hesaplayın (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */
var yas =10;
function kopeginYasi(yas){
  return yas*7;
}
console.log(kopeginYasi(yas));


/* Görev 3 */

// Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Aşağıdakileri yapın:
*1. Bilgisayarın seçimini rastgele oluşturacağımız bir değişken tanımlayın (bu fonksiyon içinde yaratılmalı)
*2. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
3. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun

Aşağıdakileri oyun isimli fonksiyonu kullanarak yapın.
1. 2 parametre alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/
/*function tkmOyunu(){return ()
  var rand = Math.random();
  console.log(rand);
  if (rand<0.33) 
    console.log(tas); 
  else if (rand>0.33&&rand<0.66) 
    console.log(kagıt); 
  else (rand>0.66&&rand<1);
  console.log(makas);
*/
function oyun(oyuncu, bilgisayar){
  let oyun_sonuc;
  let t="Taş";
  let k="Kağıt";
  let m="Makas";
  console.log(oyuncu);
  console.log(bilgisayar);
if(oyuncu===bilgisayar){
  oyun_sonuc="Beraberlik";
}
else if((oyuncu===t && bilgisayar===m) || (oyuncu===k && bilgisayar===t) || (oyuncu===m && bilgisayar==k) ){
  oyun_sonuc="Kazandın!";
}
else{
  oyun_sonuc="Kaybettin!";
}
return oyun_sonuc;
}

function oyun_hamle(oyuncu){
  let bilgisayar_rand = Math.random() * 1;
  let bilgisayar;
  if(bilgisayar_rand<0.30){
    bilgisayar="Taş";
  }
  else if (bilgisayar_rand>=0.30 && bilgisayar_rand<0.70){
    bilgisayar="Kağıt";
  }
  else{
    bilgisayar="Makas"
  }
  return oyun(oyuncu,bilgisayar)
}
console.log(oyun_hamle("Taş"));




/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdakileri milDonusturucu fonksiyonunu kullanarak yapın:
1. Kilometre değerini alın.
2. Aldığınız bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km){
  var mil=km*0.621371;
  return mil;
}
console.log(milDonusturucu(1));




//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yapın:
1. Santimetre değerini alın.
2. Aldığınız bu değeri feet'e dönüştürün
3. feet değerini geri dönün
*/

function feetDonusturucu(cm){
  var feet=cm/30.48
  return feet;
}
console.log(milDonusturucu(1));



/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımızı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yapın:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazdırmalı:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

function cocukSarkisi(mymn){
    var sarki=  "küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!";
    for(var i=mymn; i>0; i=1) {
    console.log(i+sarki)
    };
    return mymn+sarki;
  }
    console.log(cocukSarkisi(5));



/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yapın.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(not){
  if(not >=90 && not <= 100) { sonuc ="A aldın" ;}
  else if (not >=80 && not <= 89) {sonuc ="B aldın"; }
  else if (not >=70 && not <= 79) {sonuc ="C aldın"; }
  else if (not >=60 && not <= 69) {sonuc ="D aldın"; }
  else { sonuc = "F aldın" ;}
  return sonuc;
  }


/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yapın.
1. Bir parametre alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/


function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}



/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla
}
