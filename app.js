const form = document.querySelector('#shareable-form');

const url = new URL(window.location.href);
const params = url.searchParams;
form.querySelector('#name').value = params.get('name');
form.querySelector('#title').value = params.get('title');
form.querySelector('#ok').checked = params.get('ok') === 'true';

form.addEventListener('input', function(e) {
    switch (e.target.id) {
        case 'name':
            params.set('name', e.target.value);
            break;
        case 'title':
            params.set('title', e.target.value);
            break;
        case 'ok':
            params.set('ok', e.target.checked.toString());
            break;
    }
    window.history.replaceState(null, null, url);
});

function copyUrl() {
    navigator.clipboard.writeText(url.toString());
}