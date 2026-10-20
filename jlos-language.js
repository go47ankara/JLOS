/* JLOS 日本語／Türkçe：アルバトロスモードと筆順復習画面に対応。出題データやタイマーは変更しない。 */
(()=>{'use strict';
const KEY='jlos_ui_language';
const dict={
/* 鍛錬の場（知・研・行／6ゲーム）追加翻訳。既存ページの翻訳ルールは維持。 */
  "知り、研ぎ澄まし、行動する。":"Tanı. Düşün. Uygula.",
  "漢字を見抜き、意味を考え、手を動かす。":"Kanjileri dikkatle gözlemle, anlam ilişkilerini keşfet ve öğrendiklerini uygulamaya koy.",
  "三つの力を磨く、六つの鍛錬。":"Üç farklı becerini geliştir.",
  "六つの鍛錬":"Altı Alıştırma",
  "三つの領域、それぞれ二つのゲーム。":"Her kategoride iki oyun. Kendi becerilerini geliştir.",
  "認識する":"Tanı",
  "思考する":"Düşün",
  "実践する":"Uygula",
  "見つめ、比べ、違いを見抜く。":"Gözlemle, karşılaştır ve farklı olanı bul.",
  "意味を掘り下げ、つながりを探る。":"Anlamı çözümle, ilişkileri keşfet.",
  "覚え、書き、かたちにする。":"Hatırla, yaz ve yeniden oluştur.",
  "鶏群一鶴":"Sürüdeki Tek Turna",
  "一語一、え？":"Bir Kelime, Bir Terslik!",
  "五芒星":"Beş Köşeli Yıldız",
  "語縁鑑定":"Kanji Kimyası",
  "一筆入魂":"Tek Fırça, Tüm Ruh",
  "よく似た漢字の群れから、たった一文字の違いを見つけ出す。":"Birbirine çok benzeyen kanjiler arasında yalnızca bir farklı karakteri bul.",
  "四つの熟語を見比べ、漢字同士の関係が違う一語を見抜く。":"Dört iki-kanjili kelimeden, iç yapısı diğerlerinden farklı olanı bul.",
  "五つの漢字から、意味の共通点で結ばれる四文字を探し出す。":"Beş kanjiden, ortak anlam ilişkisi taşıyan dört tanesini seç.",
  "二つの漢字の「語縁」を鑑定。正しい熟語にならない組み合わせを探す。":"Kanjilerin birbiriyle kurduğu bağı araştır; hangi ikili geçerli bir kelime oluşturmaz?",
  "一瞬だけ見た漢字を記憶し、紙に書いて再現する。六つのモードで挑戦。":"Kısa bir an gördüğün kanjiyi hafızandan kâğıda yaz. Altı farklı modda dene.",
  "欠けた漢字の手がかりを読み取り、字形や文脈から復元する。":"Eksik kalmış kanjiyi, kalan çizgiler ve bağlamdan hareketle yeniden oluştur.",
  "日本各地の地名に使われる漢字に挑戦。":"Japonya’nın yer adlarında geçen kanjileri keşfet.",
  "漢字の記憶力を試す、もう一つの鍛錬。":"Kanji hafızanı başka bir şekilde sınamayı dene.",
  "これまでのクイズにも挑戦できます。":"Önceden hazırlanmış alıştırmalar burada da mevcut.",
  "挑戦する":"Başla",
  "開発中":"Geliştiriliyor",
'ユーザー名を入力':'Kullanıcı adını girin','ログイン':'Giriş yap','新規登録':'Yeni kayıt','直接ベースキャンプへ':'Doğrudan Base Camp’e git','ログイン状態を確認中...':'Giriş durumu kontrol ediliyor…','ログアウト':'Çıkış yap','ログインしていません':'Giriş yapılmadı','匿名ユーザー':'Anonim kullanıcı','ユーザー名を入力してください':'Lütfen kullanıcı adınızı girin','このユーザー名は登録されていません。登録ページに移動します。':'Bu kullanıcı adı kayıtlı değil. Kayıt sayfasına yönlendiriliyorsunuz.','ログインに失敗しました':'Giriş başarısız oldu.',
'JLOSへようこそ':'JLOS’a hoş geldiniz','文字について':'Yazı hakkında','鍛錬の場':'Alıştırma alanı','雑学至上主義':'İlginç bilgiler','準備中':'Hazırlanıyor','メインメニュー':'Ana menü',
'漢字を見抜き、構造を捉え、記憶して書く。':'Kanjileri tanıyın, yapılarını inceleyin, hatırlayın ve yazın.','知識だけに頼らない、文字の技能を鍛えよう。':'Yalnızca bilginizi değil, görsel hafızanızı da geliştirin.','三つの鍛錬':'Üç alıştırma','識別':'Ayırt etme','似ている漢字を見分け、細部の違いを捉える。':'Benzer kanjilerin küçük farklarını ayırt edin.','構造把握':'Yapıyı kavrama','漢字を部品に分け、数や配置、組み合わせを捉える。':'Kanjilerin parçalarını ve yerleşimlerini inceleyin.','記憶・再現':'Yeniden yazma','字形を記憶し、表示が消えた後に再現する。':'Kanjiyi aklınızda tutun ve kaybolduktan sonra yazın.','瞬視筆写':'Önce gör, sonra çiz','既存の鍛錬':'Diğer alıştırmalar','地名クイズ':'Yer adları testi','日本の地名に使われる漢字に挑戦。初級・中級・上級から選べます。':'Japonya’daki yer adlarında kullanılan kanjileri deneyin. Üç düzeyden birini seçin.','地名クイズへ':'Yer adları testine git','漢字記憶チャレンジ':'Kanji hafıza yarışması','既存の漢字記憶トレーニングに挑戦できます。':'Kanji hafıza alıştırmasını deneyin.','漢字記憶チャレンジへ':'Kanji hafıza yarışmasına git','← ベースキャンプへ戻る':'← Base Camp’e dön','← 鍛錬の場へ戻る':'← Alıştırma alanına dön',
'漢字を短い時間だけ見て、記憶して書くトレーニングです。':'Bir kanjiyi kısa süre görüp ezberleyerek yazma alıştırmasıdır.','一瞬の観察力と、正確に書き出す記憶力を鍛えましょう。':'Hızlı gözlem ve görsel hafıza becerilerinizi geliştirin.','観察時間を選ぶ':'Gözlem süresini seçin','このトレーニングについて':'Alıştırma hakkında','漢字プール':'Kanji havuzu','一文字挑戦コース':'Tek kanji alıştırması','1問につき1つの漢字を出題します。':'Her soruda bir kanji gösterilir.','全10問':'Toplam 10 soru','連続して10問に挑戦します。':'Arka arkaya 10 soruyu cevaplayın.','紙に書いて自己採点':'Kâğıda yazın, kendiniz değerlendirin','書き終わったら、○・△・×で採点します。':'Yazdıktan sonra ○, △ veya × ile değerlendirin.','漢字フォントを準備しています…（5モードすべて挑戦可能）':'Kanji yazı tipi hazırlanıyor… (5 modun hepsi kullanılabilir)','← モード選択へ戻る':'← Mod seçimine dön','観察中！ まだ書かないでください':'Bakma zamanı! Henüz yazmayın!','字形をよく覚えましょう':'Kanjinin şeklini iyice aklınızda tutun','筆記開始！':'Şimdi yazın!','今見た漢字を、記憶を頼りに紙に書いてください。':'Az önce gördüğünüz kanjiyi hafızanızdan kâğıda yazın.','筆記時間は無制限です。':'Yazmak için süre sınırı yok.','書き終えた → 答えを見る':'Yazdım → Cevabı göster','正解の漢字':'Doğru kanji','総画数':'Toplam çizgi sayısı','音読み':'On okunuşu','訓読み':'Kun okunuşu','書き順の確認':'Çizgi sırasını göster','書き順を閉じる':'Çizgi sırasını kapat','各画に記された数字が筆順を表します。':'Her çizginin üzerindeki sayı çizilme sırasını gösterir.','正確に再現できましたか？':'Kanjiyi doğru yazabildiniz mi?','○ 正解':'○ Doğru','△ 惜しい':'△ Neredeyse','× 不正解':'× Yanlış','終了':'Bitti','10問終了！':'10 soru tamamlandı!','もう一度挑戦する':'Tekrar dene','紙と筆記具を用意してください。':'Kâğıt ve kaleminizi hazırlayın.','観察中は書かないでください。':'Bakarken yazmayın.','漢字を表示する':'Kanjiyi göster','挑戦可能':'Başla','再試行':'Yeniden dene','画数データを確認中…':'Çizgi sayıları kontrol ediliyor…','漢字と画数の準備ができました。':'Kanji ve çizgi sayıları hazır.','Klee Oneフォントの読み込みが完了しました。':'Klee One yazı tipi hazır.','Klee Oneフォントを読み込み中…':'Klee One yazı tipi yükleniyor…','筆順フォントを読み込んでいます…':'Çizgi sırası yazı tipi yükleniyor…','読み方データは暫定版です。書き順はKanjiStrokeOrders 4.005（シラコバト100字版）を使用。画数：KANJIDIC系データ（kanjiapi.dev）を照合。':'Okunuş bilgileri geçicidir. Çizgi sırası KanjiStrokeOrders 4.005 yazı tipiyle, çizgi sayıları kanjiapi.dev verileriyle gösterilir.',
'1〜6画｜初心者向けプール':'1–6 çizgi | Başlangıç düzeyi','8〜12画｜原則常用漢字外・100字':'8–12 çizgi | 100 az kullanılan kanji','12〜18画':'12–18 çizgi','8〜24画｜未知の漢字を瞬時に観察する':'8–24 çizgi | Bilinmeyen kanjileri hızla gözlemleyin','25画以上｜上限なし・超難問':'25+ çizgi | Çok zor','8〜12画・原則常用漢字外の100字':'8–12 çizgi, 100 az kullanılan kanji','1〜6画・121字':'1–6 çizgi, 121 kanji','8〜12画・原則常用漢字外の100字':'8–12 çizgi, 100 az kullanılan kanji','12〜18画・99字':'12–18 çizgi, 99 kanji','8〜24画・134字（日本語の人名・地名・一般語などから選定／10問：3・5・2）':'8–24 çizgi, 134 kanji (kişi/yer adları ve genel sözcükler; 10 soru: 3–5–2)','25画以上・20字（現在の最大48画）':'25+ çizgi, 20 kanji (en çok 48 çizgi)','フォントを読み込めませんでした。ネット接続を確認して「再試行」を押してください。':'Yazı tipi yüklenemedi. İnternet bağlantınızı kontrol edip yeniden deneyin.','画数の取得に失敗しました。ネット接続を確認し、もう一度お試しください。':'Çizgi sayıları yüklenemedi. İnternet bağlantınızı kontrol edip yeniden deneyin.','書き順フォントを読み込めませんでした。サイト内のfontsフォルダを確認してください。':'Çizgi sırası yazı tipi yüklenemedi. Sitedeki fonts klasörünü kontrol edin.',
'一瞬見た漢字を、記憶を頼りに書く鍛錬です。':'Bir an gördüğünüz kanjiyi hafızanızdan yazma alıştırmasıdır.','鍛錬について':'Alıştırma hakkında','1. 見る':'1. Bak','文字を認識する':'Karakteri tanı','2. 覚える':'2. Hatırla','形態を記憶する':'Şeklini aklında tut','3. 書く':'3. Yaz','漢字を再構築する':'Kanjiyi yeniden oluştur','漢字が消えてから、紙に書いてください。':'Kanji kaybolduktan sonra kâğıda yaz.','鍛錬の詳しい説明を見る ▾':'Alıştırma ayrıntılarını göster ▾','詳しい説明を閉じる ▴':'Ayrıntıları gizle ▴','瞬視筆写のやり方':'Önce gör, sonra çiz: Nasıl yapılır?','3つのステップ':'3 adım','次回から表示しない':'Bir daha gösterme','確認して進む':'Anladım, devam et','使い方をもう一度見る':'Nasıl yapıldığını tekrar göster','選択する':'Seç','選択中':'Seçildi',
  "アルバトロス":"Albatros",
  "ニワトリ":"Tavuk",
  "シラコバト":"Halkalı kumru",
  "スズメ":"Serçe",
  "ハチドリ":"Sinek kuşu",
  "鳳凰":"Anka kuşu",
  "アルバトロス｜観察時間を設定":"Albatros | Gözlem süresini ayarla",
  "全プールから5問。1問ごとの表示時間を0.5〜8.0秒から選べます。":"Tüm kanji havuzundan rastgele 5 soru. Her soru için gösterim süresini 0,5–8,0 saniye arasında seçebilirsiniz.",
  "全プールから5問｜観察時間を自由に設定":"Tüm havuzdan 5 soru | Gözlem süresini kendiniz seçin",
  "漢字を表示する時間":"Kanji gösterim süresi",
  "アルバトロスの観察時間":"Albatros gözlem süresi",
  "自由設定":"Serbest ayar",
  "秒":"sn",
  "0.5〜8秒の範囲で、0.1秒単位の数字を入力してください。":"Lütfen 0,5–8 saniye arasında, 0,1 saniyelik adımlarla bir değer girin.",
  "写真：":"Fotoğraf:",
  "字形":"Kanji şekli",
  "筆順":"Çizgi sırası",
  "読み込み中":"Yükleniyor",
  "表示できません":"Gösterilemiyor",
  "正解":"Doğru",
  "惜しい":"Neredeyse",
  "不正解":"Yanlış",
  "KanjiStrokeOrders 4.005には未収録です":"KanjiStrokeOrders 4.005 yazı tipinde bulunmuyor.",
  "筆順の数字は各画を書く順番です。未収録の字は「—」で表示しています。":"Çizgilerin üzerindeki sayılar çizim sırasını gösterir. Yazı tipinde olmayan kanjiler “—” ile gösterilir.",
  "今回の漢字は、筆順フォントに未収録です。":"Bu sorulardaki kanjiler çizgi sırası yazı tipinde bulunmuyor.",
  "1〜6画・121字":"1–6 çizgi | 121 kanji",
  "12〜18画・139字":"12–18 çizgi | 139 kanji",
  "8〜24画・213字（10問：画数帯別に3・5・2問）":"8–24 çizgi | 213 kanji (10 soru: çizgi sayılarına göre 3–5–2)",
  "字形の複雑さ重視・120字（筆順未収録字を含む）":"Karmaşık şekilli 120 kanji (çizgi sırası bulunmayanlar dâhil)",
  "字形の複雑さ重視｜超難問":"Karmaşık kanji şekilleri | Çok zor",
  "漢字フォントを準備しています…（5モードすべて挑戦可能）":"Kanji yazı tipi hazırlanıyor…",
  "読み方データは暫定版です。書き順はKanjiStrokeOrders 4.005を使用（鳳凰の一部は未収録）。画数：KANJIDIC系データ（kanjiapi.dev）を照合。":"Okunuş bilgileri geçicidir. Çizgi sırası için KanjiStrokeOrders 4.005 kullanılır (bazı Anka kuşu modu kanjileri dâhil değildir). Çizgi sayıları kanjiapi.dev verileriyle karşılaştırılır."
};
const patterns=[
[/^選択中：(.+?)モード｜観察時間 (\d+(?:\.\d+)?)秒｜全(\d+)問$/,'Seçilen mod: $1 | Gözlem süresi: $2 sn | $3 soru'],
[/^第(\d+)問 \/ (\d+)問$/,'Soru $1 / $2'],
[/^(\d+)問終了！$/,'$1 soru tamamlandı!'],
[/^全(\d+)問$/,'Toplam $1 soru'],
[/^連続して(\d+)問に挑戦します。$/,'Arka arkaya $1 soruyu cevaplayın.'],
[/^全プール統合・重複除外した(\d+)字$/,'Tüm havuzlar birleştirildi: tekrarsız $1 kanji'],
[/^復習の時間です。(\d+)字をもう一度ノートに書き、右側の数字で筆順を確認しましょう。$/,'Tekrar zamanı! $1 kanjiyi defterinize yeniden yazın ve sağdaki numaralarla çizgi sırasını kontrol edin.'],
[/^(\d+)問の復習一覧$/,'$1 soruluk tekrar listesi'],
[/^第(\d+)問 (.+?) (正解|惜しい|不正解)$/,'Soru $1: $2 — $3'],
[/^(.+?)モード 観察時間を自由に設定$/,'$1 modu, gözlem süresini kendiniz seçin'],
[/^ログイン中：(.+)$/,'Giriş yapıldı: $1'],
[/^選択中：(.+?)モード｜観察時間 (\d+(?:\.\d+)?)秒｜全10問$/,'Seçilen mod: $1 | Görme süresi: $2 sn | 10 soru'],
[/^(.+?)モードに挑戦する$/,'$1 modunu başlat'],[/^(.+?)モードは準備中$/,'$1 modu hazırlanıyor'],
[/^瞬視筆写・(.+?)モード$/,'Önce gör, sonra çiz · $1 modu'],[/^瞬視筆写・(.+)$/,'Önce gör, sonra çiz · $1'],
[/^第(\d+)問 \/ 10問$/,'Soru $1 / 10'],[/^第(\d+)問$/,'Soru $1'],
[/^(\d+(?:\.\d+)?)秒$/,'$1 sn'],[/^(\d+)画$/,'$1 çizgi'],
[/^○ (\d+)問　△ (\d+)問　× (\d+)問$/,'○ $1 doğru　△ $2 yakın　× $3 yanlış'],
[/^この漢字の筆順はKanjiStrokeOrders Ver\.4\.005に未収録です。$/,'Bu kanji için çizgi sırası yazı tipinde bulunmuyor.'],
[/^(.+?)モード (\d+(?:\.\d+)?)秒$/,'$1 modu, $2 sn'],[/^(.+?)の写真$/,'$1 fotoğrafı'],[/^(.+?)のイラスト$/,'$1 çizimi']
];
const modeNames={'ニワトリ':'Tavuk','シラコバト':'Halkalı kumru','スズメ':'Serçe','ハチドリ':'Sinek kuşu','鳳凰':'Anka kuşu','アルバトロス':'Albatros'};
function translate(s){
  if(Object.hasOwn(dict,s))return dict[s];
  for(const [re,repl] of patterns){
    if(re.test(s)){
      const translated=s.replace(re,repl);
      return translated.replace(/ニワトリ|シラコバト|スズメ|ハチドリ|鳳凰|アルバトロス/g,name=>modeNames[name]||name)
        .replace(/ — (正解|惜しい|不正解)$/,(_,g)=>' — '+dict[g]);
    }
  }
  return s;
}
function walk(root,lang){if(lang!=='tr')return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!n.parentElement||n.parentElement.closest('script,style'))continue;const old=n.nodeValue,trim=old.trim();if(!trim)continue;const out=translate(trim);if(out!==trim)n.nodeValue=old.replace(trim,out)}if(root.nodeType===1){for(const el of [root,...root.querySelectorAll('*')]){for(const att of ['placeholder','aria-label','title']){if(el.hasAttribute?.(att)){const v=el.getAttribute(att);const tr=translate(v);if(v!==tr)el.setAttribute(att,tr)}}}}}
let lang=localStorage.getItem(KEY)==='tr'?'tr':'ja';
function updateSwitch(){document.documentElement.lang=lang;document.querySelectorAll('.jlos-languages button').forEach(b=>{const active=b.dataset.lang===lang;b.setAttribute('aria-pressed',String(active));b.style.background=active?'#1765bf':'#fff';b.style.color=active?'#fff':'#1765bf'});}
function init(){const bar=document.createElement('div');bar.className='jlos-languages';bar.setAttribute('aria-label','Dil / 言語');bar.style.cssText='position:fixed;top:10px;right:10px;z-index:9999;display:flex;gap:4px;padding:4px;background:#fff;border:1px solid #cad5e2;border-radius:12px;box-shadow:0 2px 9px #0001;font:600 13px system-ui,sans-serif';for(const [id,label] of [['ja','日本語'],['tr','Türkçe']]){const btn=document.createElement('button');btn.textContent=label;btn.dataset.lang=id;btn.type='button';btn.style.cssText='padding:7px 10px;border:0;border-radius:8px;cursor:pointer;font:inherit';btn.onclick=()=>{localStorage.setItem(KEY,id);location.reload()};bar.append(btn)}document.body.append(bar);document.body.style.paddingTop='max(58px, env(safe-area-inset-top))';updateSwitch();if(lang==='tr')walk(document.body,lang);const obs=new MutationObserver(records=>{if(lang!=='tr')return;obs.disconnect();for(const r of records){if(r.type==='childList'){for(const n of r.addedNodes){if(n.nodeType===1||n.nodeType===3)walk(n,lang)}if(r.target?.nodeType===1)walk(r.target,lang)}else if(r.type==='characterData'&&r.target.parentElement)walk(r.target.parentElement,lang)}obs.observe(document.body,{subtree:true,childList:true,characterData:true})});obs.observe(document.body,{subtree:true,childList:true,characterData:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
