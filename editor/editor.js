var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
//折り返し有効化
editor.getSession().setUseWrapMode(true);
//タブ幅2に設定
editor.getSession().setTabSize(2);