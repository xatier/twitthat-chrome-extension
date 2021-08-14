chrome.tabs.query({ currentWindow : true, highlighted : true }, (tab) => {
    let {url, title} = tab[0];

    url = 'https://twitter.com/intent/tweet?'
        + `url=${encodeURIComponent(url)}`
        + `&text=${encodeURIComponent(title + "\n")}`

    chrome.tabs.create({ url : url });
});
