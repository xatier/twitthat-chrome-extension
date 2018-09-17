chrome.tabs.query({ currentWindow : true, highlighted : true }, function(tab) {
    var url = tab[0].url;
    var title = tab[0].title;

    url = 'https://twitter.com/intent/tweet?'
        + 'url=' + encodeURIComponent(url)
        + '&text=' + encodeURIComponent(title + '\n')

    chrome.tabs.create({ url : url });
});
