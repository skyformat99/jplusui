﻿/** * @author xuld */using("System.Dom.Base");using("System.Fx.Color");using("System.Fx.Animate");Dom.implement({		/**	 * 高亮元素。	 * @param {String} color 颜色。	 * @param {Function} [callback] 回调。	 * @param {Number} duration=500 时间。	 * @return this	 */	highlight: function(color, duration, callback){		assert(!callback || Object.isFunction(callback), "Dom#highlight(color, duration, callback): 参数 {callback} 不是可执行的函数。", callback);		var fx = this.fx(),			back = {				target: this,				tweens: {},				duration: duration,				stop: callback			};				fx.run({			target: this,			tweens: {				backgroundColor: color || '#ffff88'			},			duration: duration,			start: function(){				back.back.backgroundColor = Dom.styleString(this.target.node, 'backgroundColor');			}		}).run(back);				return this;	}});