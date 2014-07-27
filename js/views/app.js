var app = app || {};
// Наше приложение
// ---------------
// Представление AppView - верхний уровень пользовательского интерфейса.
app.AppView = Backbone.View.extend({

	// Вместо того, чтобы генерировать новый элемент, мы подключаемся
	// к существующему скелету приложения, имеющемуся в HTML.
	el: '#todoapp',

	// шаблон строки статистики в нижней части приложения.
	statsTemplate: _.template($('#stats-template').thml()),

	// при инициализации мы делаем привязку
	// к соответствующим событиям коллекции `Todos`
	// при добавлении и изменении событий.
	ititialize: function(){
		this.allCheckbox = this.$('#toggle-all').get(0);
		this.$input = this.$('#new-todo');
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');
		this.listenTo(app.Todos, 'add', this.addOne);
		this.listenTo(app.Todos, 'reset', this.addOne);

	},

	// Добавление в список единственной задачи путем создания
	// предствления для нее и добавления ее элемената в `<ul>`
	addOne: function(todo){
   		var view = new app.TodoView({model: todo});
   		$('#todo-list').append(view.render().el);
	},

	// Одновременное добавление всех элементов в коллекцию Todos.
	addAll: function(){
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	}
})