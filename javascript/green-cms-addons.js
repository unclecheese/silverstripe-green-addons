(function($) {
	$.entwine('ss', function($) {
		$('[name=TemplateData]').entwine({
			onmatch: function() {
				
			}
		});
		$('a.template-parse-button').entwine({
			onclick: function(e) {
				e.preventDefault();
				$.ajax({
					url: this.attr('href'),
					dataType: 'JSON',
					success: function(json) {
						if(json.result) {
							var target = $('[name=TemplateData]');
							target.val(json.result);
							if(target.hasClass('codeeditor')) {								
								var divID = target.attr('id') + '_Ace';
								var editor = ace.edit(divID);
								editor.getSession().setValue(json.result);
							}
						}

					}					
				})
			}
		});
	});
})(jQuery);