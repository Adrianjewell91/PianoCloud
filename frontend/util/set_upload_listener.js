export const setUploadListener = () => {
  const inputs = document.getElementsByClassName('file-upload-btn');

  Array.prototype.forEach.call( inputs, function( input )
  {
    var label	 = input.parentElement.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        input.parentElement.innerHTML = fileName;
      else
        input.parentElement.innerHTML = label;
    });
  });
}
