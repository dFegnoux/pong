window.onload = function() {
	var options = {
		netWidth: 5,
		fieldBordersWidth: 5,
		fieldPadding: 10
	}

	var canvas = document.getElementById('pong');
	var ctx = canvas.getContext('2d');
	
	// Set canvas size
	ctx.canvas.width  = window.innerWidth - 24;
	ctx.canvas.height = window.innerHeight - 24;

	// Field background
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// Field top & bottom bounds
	ctx.fillStyle = 'white';
	ctx.fillRect(options.fieldPadding, options.fieldPadding, canvas.width - 20, options.fieldBordersWidth);
	ctx.fillRect(options.fieldPadding, canvas.height - (10 + options.fieldBordersWidth), canvas.width - 20, options.fieldBordersWidth);
	
	// Field net
	ctx.fillStyle = 'white';
	ctx.fillRect((canvas.width/2) - (options.netWidth/2), options.fieldPadding, options.netWidth, canvas.height - (20 + options.fieldBordersWidth));

}
