module.exports = {
  get: function(options = {}, callback, err_callback) {
    options.method = "GET"
    this.request(options.url, options, callback)
  },
  post: function(options = {}, callback, err_callback) {
    options.method = "POST"
    this.request(options, callback)
  },

  request: function(options = {}, callback, err_callback) {
    console.log(options);
    fetch(options.url, options)
    .then(response => response.text())
    .then(responseText => {
      callback(responseText)
    }).catch(err => {
      err_callback(err)
    })
  }
}
