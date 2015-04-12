chrome.tabs.query({ highlighted : true }, function(tab) {
    var url = tab[0].url;
    var title = tab[0].title;

    url = 'https://twitter.com/intent/tweet?'
        + 'text=' + encodeURI(title + '\n')
        + '&url=' + encodeURIComponent(url)

    chrome.tabs.create({ url : url });
});
