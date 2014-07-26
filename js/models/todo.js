var  app = app || {};
// Модель задачи
// -------------
// Модель задачи имеет атрибуты 'title', 'order', 'completed'
app.Todo = Backbone.Model.extend({
	// Атрибуты по умолчанию определяют, что у каждой созданной задачи будут ключи
	// 'title' и 'completed'.
	defaults: {
		title: '',
		completed: false
	},

	// Переключение состояния задачи 'completed'
	toggle: function(){
		this.save({
			completed: !this.get('completed')
		});
	}
});