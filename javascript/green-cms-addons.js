(function($) {
	$.entwine('ss', function($) {
		$('[name=TemplateData]').entwine({
			onmatch: function() {
				var label = this.closest('.field').find('label');
				var id = this.closest('form').find('[name=ID]').val();
				var klass = this.closest('form').find('[name=ClassName]').val();
				var button = '<a class="template-parse-button" href="/admin/green?id='+id+'&class='+klass+'">Load from template</a>';
				label.html(label.html() + '('+button+')');
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