1.Обьяснить своими словами разницу между обьявлением переменных через var, let и const.

	Переменная var существовала до спецификации ES6 и на сегодня не используется в новом коде.
	
	Переменная let может принимать в себя данные, котрые позже могут быть изменены, так же
	может быть изменен тип данных переменной. Область видимости переменной ограничивается блоком
	в котором она обьявлена, также возможно обьявить переменную с таким же названием внутри блока
	в блоке, но опять же, ее значение будет доступно внутри внутренего блока, а во внешнем блоке
	будет зачение заданное во внешнем блоке.
	
	Переменная const является константой, и ни ее значение ни тип данных не могут быть изменены.
	Имеет такую же область видимости как и let.



2.Почему объявлять переменную через var считается плохим тоном?

	Потому что существуют области видимости переменных, и браузер сначала "пробегает" по блоку,
	и если там есть переменная var,то ее значение может быть использовано до ее обьявления,
	а также вне блока в котором она обьявлена.
	