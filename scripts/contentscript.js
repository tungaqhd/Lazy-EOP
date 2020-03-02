'use strict';
$(() => {

    let jquery = document.createElement('script');
    jquery.src = chrome.extension.getURL('scripts/jquery.min.js');
    (document.head || document.documentElement).appendChild(jquery);

    jquery.onload = () => {
        let eop = document.createElement('script');
        eop.src = chrome.extension.getURL('scripts/eop.js');
        (document.head || document.documentElement).appendChild(eop);

        eop.onload = () => {
            let styles = document.createElement('link');
            styles.rel = 'stylesheet';
            styles.type = 'text/css';
            styles.href = chrome.extension.getURL('scripts/menu/eop-lazy-styles.css');
            (document.head || document.documentElement).appendChild(styles)
            
            let sidebarMenu = '<div class="eop-lazy-bar">';
            sidebarMenu += '<button type="button" class="eop-lazy-icon" onclick="smartMode();" title="Smart Mode: Tự động làm tất cả"><i class="fa fa-android fa-3x" aria-hidden="true"></i></button>';
            sidebarMenu += '<button type="button" class="eop-lazy-icon" onclick="listenAudio();" title="Tự động nghe"><i class="fa fa-headphones fa-3x" aria-hidden="true"></i></button>';
            sidebarMenu += '<button type="button" class="eop-lazy-icon" onclick="autoWrite();" title="Tự động điền"><i class="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i></button>';
            sidebarMenu += '<button type="button" class="eop-lazy-icon" onclick="autoFill();" title="Tự động khoanh"><i class="fa fa-check-square-o fa-3x" aria-hidden="true"></i></button>';
            sidebarMenu += '<button type="button" class="eop-lazy-icon" onclick="autoListenAndChoose();" title="Tự nghe và chọn đáp án đúng"><i class="fa fa-bars fa-3x" aria-hidden="true"></i></button>';

            sidebarMenu += '</div>';
            $('#dgmain').append(sidebarMenu);
        }
    }
})