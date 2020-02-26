(function() {
	tinymce.create('tinymce.plugins.MyButtons', {
		init : function(ed, url) {
			
			ed.addButton( 'videos', {
				title : '添加视频',
				icon: 'media',
				text: 'YK',
				onclick : function() {
					ed.selection.setContent('[videos]' + ed.selection.getContent() + '[/videos]');
				}
			});
			
			ed.addButton( 'field', {
				title : 'fieldset标签',
				icon: 'template',
				onclick : function() {
					ed.selection.setContent('<fieldset><legend><i class="fa fa-cloud-download"></i>资源下载</legend><p>下载地址：百度云网盘</p></fieldset>' + ed.selection.getContent() + '');
				}
			});

            ed.addButton( 'redblockquote', {
				title : '红色引用',
				image : '', 
				text: '红',
				icon: 'blockquote',
				onclick : function() {
					ed.selection.setContent('<blockquote id="sc_error">' + ed.selection.getContent() + '按钮名称</blockquote>');
				}
			});
		
			ed.addButton( 'bilibili', {
				title : '哔哩哔哩',
				text: 'BL',
				icon: 'media',
				onclick : function() {
					ed.selection.setContent('[bilibili]' + ed.selection.getContent() + '[/bilibili]');
				}
			});
			ed.addButton( 'jiexi', {
				title : 'VIP解析',
				text: 'VIP',
				icon: 'media',
				onclick : function() {
					ed.selection.setContent('[jiexi]' + ed.selection.getContent() + '[/jiexi]');
				}
			});
            ed.addButton( 'ck', {
				title : 'ckplayer解析',
				text: 'CK',
				icon: 'media',
				onclick : function() {
					ed.selection.setContent('[ck]' + ed.selection.getContent() + '[/ck]');
				}
			});

			ed.addButton( 'img', {
				title : '添加相册',
				icon: 'image',
				onclick : function() {
					ed.selection.setContent('[img]插入图片' + ed.selection.getContent() + '[/img]');
				}
			});

			ed.addButton( 'addfolding', {
				title : '文字折叠',
				icon: 'pluscircle',
				onclick : function() {
					ed.selection.setContent('[s][p]<p>隐藏的文字</p>' + ed.selection.getContent() + '<p>[/p]</p>');
				}
			});

			ed.addButton( 'jishi', {
				title : '倒计时活动',
				icon: 'insertdatetime',
				onclick : function() {
					ed.selection.setContent('[countdown time="2018-01-18 02:00:00"]活动已结束' + ed.selection.getContent() + '[/countdown]');
				}
			});

		},
		createControl : function(n, cm) {
			return null;
		},
	});

	tinymce.PluginManager.add( 'my_button_script', tinymce.plugins.MyButtons );
})();