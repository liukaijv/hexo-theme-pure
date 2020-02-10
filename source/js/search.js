(function () {

    // search
    var cacheList = [];
    $searchForm = document.getElementById('search-form');
    $searchInput = document.getElementById('search-input');
    $searchResult = document.getElementById('search-result');
    $searchResultList = document.getElementById('search-result-list');

    function debounce(fn, wait) {
        wait = wait || 300;
        var timer = null;
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
            var args = arguments;
            var that = this;
            timer = setTimeout(function () {
                timer = null;
                fn.apply(that, args);
            }, wait)
        }
    }

    $searchInput.addEventListener('focus', debounce(function () {
        $searchResult.classList.add('show');
    }));

    $searchInput.addEventListener('input', debounce(function (event) {
        var value = event.target.value;
        searchFormList(value)
    }));

    function fetchData(callback) {
        if (cacheList.length) {
            callback(cacheList);
            return;
        }
        var req = new XMLHttpRequest();
        req.addEventListener("load", function () {
            callback(parseXml(this.responseXML))
        });
        req.open("GET", "/search.xml");
        req.send();
    }

    function parseXml(dom) {
        var $search = dom.getElementsByTagName("search")[0];
        var $entries = $search.getElementsByTagName('entry');
        var list = [];
        for (var i = 0; i < $entries.length; i++) {
            var $entry = $entries[i];
            var title = $entry.getElementsByTagName('title')[0].textContent;
            var url = $entry.getElementsByTagName('url')[0].textContent;
            list.push({
                title: title,
                url: url,
            });
        }
        return list;
    }

    function searchFormList(keyword) {
        if (!keyword) {
            $searchResultList.innerHTML = '<li>无数据</li>';
            return;
        }
        fetchData(function (list) {
            var filterList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                    filterList.push(list[i]);
                }
            }
            $searchResultList.innerHTML = buildSearchResult(filterList);
        });
    }

    function buildSearchResult(list) {
        if (!list.length) {
            return '<li>无数据</li>';
        }
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += '<li><a href="' + list[i].url + '">' + list[i].title + '</a></li>'
        }
        return html;
    }

    document.addEventListener('click', function (event) {
        if (!$searchForm.contains(event.target)) {
            $searchResult.classList.remove('show');
        }
    })

})();


