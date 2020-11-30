// Code adapted from https://developer.chrome.com/extensions/options

// Saves options to chrome.storage
function save_options() {
  var delimiterstyle = document.getElementById('delimiterstyle').value;
  chrome.storage.sync.set({
    delimiterstyle: delimiterstyle,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Option saved.';
    setTimeout(function() {
      status.innerHTML  = '&nbsp;';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    delimiterstyle: 'A' // default value here
  }, function(items) {
    document.getElementById('delimiterstyle').value = items.delimiterstyle;
  });
  status.textContent = '.';
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
	