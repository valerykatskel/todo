// определение модели TODO
debugger
var Todo = Backbone.Model.extend({
	// значения атрибутов todo по умолчанию
	defaults: {
		title: '',
		completed: false
	}
})

// создание экземпляра модели задачи с помощью ее названия,
// атрибут completed имеет значение false по умолчанию 
var myTodo = new Todo({
	title: 'Check attributes property of the logged models in the console.'
}) 

var TodoView = Backbone.View.extend({
	tagName: 'li',
	// Кэширование функции шаблона для отдельной задачи.
	todoTpl: _.template($('#item-template').html()),
	events: {
		'dbclick label'			: 'edit',
		'keypress .edit'		: 'updateOnEnter',
		'blur .edit'			: 'close'
	},
	// вызывается при первом создании представления
	initialize: function(){
		this.$el = $('#todo');
		// Позже мы рассмотрим вызов
		// this.listenTo(someCollection, 'all', this.render);
		// но вы можете запустить этот пример прямо сейчас,
		// вызвав метод TodoView.render();
		this.render();
	},
	// Повторное отображение заголовка задач.
	render: function(){
		this.$el.html( this.todoTpl( this.model.toJSON() ) );
		// Здесь $el - это ссылка на элемент jQuery,
		//связанный с представлением, todoTpl - ссылка
		//на Underscore-шаблон, а toJSON() - возвращает отбъект,
		//содержащий атрибуты модели.
		//В совокупности этот оператор заменяет HTML-код
		//DOM-элемента на результат создания
		//экземпляра шаблона с атрибутами модели.
		this.input = this.$('.edit');
		return this;
	},
	edit: function(){
		// выполняется при двойном щелчке по ярлыку задачи
	},
	close: function(){
		// выполняется когда задача теряет фокус
	},
	updateOnEnter: function(){
		// выполняется при каждом нажатии клавиши в режиме редактирования задачи,
		// но мы будем ждать нажатия enter, чтобы перейти в действие
	}
})
// создание представления задачи
var todoView = new TodoView({
	model: myTodo
})