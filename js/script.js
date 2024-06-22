function openLink(appUrl, webUrl) {
   var win = window.open(appUrl, '_blank');
   setTimeout(function () {
      if (!win || win.closed || typeof win.closed == 'undefined') {
         window.open(webUrl, '_blank');
      }
   }, 100);
}