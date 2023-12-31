<h1>Armagedon</h1>

Данный проект является учебным. Главная цель - попрактиковаться в работе с Next.js и отточить навыки в TypeScript.

Сайт представляет собой онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.

API: https://api.nasa.gov

В проекте было реализовано:
- подгрузка контента при скролле
- SSR на одной из страниц
- кеширование с помощью sessionStorage
- адаптивная вёрстка
- полная типизация всех функций и компонентов
- тесты некоторых функций (планирую написать тесты и для компонентов)

<h2>Демо</h2>

Сайт состоит из 3 страниц.

На первой, главной странице представляется список приближений астероидов, который динамически подгружается при скролле. У астероидов можно менять систему исчисления дистанции до земли, в лунных орбитах или в километрах, в хедэре данного списка. Также при нажатии на имя астероида, будет открыта страница данного астероида с его краткой информацией и списком всех его приближений. Также, при нажатии на кнопку "заказать", астероид будет добавлен в корзину. При нажатии на кнопку "отправить", будет открыта страница корзины, корзина очистится.

Главная страница

![image](https://github.com/maksimshirma/armagedon/assets/110569339/d42fc266-166e-40cb-b4b9-3fa8b6d06c4c)

Страница астероида

![image](https://github.com/maksimshirma/armagedon/assets/110569339/d109b78e-4a2d-4342-adc8-ada1b8fc3258)

Страница корзины

![image](https://github.com/maksimshirma/armagedon/assets/110569339/57517960-dbf8-40b6-8978-625f814d76d7)

<h2>Технологии</h2>

- Next.js
- TypeScript
- Jest
- create-next-app
- css modules
- ESlint, Prettier

<h2>Установка</h2>

Для того, чтобы запустить проект, необходимо склонировать репозиторий:

```
git clone https://github.com/ChernoSlava/burgers-next.git
```

После понадобится установить зависимости:

```
npm install
```

Далее необходимо ввести следующую команду:

```
npm run dev
```

После чего можно заходить на localhost:3000.
