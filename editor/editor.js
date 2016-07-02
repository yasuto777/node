var editor = ace.edit("editor");
editor.$blockScrolling = Infinity;
editor.setOptions({
    //自動補完
    enableBasicAutocompletion: true
    , //スニペット
    enableSnippets: true
    , //ライブ補完
    enableLiveAutocompletion: true
});

//テーマの設定
editor.setTheme("ace/theme/monokai");
//モードの設定(Markdown)
editor.getSession().setMode("ace/mode/markdown");
//折り返し有効化
editor.getSession().setUseWrapMode(true);
//タブ幅2に設定
editor.getSession().setTabSize(2);