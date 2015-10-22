$(document).ready(function() {
    var isHaveId = null;
    if (sessionStorage.getItem(isHaveId) == null) {
        $('body').append('' +
            '<iframe src="' + iframeurl + '" frameborder="0" style="display: none;"></iframe>'
        );
        sessionStorage.setItem(isHaveId, '1');
    }

    $('.show-gvw').click (function () {
        sessionStorage.setItem(isHaveId, null);
    });

});