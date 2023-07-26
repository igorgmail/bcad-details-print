## Модуль для CRM системы мебельной фабрики

### Описание.
Данный модуль представляет собой один из компонентов CRM системы для мебельной фабрики. Его основная функция заключается в печати списка деталей изделия, полученного из программы Bcad в формате CSV. При создании данного модуля, изначально он был разработан на базе React, входя в состав CRM системы. Позднее, с целью оптимизации и обеспечения максимальной совместимости, модуль был переписан на нативный JavaScript, используя подход AJAX.

При переходе на нативный JavaScript, в модуле были добавлены стили, а также реализована возможность загрузки демонстрационных данных для удобства пользователей.
<br>

<img src="https://i.ibb.co/3WKJSVL/Gif.gif" alt="Gif" width="80%" style="display: block; margin: 0 auto;">
<br>

### Функциональность модуля включает в себя:
1.  **Импорт данных**: Модуль позволяет пользователям CRM системы загружать список деталей в формате CSV, полученный из программы Bcad. Для обработки CSV данных используется npm пакет `iconv-lite`, что обеспечивает корректное чтение данных с различными кодировками.
2.  **Валидация данных**: При импорте данных модуль осуществляет проверку на корректность формата CSV и соответствие необходимым полям. Это помогает предотвратить возможные ошибки и убедиться, что важная информация не утрачивается в процессе обработки.
3.  **Обработка и преобразование данных**: После успешной загрузки CSV-файла, модуль выполняет обработку и преобразование данных в удобный для печати формат. Он структурирует информацию о деталях, сортирует по номеру деталей, и выводит в таблицу тот материал который нужен пользователю.
4.  **Позволяет распечатать** итоговую таблицу.

<br>
<img src="https://i.ibb.co/QYmBLCW/toPrint.png" alt="toPrint" width="80%" style="display: block; margin: 0 auto;">
<br>
 
### Сборка и работа статически

Для обеспечения легкой интеграции и возможности работы модуля даже без подключения к интернету, сборка производится с использованием инструмента `Browserify`. После сборки, модуль создает `boundle.js` в папке `public`, которая содержит все необходимые файлы для работы статически на любом устройстве . Это дает возможность использовать модуль в условиях ограниченной доступности интернета или на отдельных компьютерах без подключения к сети.

*Все что нужно для работы модуля уже содержится в папке `public`*

### Установить зависимости
```js
npm install
```
### Сборка 

```js
npm run build
```

