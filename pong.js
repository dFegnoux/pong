window.onload = function() {
	var options = {
		netWidth: 5,
		fieldBordersWidth: 5,
		fieldPadding: 10,
		racketHeight: 100,
		racketWidth: 20
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

	// Player's Racket
	ctx.fillRect(options.fieldPadding, (canvas.height / 2) - (options.racketHeight / 2), options.racketWidth, options.racketHeight);
	ctx.fillRect(canvas.width - options.fieldPadding - options.racketWidth, (canvas.height / 2) - (options.racketHeight / 2), options.racketWidth, options.racketHeight);

}
