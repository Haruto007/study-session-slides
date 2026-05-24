function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('AIバード勉強会 | 継続支援につながる実践ノウハウ')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
