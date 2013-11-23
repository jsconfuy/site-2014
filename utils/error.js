exports.readableErrors = function(err) {
  if(err.name != 'ValidationError') return err;
  
  for(field in err.errors) {
    var error = err.errors[field];
    if(error && error.type) {
      switch(error.type) {
        case 'required':
          error.message = 'The ' + error.path + ' field is required.'
          break;
        case 'match':
          error.message = 'The ' + error.path + ' doesn\'t match.'
          break;
        case 'include':
          error.message = 'The ' + error.path + ' is not a valid value.'
          break;
      }
    }
    
  }
  return err;
}